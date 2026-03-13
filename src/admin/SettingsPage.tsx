import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
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

  const [admins, setAdmins] = useState<any[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [ownerEmails, setOwnerEmails] = useState("");
  const [emailAlerts, setEmailAlerts] = useState(true);

  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const loadAdmins = async () => {
    const res: any = await api.get("/admin/admins");
    setAdmins(res.data || []);
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  const registerAdmin = async () => {
    if (!email || !password) return alert("Enter email & password");

    await api.post("/admin/register",{ email,password })

    setEmail("");
    setPassword("");

    loadAdmins();
  };

  const resetPassword = async (id: number) => {
    const pass = prompt("Enter new password");

    if (!pass) return;

    await api.post(`/admin/reset-password/${id}`, {
      password: pass,
    });

    alert("Password updated");
  };

  const changePassword = async () => {
    if (!newPassword) return alert("Enter new password");

    const adminId = 1;

    await api.post(`/admin/reset-password/${adminId}`, {
      password: newPassword,
    });

    setNewPassword("");

    alert("Password updated");
  };

  const logoutAll = () => {
    clearToken();
      navigate("/admin/login");
  };

  const exportLeads = async () => {
    const res = await api.get("/admin/leads").catch(()=>({data:[]}));

    const leads = res.data;

    const csv =
      "Name,Phone,City,Service\n" +
      leads.map(
        (l: any) =>
          `${l.name},${l.phone},${l.city},${l.service}`
      ).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "leads.csv";
    a.click();
  };

  return (
    <AdminLayout>

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
          <Users className="w-7 h-7 text-blue-600"/>
          Admin Settings
        </h1>

        <p className="text-gray-500 mt-1 text-sm md:text-base">
          Manage administrators and system configuration
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ADMIN MANAGEMENT */}
        <Card className="p-6">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5"/>
            Admin Management
          </h2>

          {/* Create Admin */}
          <div className="flex flex-col md:flex-row gap-3 mb-5">

            <input
              placeholder="Admin email"
              className="border rounded-lg p-2 flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Password"
              type="password"
              className="border rounded-lg p-2 flex-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={registerAdmin}>
              Create
            </Button>

          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden md:block">

            <table className="w-full text-sm">

              <thead className="border-b">
                <tr>
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Created</th>
                  <th className="p-2 text-center">Action</th>
                </tr>
              </thead>

              <tbody>

                {admins.map((a) => (

                  <tr key={a.id} className="border-b">

                    <td className="p-2">{a.id}</td>

                    <td className="p-2">{a.email}</td>

                    <td className="p-2">
                      {new Date(a.created_at).toLocaleDateString()}
                    </td>

                    <td className="p-2 text-center">

                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => resetPassword(a.id)}
                        className="flex items-center gap-1"
                      >
                        <KeyRound className="w-4 h-4"/>
                        Reset
                      </Button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* MOBILE CARDS */}
          <div className="md:hidden space-y-3">

            {admins.map((a) => (

              <div
                key={a.id}
                className="border rounded-xl p-4 bg-gray-50"
              >

                <p className="font-semibold">
                  {a.email}
                </p>

                <p className="text-sm text-gray-500">
                  ID: {a.id}
                </p>

                <p className="text-sm text-gray-500 mb-3">
                  Created: {new Date(a.created_at).toLocaleDateString()}
                </p>

                <Button
                  size="sm"
                  onClick={() => resetPassword(a.id)}
                  className="w-full flex items-center gap-2 justify-center"
                >
                  <KeyRound className="w-4 h-4"/>
                  Reset Password
                </Button>

              </div>

            ))}

          </div>

        </Card>

        {/* SECURITY */}
        <Card className="p-6">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5"/>
            Security
          </h2>

          <input
            placeholder="New password"
            type="password"
            className="border rounded-lg p-2 w-full mb-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <div className="flex flex-col md:flex-row gap-3">

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
        <Card className="p-6">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5"/>
            Notifications
          </h2>

          <label className="flex items-center gap-2 mb-3">

            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={() => setEmailAlerts(!emailAlerts)}
            />

            Email alerts for new leads

          </label>

          <input
            placeholder="Owner emails (comma separated)"
            className="border rounded-lg p-2 w-full"
            value={ownerEmails}
            onChange={(e) => setOwnerEmails(e.target.value)}
          />

        </Card>

        {/* SYSTEM TOOLS */}
        <Card className="p-6">

          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Database className="w-5 h-5"/>
            System Tools
          </h2>

          <div className="flex flex-col md:flex-row gap-3">

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

    </AdminLayout>
  );
};

export default SettingsPage;