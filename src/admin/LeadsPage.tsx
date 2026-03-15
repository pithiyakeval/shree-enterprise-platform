import { useEffect,useState } from "react";
import LeadsTable from "./LeadsTable";
import api from "@/lib/api";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
RefreshCw,
Users,
Download
} from "lucide-react";


const LeadsPage = () => {

const [leads,setLeads]=useState<any[]>([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState("");


const loadLeads=async()=>{

try{

setLoading(true);
setError("");

const res=await api.get("/admin/leads");

setLeads(res.data || []);

}
catch(err:any){

console.log(
"LEADS ERROR:",
err.response?.data ||
err.message
);

setError("Failed to load leads");

}
finally{

setLoading(false);

}

};


useEffect(()=>{

loadLeads();

},[]);



/* EXPORT */

const exportLeads=()=>{

const csv=
"Name,Phone,City,Service\n"+
leads.map(
(l:any)=>
`${l.name},${l.phone},${l.city},${l.service}`
).join("\n");

const blob=new Blob([csv]);

const url=
window.URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="leads.csv";

a.click();

};



return(

<div className="space-y-6">


{/* HEADER */}

<div className="flex flex-col md:flex-row justify-between gap-4">

<div>

<h1 className="text-3xl font-bold flex items-center gap-2">

<Users className="text-blue-600"/>

All Leads

</h1>

<p className="text-gray-500">
Manage customer inquiries
</p>

</div>


<div className="flex gap-2">

<Button
onClick={loadLeads}
className="flex items-center gap-2"
>

<RefreshCw size={16}/>

Refresh

</Button>


<Button
onClick={exportLeads}
variant="secondary"
className="flex items-center gap-2"
>

<Download size={16}/>

Export

</Button>

</div>

</div>



{/* TABLE */}

<Card className="p-6 shadow">

{loading?

<div className="flex justify-center py-16">

<div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"/>

</div>

:

error?

<div className="text-center text-red-500 py-10">

{error}

</div>

:

leads.length===0?

<div className="text-center text-gray-400 py-12">

No leads found

</div>

:

<LeadsTable leads={leads}/>

}

</Card>


</div>

);

};

export default LeadsPage;