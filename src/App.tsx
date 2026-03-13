import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoutes";
import ChatbotWidget from "./components/Chatbot/ChatbotWidget";

import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/SolarServices";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SolarPricing from "./pages/SolarPricing";
import MandapGallery from "./pages/MandapGallery";
import MandapService from "./pages/MandapService";
import SolarImages from "./pages/SolarImage";
import MandapImages from "./pages/MandapImage";

/* ADMIN */
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import LeadsPage from "./admin/LeadsPage";
import SolarPage from "./admin/SolarPage";
import MandapPage from "./admin/MandapPage";
import SettingsPage from "./admin/SettingsPage";


/* QUERY CLIENT */
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      refetchOnWindowFocus:false
    }
  }
});


const App = () => (

<QueryClientProvider client={queryClient}>

<TooltipProvider>

<Toaster />

<Sonner />

<BrowserRouter>

<Navbar />

<Routes>

{/* PUBLIC ROUTES */}

<Route path="/" element={<Index />} />

<Route path="/about" element={<AboutUs />} />

<Route path="/solar-services" element={<Services />} />

<Route path="/mandap-services" element={<MandapService />} />

<Route path="/solar-projects" element={<SolarImages />} />

<Route path="/mandap-projects" element={<MandapImages />} />

<Route path="/help" element={<Help />} />

<Route path="/contact" element={<Contact />} />


{/* ADMIN LOGIN */}

<Route
path="/admin/login"
element={<AdminLogin />}
/>


{/* ADMIN PROTECTED ROUTES */}

<Route
path="/admin/dashboard"
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route
path="/admin/leads"
element={
<ProtectedRoute>
<LeadsPage/>
</ProtectedRoute>
}
/>

<Route
path="/admin/solar"
element={
<ProtectedRoute>
<SolarPage/>
</ProtectedRoute>
}
/>

<Route
path="/admin/mandap"
element={
<ProtectedRoute>
<MandapPage/>
</ProtectedRoute>
}
/>

<Route
path="/admin/settings"
element={
<ProtectedRoute>
<SettingsPage/>
</ProtectedRoute>
}
/>


{/* 404 */}

<Route
path="*"
element={<NotFound />}
/>

</Routes>

<Footer/>

<ChatbotWidget/>

</BrowserRouter>

</TooltipProvider>

</QueryClientProvider>

);

export default App;