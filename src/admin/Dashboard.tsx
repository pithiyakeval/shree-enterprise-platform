import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import LeadsTable from "./LeadsTable";
import CountUp from "react-countup";

import {
Sun,
Flower2,
Users,
Layers,
RefreshCcw,
Download,
TrendingUp,
Calendar
} from "lucide-react";

import {
ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
PieChart,
Pie,
Cell,
BarChart,
Bar,
Legend
} from "recharts";

const Dashboard = () => {

const [leads,setLeads]=useState<any[]>([]);
const [loading,setLoading]=useState(true);

const loadLeads=()=>{

setLoading(true);

api.get("/admin/leads")

.then((res:any)=>{

setLeads(res.data || []);

})

.finally(()=>setLoading(false));

};

useEffect(()=>{

loadLeads();

const interval=setInterval(()=>{

loadLeads();

},30000);

return()=>clearInterval(interval);

},[]);



/* STATS */

const today=new Date().toDateString();

const todayLeads=leads.filter(
l=> new Date(l.created_at).toDateString()===today
).length;

const stats={

total:leads.length,

solar:leads.filter(
l=>l.service?.toLowerCase()==="solar"
).length,

mandap:leads.filter(
l=>l.service?.toLowerCase()==="mandap"
).length,

both:leads.filter(
l=>l.service?.toLowerCase()==="both"
).length

};


const conversion=
stats.total===0
?0
:Math.round((stats.solar+stats.mandap)/stats.total*100);


const cards=[

{
label:"Total Leads",
value:stats.total,
icon:Users,
gradient:"from-blue-500 to-blue-700"
},

{
label:"Today Leads",
value:todayLeads,
icon:Calendar,
gradient:"from-indigo-500 to-indigo-700"
},

{
label:"Solar Leads",
value:stats.solar,
icon:Sun,
gradient:"from-yellow-400 to-yellow-600"
},

{
label:"Mandap Leads",
value:stats.mandap,
icon:Flower2,
gradient:"from-pink-500 to-pink-600"
},

{
label:"Both Services",
value:stats.both,
icon:Layers,
gradient:"from-purple-500 to-purple-700"
},

{
label:"Conversion %",
value:conversion,
icon:TrendingUp,
gradient:"from-green-500 to-green-700"
}

];


/* SERVICE DATA */

const serviceData=[
{name:"Solar",value:stats.solar},
{name:"Mandap",value:stats.mandap},
{name:"Both",value:stats.both}
];

const serviceColors=[
"#facc15",
"#ec4899",
"#8b5cf6"
];


/* CITY DATA */

const cityMap:any={};

leads.forEach(l=>{

if(!l.city) return;

if(!cityMap[l.city])
cityMap[l.city]=0;

cityMap[l.city]++;

});

const cityData=Object.keys(cityMap)
.map(city=>({

city,
leads:cityMap[city]

}));


/* STATUS */

const done=leads.filter(
l=>l.status==="done"
).length;

const pending=
leads.length-done;

const statusData=[

{name:"Done",value:done},
{name:"Pending",value:pending}

];

const statusColors=[
"#22c55e",
"#f59e0b"
];


/* GROWTH */

const dayMap:any={
Mon:0,Tue:0,Wed:0,
Thu:0,Fri:0,Sat:0,Sun:0
};

leads.forEach(l=>{

if(!l.created_at) return;

const day=
new Date(l.created_at)
.toLocaleDateString(
"en-US",
{weekday:"short"}
);

if(dayMap[day]!==undefined)
dayMap[day]++;

});

const leadsGrowth=
Object.keys(dayMap)
.map(day=>({

name:day,
leads:dayMap[day]

}));


/* EXPORT */

const exportLeads=()=>{

const csv=
"Name,Phone,City,Service\n"+
leads.map(l=>
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

<div className="space-y-8">


{/* HEADER */}

<div className="flex flex-col md:flex-row md:justify-between gap-4">

<div>

<h1 className="text-3xl font-bold">
Dashboard Overview
</h1>

<p className="text-gray-500">
Monitor leads and performance
</p>

</div>


<div className="flex gap-3">

<button
onClick={loadLeads}
className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
>

<RefreshCcw size={16}/>

Refresh

</button>


<button
onClick={exportLeads}
className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow"
>

<Download size={16}/>

Export

</button>

</div>

</div>



{/* STATS */}

<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">

{cards.map((c,i)=>(

<div
key={i}
className={`p-6 rounded-2xl text-white bg-gradient-to-br ${c.gradient} shadow-lg transition hover:scale-[1.02]`}
>

<div className="flex justify-between">

<div>

<p className="opacity-80 text-sm">
{c.label}
</p>

<h2 className="text-4xl font-bold">

{loading
?"—"
:<CountUp end={c.value}/>}

</h2>

</div>

<div className="bg-white/20 p-3 rounded-lg">

<c.icon/>

</div>

</div>

</div>

))}

</div>



{/* RECENT */}

<Card className="p-6 shadow">

<h2 className="text-xl font-semibold mb-4">
Recent Leads
</h2>

{loading?

<div className="flex justify-center py-12">

<div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"/>

</div>

:

leads.length===0?

<div className="text-center text-gray-400 py-10">

No leads yet

</div>

:

<LeadsTable leads={leads}/>

}

</Card>



{/* CHARTS */}

<div className="grid xl:grid-cols-2 gap-6">


<Card className="p-6 shadow">

<h2 className="font-semibold mb-4">
Leads Growth
</h2>

<ResponsiveContainer width="100%" height={280}>

<LineChart data={leadsGrowth}>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>

<Line
dataKey="leads"
stroke="#2563eb"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</Card>



<Card className="p-6 shadow">

<h2 className="font-semibold mb-4">
Service Distribution
</h2>

<ResponsiveContainer width="100%" height={280}>

<PieChart>

<Pie
data={serviceData}
dataKey="value"
outerRadius={90}
label
>

{serviceData.map((_,i)=>(
<Cell key={i}
fill={serviceColors[i]}/>
))}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</Card>



<Card className="p-6 shadow">

<h2 className="font-semibold mb-4">
Leads by City
</h2>

<ResponsiveContainer width="100%" height={280}>

<BarChart data={cityData}>

<XAxis dataKey="city"/>

<YAxis/>

<Tooltip/>

<Bar
dataKey="leads"
fill="#6366f1"
radius={[6,6,0,0]}
/>

</BarChart>

</ResponsiveContainer>

</Card>



<Card className="p-6 shadow">

<h2 className="font-semibold mb-4">
Lead Status
</h2>

<ResponsiveContainer width="100%" height={260}>

<PieChart>

<Pie
data={statusData}
dataKey="value"
innerRadius={60}
outerRadius={90}
label
>

{statusData.map((_,i)=>(
<Cell key={i}
fill={statusColors[i]}/>
))}

</Pie>

<Tooltip/>

<Legend/>

</PieChart>

</ResponsiveContainer>

</Card>


</div>


</div>

);

};

export default Dashboard;