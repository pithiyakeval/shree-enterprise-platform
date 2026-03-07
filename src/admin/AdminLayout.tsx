import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Sun,
  Flower2,
  Layers,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  User
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {

  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const logout = () => {
    localStorage.removeItem("auth_token");
    window.location.href = "/admin/login";
  };

  const nav = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "All Leads", path: "/admin/leads", icon: Users },
    { label: "Solar Requests", path: "/admin/solar", icon: Sun },
    { label: "Mandap Requests", path: "/admin/mandap", icon: Flower2 },
    { label: "Both Services", path: "/admin/both", icon: Layers },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F7FB]">

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed md:static top-0 left-0 h-full z-50
        ${collapsed ? "w-20" : "w-72"}
        transition-all duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >

        {/* Curvy container */}
        <div className="h-full bg-white rounded-r-3xl shadow-2xl border-r flex flex-col">

          {/* Header */}
          <div className="px-6 py-6 border-b flex items-center justify-between">

            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold tracking-tight">
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
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <ChevronRight className="w-5 h-5" />
                ) : (
                  <ChevronLeft className="w-5 h-5" />
                )}
              </button>

              <X
                className="w-6 h-6 md:hidden cursor-pointer"
                onClick={() => setMobileOpen(false)}
              />

            </div>

          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2 flex-1">

            {nav.map((item) => {

              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`
                  group flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${active
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"}
                `}
                >

                  <item.icon className="w-5 h-5" />

                  {!collapsed && (
                    <span className="font-medium">
                      {item.label}
                    </span>
                  )}

                </Link>
              );

            })}

          </nav>

          {/* Bottom User Block */}
          <div className="border-t p-4">

            {!collapsed && (
              <div className="flex items-center gap-3 mb-4">

                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                  A
                </div>

                <div>
                  <p className="text-sm font-medium">Admin</p>
                  <p className="text-xs text-gray-500">System Manager</p>
                </div>

              </div>
            )}

            {/* Logout */}
            <button
              onClick={logout}
              className="
              w-full flex items-center justify-center gap-2
              py-3 rounded-xl
              bg-red-500 text-white
              hover:bg-red-600
              transition
              shadow
            "
            >

              <LogOut className="w-4 h-4" />

              {!collapsed && "Logout"}

            </button>

          </div>

        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Header */}
        <header
          className="
          md:hidden flex items-center justify-between
          bg-white border-b shadow-sm h-16 px-4
        "
        >

          <Menu
            className="w-7 h-7 cursor-pointer"
            onClick={() => setMobileOpen(true)}
          />

          <h2 className="font-semibold">
            Shree Enterprise
          </h2>

          <User className="w-6 h-6 text-gray-400" />

        </header>

        {/* Desktop Header */}
        <header
          className="
          hidden md:flex items-center justify-between
          bg-white border-b shadow-sm h-16 px-8
        "
        >

          <h2 className="font-semibold text-lg">
            Admin Dashboard
          </h2>

          <div className="flex items-center gap-3">

            <div className="text-right">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-gray-500">System Manager</p>
            </div>

            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center">
              A
            </div>

          </div>

        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto">

          {children}

        </main>

      </div>

    </div>
  );
};

export default AdminLayout;