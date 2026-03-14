import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { clearToken } from "@/lib/auth";

import {
Menu,
X,
LayoutDashboard,
Users,
Sun,
Flower2,
Settings,
LogOut,
ChevronLeft,
ChevronRight,
User
} from "lucide-react";


const AdminLayout = () => {

const location = useLocation();
const navigate = useNavigate();

const [mobileOpen,setMobileOpen]=useState(false);
const [collapsed,setCollapsed]=useState(false);


const logout=()=>{

clearToken();

navigate("/admin/login");

};


const nav=[

{label:"Dashboard",path:"/admin/dashboard",icon:LayoutDashboard},

{label:"All Leads",path:"/admin/leads",icon:Users},

{label:"Solar Requests",path:"/admin/solar",icon:Sun},

{label:"Mandap Requests",path:"/admin/mandap",icon:Flower2},

{label:"Settings",path:"/admin/settings",icon:Settings},

];


return (

<div className="flex min-h-screen bg-[#F5F7FB]">


{/* MOBILE OVERLAY */}

{mobileOpen && (

<div
className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
onClick={()=>setMobileOpen(false)}
/>

)}



{/* SIDEBAR */}

<aside

className={`
fixed md:static top-0 left-0 h-full z-50
${collapsed?"w-20":"w-72"}
transition-all duration-300
${mobileOpen?"translate-x-0":"-translate-x-full md:translate-x-0"}
`}

>

<div className="h-full bg-white rounded-r-3xl shadow-xl border-r flex flex-col">


{/* HEADER */}

<div className="px-6 py-6 border-b flex items-center justify-between">

{!collapsed && (

<div>

<h1 className="text-lg font-bold">
☀️ Shree Enterprise
</h1>

<p className="text-xs text-gray-500">
Admin Panel
</p>

</div>

)}


<div className="flex items-center gap-2">

<button
className="hidden md:block"
onClick={()=>setCollapsed(!collapsed)}
>

{collapsed?

<ChevronRight className="w-5 h-5"/>

:

<ChevronLeft className="w-5 h-5"/>

}

</button>


<X
className="w-6 h-6 md:hidden cursor-pointer"
onClick={()=>setMobileOpen(false)}
/>

</div>

</div>



{/* NAVIGATION */}

<nav className="p-4 space-y-2 flex-1">

{nav.map((item)=>{

const active=
location.pathname.startsWith(item.path);

return(

<Link

key={item.path}

to={item.path}

onClick={()=>setMobileOpen(false)}

className={`
flex items-center gap-3 px-4 py-3 rounded-xl
transition-all duration-200

${active?

"bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow"

:

"text-gray-700 hover:bg-gray-100"

}

`}

>

<item.icon className="w-5 h-5"/>

{!collapsed && (

<span className="font-medium">

{item.label}

</span>

)}

</Link>

);

})}

</nav>



{/* FOOTER */}

<div className="border-t p-4">

{!collapsed && (

<div className="flex items-center gap-3 mb-4">

<div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">

A

</div>

<div>

<p className="text-sm font-medium">

Admin

</p>

<p className="text-xs text-gray-500">

System Manager

</p>

</div>

</div>

)}



<button

onClick={logout}

className="
w-full flex items-center justify-center gap-2
py-3 rounded-xl
bg-red-500 text-white
hover:bg-red-600
transition
"

>

<LogOut className="w-4 h-4"/>

{!collapsed && "Logout"}

</button>

</div>

</div>

</aside>



{/* MAIN */}

<div className="flex-1 flex flex-col">


{/* MOBILE HEADER */}

<header className="md:hidden flex items-center justify-between bg-white border-b shadow-sm h-16 px-4">

<Menu
className="w-7 h-7 cursor-pointer"
onClick={()=>setMobileOpen(true)}
/>

<h2 className="font-semibold">

Shree Enterprise

</h2>

<User className="w-6 h-6 text-gray-400"/>

</header>



{/* DESKTOP HEADER */}

<header className="hidden md:flex items-center justify-between bg-white border-b shadow-sm h-16 px-8">

<h2 className="font-semibold text-lg">

Admin Dashboard

</h2>

<div className="flex items-center gap-3">

<div className="text-right">

<p className="text-sm font-medium">

Admin

</p>

<p className="text-xs text-gray-500">

System Manager

</p>

</div>

<div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">

A

</div>

</div>

</header>



{/* CONTENT */}

<main className="flex-1 p-4 md:p-8 overflow-y-auto">

<Outlet/>

</main>


</div>


</div>

);

};

export default AdminLayout;