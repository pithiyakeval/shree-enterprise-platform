import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import api from "@/lib/api";
import SolarTable from "./SolarTable";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Sun } from "lucide-react";

const SolarPage = () => {

  const [list,setList]=useState<any[]>([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState("");

  const loadData=async()=>{

    try{

      setLoading(true);

      setError("");

      const res=await api.get("/admin/solar");

      const formatted=(res.data || []).map((row:any)=>({

        id:row?.base?.id,

        name:row?.base?.name,

        phone:row?.base?.phone,

        city:row?.base?.city,

        kw:row?.solar?.kw || "-",

        budget:row?.solar?.budget || "-",

        message:row?.base?.message,

        where_from:row?.base?.where_from,

        status:row?.base?.status

      }));

      setList(formatted);

    }
    catch(err:any){

      console.log(
        "SOLAR ERROR:",
        err.response?.data ||
        err.message
      );

      setError(
        "Failed to load solar requests"
      );

    }
    finally{

      setLoading(false);

    }

  };

  useEffect(()=>{

    loadData();

  },[]);

  return (

    <AdminLayout>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-3">

        <div>

          <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-2">

            <Sun className="w-8 h-8 text-yellow-500"/>

            Solar Requests

          </h1>

          <p className="text-gray-500 mt-1">

            Manage solar installation inquiries

          </p>

        </div>

        <Button
          onClick={loadData}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black"
        >

          <RefreshCw className="w-4 h-4"/>

          Refresh

        </Button>

      </div>

      <Card className="p-6 bg-white shadow-xl border border-gray-200 rounded-2xl">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-lg font-semibold text-gray-800">

            Solar Leads

          </h2>

          <span className="text-sm text-gray-400">

            Total: {list.length}

          </span>

        </div>

        {loading && (

          <div className="flex justify-center py-16">

            <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"/>

          </div>

        )}

        {!loading && error && (

          <div className="text-center py-10 text-red-500">

            {error}

          </div>

        )}

        {!loading && !error && (

          <SolarTable data={list}/>

        )}

      </Card>

    </AdminLayout>

  );

};

export default SolarPage;