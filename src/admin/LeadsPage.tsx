import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import LeadsTable from "./LeadsTable";
import { api } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Users } from "lucide-react";

const LeadsPage = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadLeads = async () => {
    setLoading(true);
    const res: any = await api.get("/admin/leads");
    setLeads(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <AdminLayout>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-3">

        <div>
          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-600"/>
            All Leads
          </h1>

          <p className="text-gray-500 mt-1">
            Manage and track all customer inquiries
          </p>
        </div>

        <Button
          onClick={loadLeads}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw className="w-4 h-4"/>
          Refresh
        </Button>

      </div>


      {/* Leads Card */}
      <Card className="p-6 shadow-xl bg-white border border-gray-200 rounded-2xl">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-semibold text-gray-800">
            Leads List
          </h2>

          <span className="text-sm text-gray-400">
            Total: {leads.length}
          </span>

        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>
          </div>
        ) : (
          <LeadsTable leads={leads} />
        )}

      </Card>

    </AdminLayout>
  );
};

export default LeadsPage;