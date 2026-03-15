import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { Card } from "@/components/ui/card";
import { clearToken } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
Users,
Plus,
KeyRound,
Shield,
Bell,
Database,
Download
} from "lucide-react";

const SettingsPage = () => {

const [admins,setAdmins]=useState<any[]>([]);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [ownerEmails,setOwnerEmails]=useState("");
const [emailAlerts,setEmailAlerts]=useState(true);

const [newPassword,setNewPassword]=useState("");

const navigate=useNavigate();


const loadAdmins=async()=>{

const res:any=await api.get("/admin/admins");

setAdmins(res.data || []);

};


useEffect(()=>{

loadAdmins();

},[]);



const registerAdmin=async()=>{

if(!email || !password)
return alert("Enter email & password");

await api.post("/admin/register",{

email,
password

});

setEmail("");
setPassword("");

loadAdmins();

};



const resetPassword=async(id:number)=>{

const pass=prompt("Enter new password");

if(!pass) return;

await api.post(`/admin/reset-password/${id}`,{

password:pass

});

alert("Password updated");

};



const changePassword=async()=>{

if(!newPassword)
return alert("Enter new password");

const adminId=1;

await api.post(`/admin/reset-password/${adminId}`,{

password:newPassword

});

setNewPassword("");

alert("Password updated");

};



const logoutAll=()=>{

clearToken();

navigate("/admin/login");

};



const exportLeads=async()=>{

const res=await api
.get("/admin/leads")
.catch(()=>({data:[]}));

const leads=res.data;

const csv=
"Name,Phone,City,Service\n"+
leads.map((l:any)=>
`${l.name},${l.phone},${l.city},${l.service}`
).join("\n");

const blob=new Blob([csv]);

const url=window.URL.createObjectURL(blob);

const a=document.createElement("a");

a.href=url;

a.download="leads.csv";

a.click();

};



return(

<div className="space-y-6">


{/* HEADER */}

<div>

<h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">

<Users className="w-7 h-7 text-blue-600"/>

Admin Settings

</h1>

<p className="text-gray-500">

Manage administrators and system configuration

</p>

</div>



{/* GRID */}

<div className="grid lg:grid-cols-2 gap-6">


{/* ADMIN MANAGEMENT */}

<Card className="p-6 shadow-sm">

<h2 className="font-semibold mb-4 flex items-center gap-2">

<Plus className="w-5 h-5"/>

Admin Management

</h2>


<div className="flex flex-col md:flex-row gap-3 mb-5">

<input
placeholder="Admin email"
className="border rounded-lg p-2 flex-1"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>


<input
placeholder="Password"
type="password"
className="border rounded-lg p-2 flex-1"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>


<Button onClick={registerAdmin}>

Create

</Button>

</div>


<div className="space-y-2">

{admins.map((a)=>(

<div
key={a.id}
className="flex items-center justify-between border rounded-lg p-3 bg-gray-50"
>

<div>

<p className="font-medium">
{a.email}
</p>

<p className="text-xs text-gray-500">
ID {a.id} • {new Date(a.created_at).toLocaleDateString()}
</p>

</div>


<Button
size="sm"
variant="secondary"
onClick={()=>resetPassword(a.id)}
className="flex items-center gap-1"
>

<KeyRound className="w-4 h-4"/>

Reset

</Button>

</div>

))}

</div>

</Card>



{/* SECURITY */}

<Card className="p-6 shadow-sm">

<h2 className="font-semibold mb-4 flex items-center gap-2">

<Shield className="w-5 h-5"/>

Security

</h2>


<input
placeholder="New password"
type="password"
className="border rounded-lg p-2 w-full mb-3"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
/>


<div className="flex gap-3">

<Button onClick={changePassword}>

Update Password

</Button>


<Button
variant="destructive"
onClick={logoutAll}
>

Logout All

</Button>

</div>

</Card>



{/* NOTIFICATIONS */}

<Card className="p-6 shadow-sm">

<h2 className="font-semibold mb-4 flex items-center gap-2">

<Bell className="w-5 h-5"/>

Notifications

</h2>


<label className="flex items-center gap-2 mb-3">

<input
type="checkbox"
checked={emailAlerts}
onChange={()=>setEmailAlerts(!emailAlerts)}
/>

Email alerts for new leads

</label>


<input
placeholder="Owner emails"
className="border rounded-lg p-2 w-full"
value={ownerEmails}
onChange={(e)=>setOwnerEmails(e.target.value)}
/>

</Card>



{/* SYSTEM */}

<Card className="p-6 shadow-sm">

<h2 className="font-semibold mb-4 flex items-center gap-2">

<Database className="w-5 h-5"/>

System Tools

</h2>


<div className="flex gap-3">

<Button
onClick={exportLeads}
className="flex items-center gap-2"
>

<Download className="w-4 h-4"/>

Export Leads

</Button>


<Button variant="secondary">

Backup Database

</Button>

</div>

</Card>


</div>


</div>

);

};

export default SettingsPage;