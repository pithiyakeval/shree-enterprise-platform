import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoutes";
import ChatbotWidget from "./components/Chatbot/ChatbotWidget";


/* ================= PUBLIC PAGES ================= */

import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import SolarServices from "./pages/SolarServices";
import MandapService from "./pages/MandapService";
import SolarImages from "./pages/SolarImage";
import MandapImages from "./pages/MandapImage";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


/* ================= ADMIN ================= */

import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import LeadsPage from "./admin/LeadsPage";
import SolarPage from "./admin/SolarPage";
import MandapPage from "./admin/MandapPage";
import SettingsPage from "./admin/SettingsPage";
import AdminLayout from "./admin/AdminLayout";


/* ================= QUERY CLIENT ================= */

const queryClient = new QueryClient({

  defaultOptions:{

    queries:{
      retry:1,
      refetchOnWindowFocus:false,
      staleTime:60000
    }

  }

});


/* ================= PUBLIC LAYOUT ================= */

const PublicLayout = () => (

<>
<Navbar/>

<main className="min-h-screen">
<Outlet/>
</main>

<Footer/>

<ChatbotWidget/>

</>

);



/* ================= APP ================= */

const App = () => (

<QueryClientProvider client={queryClient}>

<TooltipProvider>

<Toaster/>

<Sonner/>

<BrowserRouter>

<Routes>

{/* ================= PUBLIC ROUTES ================= */}

<Route element={<PublicLayout/>}>

<Route path="/" element={<Index/>}/>

<Route path="/about" element={<AboutUs/>}/>

<Route path="/solar-services" element={<SolarServices/>}/>

<Route path="/solar-projects" element={<SolarImages/>}/>

<Route path="/mandap-services" element={<MandapService/>}/>

<Route path="/mandap-projects" element={<MandapImages/>}/>

<Route path="/help" element={<Help/>}/>

<Route path="/contact" element={<Contact/>}/>

</Route>



{/* ================= ADMIN LOGIN ================= */}

<Route
path="/admin/login"
element={<AdminLogin/>}
/>



{/* ================= ADMIN PROTECTED ================= */}

<Route
path="/admin"
element={

<ProtectedRoute>

<AdminLayout/>

</ProtectedRoute>

}
>

<Route index element={<Dashboard/>}/>

<Route path="dashboard" element={<Dashboard/>}/>

<Route path="leads" element={<LeadsPage/>}/>

<Route path="solar" element={<SolarPage/>}/>

<Route path="mandap" element={<MandapPage/>}/>

<Route path="settings" element={<SettingsPage/>}/>

</Route>



{/* ================= 404 ================= */}

<Route path="*" element={<NotFound/>}/>


</Routes>

</BrowserRouter>

</TooltipProvider>

</QueryClientProvider>

);

export default App;