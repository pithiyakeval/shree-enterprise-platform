import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoutes";
import ChatbotWidget from "./components/Chatbot/ChatbotWidget";
import CookieConsent from "./components/CookieConsent";

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
import Privacy from "./pages/Privacy";

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
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 60000,
    },
  },
});

/* ================= ANALYTICS TRACKER ================= */
// Must be INSIDE <BrowserRouter> to use useLocation
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID?.trim();
    if (!GA_ID || !(window as any).gtag) return;

    // Only fire if user has granted analytics consent
    const stored = localStorage.getItem("cookie_consent_v2");
    if (!stored) return;
    try {
      const { prefs } = JSON.parse(stored);
      if (!prefs?.analytics) return;
    } catch {
      return;
    }

    (window as any).gtag("config", GA_ID, {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

/* ================= PUBLIC LAYOUT ================= */
const PublicLayout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet />
    </main>
    <Footer />
    <ChatbotWidget />
  </>
);

/* ================= APP ================= */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ AnalyticsTracker is inside BrowserRouter — can use useLocation */}
        <AnalyticsTracker />

        {/* ✅ CookieConsent is inside BrowserRouter — links like /privacy work */}
        <CookieConsent
          GA_ID={import.meta.env.VITE_GA_ID}
          companyName="Shree Enterprise"
          privacyPolicyUrl="/privacy"
          cookiePolicyUrl="/cookies"
        />

        <Routes>
          {/* ── PUBLIC ── */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/solar-services" element={<SolarServices />} />
            <Route path="/solar-projects" element={<SolarImages />} />
            <Route path="/mandap-services" element={<MandapService />} />
            <Route path="/mandap-projects" element={<MandapImages />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy /> } />
          </Route>

          {/* ── ADMIN LOGIN ── */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ── ADMIN PROTECTED ── */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="solar" element={<SolarPage />} />
            <Route path="mandap" element={<MandapPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* ── 404 ── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;