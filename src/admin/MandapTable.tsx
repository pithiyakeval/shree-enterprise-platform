import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Trash2, Phone, MapPin, Sparkles } from "lucide-react";
import MandapModal from "./MandapModal";
import { api } from "@/lib/api";

const PAGE_SIZE = 8;

const MandapTable = ({ data }: { data: any[] }) => {
  const [rows, setRows] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    setRows(data || []);
  }, [data]);

  /* ---------------- Filtering ---------------- */

  const filtered = rows.filter((r) => {
    const q = search.trim().toLowerCase();

    return (
      !q ||
      r.name?.toLowerCase().includes(q) ||
      r.phone.includes(q) ||
      r.city?.toLowerCase().includes(q)
    );
  });

  /* ---------------- Pagination ---------------- */

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  /* ---------------- Delete ---------------- */

  const confirmDelete = async () => {
    if (!deleteId) return;

    await api.delete(`/admin/lead/${deleteId}`)
    .catch(()=>alert("Delete failed"));

    setRows((r) => r.filter((x) => x.id !== deleteId));
    setDeleteId(null);

    if(page>1 && paginated.length===1){
      setPage(page-1);
    }
  };

  return (
    <>
      {/* SEARCH */}
      <div className="mb-4 flex flex-col md:flex-row gap-3">

        <input
          placeholder="Search name, phone, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
        />

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block">

        <Card className="p-6 shadow-xl rounded-2xl overflow-auto">

          <table className="w-full text-sm">

            <thead className="bg-gradient-to-r from-pink-500 to-pink-700 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">City</th>
                <th className="p-3 text-left">Event Type</th>
                <th className="p-3 text-left">Budget</th>
                <th className="p-3 text-left">Event Date</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {paginated.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-500">
                    No mandap leads found
                  </td>
                </tr>
              )}

              {paginated.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-pink-50 transition"
                >
                  <td className="p-3 font-semibold">{row.name}</td>
                  <td className="p-3">{row.phone}</td>
                  <td className="p-3">{row.city}</td>
                  <td className="p-3">{row.event_type}</td>
                  <td className="p-3">{row.budget}</td>
                  <td className="p-3">{row.event_date}</td>

                  <td className="p-3 flex gap-2 justify-center">

                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setSelected(row)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setDeleteId(row.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </Button>

                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </Card>

      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">

        {paginated.map((row) => (
          <Card
            key={row.id}
            className="p-4 shadow-lg bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200"
          >

            <h3 className="text-lg font-bold text-pink-800 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-pink-600"/>
              {row.name}
            </h3>

            <p className="text-sm flex items-center gap-1 mt-1">
              <Phone className="w-4 h-4"/>
              {row.phone}
            </p>

            <p className="text-sm flex items-center gap-1">
              <MapPin className="w-4 h-4"/>
              {row.city}
            </p>

            <p className="text-sm mt-1">
              Event: {row.event_type}
            </p>

            <p className="text-sm">
              Budget: {row.budget}
            </p>

            <p className="text-sm">
              Date: {row.event_date}
            </p>

            <div className="flex gap-2 mt-3">

              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelected(row)}
              >
                <Eye className="w-4 h-4"/>
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => setDeleteId(row.id)}
              >
                <Trash2 className="w-4 h-4"/>
              </Button>

            </div>

          </Card>
        ))}

      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-6">

        <Button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </Button>

        <span className="px-3 py-1 text-sm">
          Page {page} / {totalPages || 1}
        </span>

        <Button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>

      </div>

      {/* DELETE MODAL */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white rounded-xl p-6 shadow-lg w-80">

            <h2 className="text-lg font-bold mb-3">
              Delete Lead
            </h2>

            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete this mandap request?
            </p>

            <div className="flex justify-end gap-2">

              <Button
                variant="secondary"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </Button>

              <Button
                variant="destructive"
                onClick={confirmDelete}
              >
                Delete
              </Button>

            </div>

          </div>

        </div>
      )}

      {/* MODAL */}
      {selected && (
        <MandapModal
          row={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default MandapTable;