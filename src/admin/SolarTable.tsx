  import { useState, useEffect } from "react";
  import { Card } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import {
    Eye,
    Trash2,
    Search,
    Sun,
    Phone,
    MapPin
  } from "lucide-react";

  import SolarModal from "./SolarModal";
  import { api } from "@/lib/api";

  const PAGE_SIZE = 8;

  const SolarTable = ({ data }: { data: any[] }) => {

    const [rows, setRows] = useState<any[]>(data || []);
    const [selected, setSelected] = useState<any>(null);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
      setRows(data || []);
    }, [data]);

    // SEARCH
    const filtered = rows.filter((r) => {
      const q = search.toLowerCase();

      return (
        r.name?.toLowerCase().includes(q) ||
        r.phone?.includes(q) ||
        r.city?.toLowerCase().includes(q)
      );
    });

    // PAGINATION
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

    const paginated = filtered.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );

    const deleteLead = async (id: number) => {
      if (!confirm("Delete this solar lead?")) return;

      await api.delete(`/admin/lead/${id}`);

      setRows((prev) => prev.filter((r) => r.id !== id));
    };

    return (
      <>
        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-3 mb-5">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400"/>

            <input
              placeholder="Search by name, phone, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-lg pl-9 p-2.5 focus:ring-2 focus:ring-yellow-400"
            />
          </div>

        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden md:block">

          <Card className="overflow-auto border border-gray-200 rounded-xl shadow-lg">

            <table className="w-full text-sm">

              <thead className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">City</th>
                  <th className="p-4 text-left">KW</th>
                  <th className="p-4 text-left">Budget</th>
                  <th className="p-4 text-center">Actions</th>
                </tr>
              </thead>

              <tbody>

                {paginated.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-10 text-center text-gray-500">
                      No solar leads found
                    </td>
                  </tr>
                )}

                {paginated.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b hover:bg-yellow-50 transition"
                  >

                    <td className="p-4 font-semibold">
                      {row.name}
                    </td>

                    <td className="p-4">
                      {row.phone}
                    </td>

                    <td className="p-4">
                      {row.city}
                    </td>

                    <td className="p-4">
                      {row.kw || "-"}
                    </td>

                    <td className="p-4">
                      {row.budget || "-"}
                    </td>

                    <td className="p-4 flex justify-center gap-2">

                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => setSelected(row)}
                        className="flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4"/>
                        View
                      </Button>

                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteLead(row.id)}
                        className="flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4"/>
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

          {paginated.map((row) => (

            <Card
              key={row.id}
              className="p-4 bg-yellow-50 border border-yellow-200 shadow rounded-xl"
            >

              <div className="flex justify-between">

                <div>

                  <h3 className="text-lg font-bold text-yellow-800 flex items-center gap-1">
                    <Sun className="w-4 h-4"/>
                    {row.name}
                  </h3>

                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <Phone className="w-4 h-4"/>
                    {row.phone}
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4"/>
                    {row.city}
                  </p>

                  <p className="mt-2 text-sm text-yellow-700 font-medium">
                    {row.kw || "-"} • {row.budget || "-"}
                  </p>

                </div>

                <div className="flex flex-col gap-2">

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
                    onClick={() => deleteLead(row.id)}
                  >
                    <Trash2 className="w-4 h-4"/>
                  </Button>

                </div>

              </div>

            </Card>

          ))}

        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-6">

            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                size="sm"
                variant={page === i + 1 ? "default" : "outline"}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}

          </div>
        )}

        {/* MODAL */}
        {selected && (
          <SolarModal
            row={selected}
            onClose={() => setSelected(null)}
          />
        )}

      </>
    );
  };

  export default SolarTable;