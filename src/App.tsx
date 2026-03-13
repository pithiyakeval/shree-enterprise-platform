import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/SolarServices";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SolarPricing from "./pages/SolarPricing";
import MandapGallery from "./pages/MandapGallery";
import MandapService from "./pages/MandapService";
import Footer from "./components/Footer";
// Admin Pages
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/Dashboard";
import LeadsPage from "./admin/LeadsPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import SolarPage from "./admin/SolarPage";
import MandapPage from "./admin/MandapPage";
import  ChatbotWidget from "./components/Chatbot/ChatbotWidget";
import SettingsPage from "./admin/SettingsPage";
import SolarImages from "./pages/SolarImage";
import MandapImages from "./pages/MandapImage";



/// ai chatbot

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/solar-services" element={<Services />} />
          <Route path="/mandap-services" element={<MandapService />} />
          <Route path="/solar-projects" element={<SolarImages />} />
          <Route path="/mandap-projects" element={<MandapImages />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
            
          {/* ADMIN PANEL */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
           <ProtectedRoute>
                 <Dashboard />
          </ProtectedRoute>
          } />
        <Route path="/admin/leads" element={
        <ProtectedRoute>
           <LeadsPage />
        </ProtectedRoute>
         } />

         <Route path="/admin/solar" element={<SolarPage />} />
         <Route path="/admin/mandap" element={<MandapPage />} />
         <Route path="/admin/settings" element={<SettingsPage />} />

         {/* ai route of chatbot which is ai/chat*/}
         
         
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />

          
        </Routes>
        <Footer/>
        <ChatbotWidget/>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
