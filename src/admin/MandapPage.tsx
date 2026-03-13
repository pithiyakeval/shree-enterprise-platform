import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { api } from "@/lib/api";
import MandapTable from "./MandapTable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sparkles } from "lucide-react";

const MandapPage = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);

    const res: any = await api.get("/admin/mandap");

    const formatted = res.data.map((row: any) => ({
      id: row.base.id,
      name: row.base.name,
      phone: row.base.phone,
      city: row.base.city,
      event_type: row.mandap.event_type,
      budget: row.mandap.budget,
      event_date: row.mandap.event_date,
      message: row.base.message,
      where_from: row.base.where_from,
      status: row.base.status,
    }));

    setList(formatted);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AdminLayout>

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-3">

        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-pink-500" />
            Mandap Requests
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all mandap decoration inquiries
          </p>
        </div>

        <Button
          onClick={loadData}
          className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>

      </div>

      {/* MAIN CARD */}
      <Card className="p-6 bg-white shadow-xl border border-gray-200 rounded-2xl">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-semibold text-gray-800">
            Mandap Leads
          </h2>

          <span className="text-sm text-gray-400">
            Total: {list.length}
          </span>

        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <MandapTable data={list} />
        )}

      </Card>

    </AdminLayout>
  );
};

export default MandapPage;