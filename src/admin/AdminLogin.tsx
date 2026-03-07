import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Sun, Lock, Mail, Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(email, password);

    if (success) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">

      {/* Left Branding */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-center text-white px-10">
        <div className="animate-bounce mb-6">
          <Sun className="w-16 h-16" />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Shree Enterprise
        </h1>

        <p className="text-lg opacity-90 text-center max-w-md">
          Manage solar installations and mandap decoration leads easily with your
          smart admin dashboard.
        </p>

        <div className="mt-10 opacity-70 text-sm">
          Secure • Fast • Reliable
        </div>
      </div>

      {/* Login Card */}
      <div className="flex flex-1 items-center justify-center px-4">

        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

          {/* Header */}
          <div className="flex flex-col items-center mb-6">

            <div className="bg-blue-100 p-3 rounded-xl mb-2 animate-pulse">
              <Sun className="text-blue-600 w-8 h-8" />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Admin Login
            </h2>

            <p className="text-gray-500 text-sm">
              Access your dashboard
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded mb-4">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

              <input
                type="email"
                placeholder="Admin Email"
                className="w-full border border-gray-300 pl-10 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 pl-10 pr-10 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>

            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm items-center">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </button>

            </div>

            {/* Login Button */}
            <button
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition shadow-md disabled:opacity-60 flex justify-center items-center gap-2"
            >

              {loading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}

              {loading ? "Signing in..." : "Login"}

            </button>

          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-6">
            Secure Admin Access • Shree Enterprise
          </p>

        </div>

      </div>

    </div>
  );
}