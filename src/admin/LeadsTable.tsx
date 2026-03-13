import { useState, useEffect } from "react";
import LeadModal from "./LeadModal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  CheckCircle,
  Eye,
  Phone,
  MapPin,
  Sparkles,
  ArrowUpDown,
} from "lucide-react";
import { api } from "@/lib/api";

interface Lead {
  id: number;
  name: string;
  phone: string;
  service: string;
  city: string;
  where_from?: string;
  status?: string;
}

const PAGE_SIZE = 8;

const LeadsTable = ({ leads }: { leads: Lead[] }) => {
  const [selected, setSelected] = useState<Lead | null>(null);
  const [data, setData] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("name");
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    setData(leads || []);
  }, [leads]);

  /* ---------------- Filtering ---------------- */

  const filtered = data
    .filter((l) => {
      const q = search.trim().toLowerCase();

      const matchSearch =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.phone.includes(q) ||
        l.city.toLowerCase().includes(q);

      const matchFilter = !filter || l.service === filter;

      return matchSearch && matchFilter;
    })
    .sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "city") return a.city.localeCompare(b.city);
      if (sort === "service") return a.service.localeCompare(b.service);
      return 0;
    });

  /* ---------------- Pagination ---------------- */

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const paginated = filtered.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  /* ---------------- Actions ---------------- */

  const markDone = async (id: number) => {
    await api.post(`/admin/lead/${id}/done`);
    setData((d) => d.map((x) => (x.id === id ? { ...x, status: "Done" } : x)));
  };

  const confirmDelete = async () => {
    if (!deleteId) return;

    await api.delete(`/admin/lead/${deleteId}`);

    setData((d) => d.filter((x) => x.id !== deleteId));
    setDeleteId(null);
  };

  /* ---------------- UI ---------------- */

  return (
    <>
      {/* Search + Controls */}
      <div className="flex flex-col lg:flex-row gap-3 mb-5">

        <input
          placeholder="Search name, phone, city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg p-2 w-44"
        >
          <option value="">All Services</option>
          <option value="Solar">Solar</option>
          <option value="Mandap">Mandap</option>
          <option value="Both">Both</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg p-2 w-44"
        >
          <option value="name">Sort by Name</option>
          <option value="city">Sort by City</option>
          <option value="service">Sort by Service</option>
        </select>

      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block">

        <Card className="p-6 shadow-xl rounded-2xl overflow-auto">

          <table className="w-full text-sm">

            <thead className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">City</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {paginated.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-500">
                    No leads found
                  </td>
                </tr>
              )}

              {paginated.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="p-3 font-semibold">{lead.name}</td>
                  <td className="p-3">{lead.phone}</td>
                  <td className="p-3">{lead.city}</td>
                  <td className="p-3">{lead.service}</td>

                  <td className="p-3">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lead.status === "Done"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {lead.status || "Pending"}
                    </span>

                  </td>

                  <td className="p-3 flex gap-2 justify-center">

                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setSelected(lead)}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>

                    {lead.status !== "Done" && (
                      <Button
                        size="sm"
                        className="bg-green-600 text-white"
                        onClick={() => markDone(lead.id)}
                      >
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Done
                      </Button>
                    )}

                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => setDeleteId(lead.id)}
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

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4">

        {paginated.map((lead) => (
          <Card
            key={lead.id}
            className="p-4 bg-gradient-to-br from-blue-50 to-blue-100"
          >

            <h3 className="font-bold text-blue-800 flex gap-1">
              <Sparkles className="w-4 h-4" />
              {lead.name}
            </h3>

            <p className="flex items-center text-sm mt-1">
              <Phone className="w-4 h-4 mr-1" />
              {lead.phone}
            </p>

            <p className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {lead.city}
            </p>

            <p className="text-sm mt-1">Service: {lead.service}</p>

            <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                lead.status === "Done"
                  ? "bg-green-200 text-green-800"
                  : "bg-yellow-200 text-yellow-800"
              }`}
            >
              {lead.status || "Pending"}
            </span>

            <div className="flex gap-2 mt-3">

              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelected(lead)}
              >
                <Eye className="w-4 h-4" />
              </Button>

              {lead.status !== "Done" && (
                <Button
                  size="sm"
                  className="bg-green-600 text-white"
                  onClick={() => markDone(lead.id)}
                >
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}

              <Button
                size="sm"
                variant="destructive"
                onClick={() => setDeleteId(lead.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>

            </div>

          </Card>
        ))}

      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">

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

      {/* Delete Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white rounded-xl p-6 shadow-lg w-80">

            <h2 className="text-lg font-bold mb-3">
              Delete Lead
            </h2>

            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete this lead?
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

      {/* Lead Modal */}
      {selected && (
        <LeadModal
          lead={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default LeadsTable;