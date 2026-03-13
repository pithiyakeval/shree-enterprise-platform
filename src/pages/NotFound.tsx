import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {

  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-indigo-50">

      {/* BACKGROUND BLOBS */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-400/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center max-w-xl px-6"
      >

        {/* BIG 404 */}

        <h1 className="text-[120px] md:text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">

          404

        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">

          Page Not Found

        </h2>

        <p className="text-muted-foreground mb-8">

          The page you are looking for doesn’t exist or may have been moved.

        </p>

        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow hover:scale-105 transition"
          >

            <Home size={18} />

            Go Home

          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border bg-white/70 backdrop-blur hover:bg-white transition"
          >

            <ArrowLeft size={18} />

            Go Back

          </button>

        </div>

      </motion.div>

    </div>
  );
}