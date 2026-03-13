import AdminLayout from "./AdminLayout";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import LeadsTable from "./LeadsTable";
import CountUp from "react-countup";

import {
  Sun,
  Flower2,
  Users,
  Layers,
  RefreshCcw,
  Download
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";

const Dashboard = () => {

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  /* ---------------------------------- */
  /* FETCH LEADS */
  /* ---------------------------------- */

  const loadLeads = () => {

    setLoading(true);

    api
      .get("/admin/leads")
      .then((res: any) => {

        setLeads(res.data || []);

      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {

    loadLeads();

    /* REAL TIME AUTO REFRESH */

    const interval = setInterval(() => {

      loadLeads();

    }, 30000); // 30 seconds

    return () => clearInterval(interval);

  }, []);

  /* ---------------------------------- */
  /* STATS */
  /* ---------------------------------- */

  const stats = {

    total: leads.length,

    solar: leads.filter(
      (l) => l.service?.toLowerCase() === "solar"
    ).length,

    mandap: leads.filter(
      (l) => l.service?.toLowerCase() === "mandap"
    ).length,

    both: leads.filter(
      (l) => l.service?.toLowerCase() === "both"
    ).length,

  };

  const cards = [
    {
      label: "Total Leads",
      value: stats.total,
      icon: Users,
      gradient: "from-blue-500 to-blue-700",
    },
    {
      label: "Solar Leads",
      value: stats.solar,
      icon: Sun,
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      label: "Mandap Leads",
      value: stats.mandap,
      icon: Flower2,
      gradient: "from-pink-500 to-pink-600",
    },
    {
      label: "Both Services",
      value: stats.both,
      icon: Layers,
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  /* ---------------------------------- */
  /* CHART DATA FROM REAL LEADS */
  /* ---------------------------------- */

  /* SERVICE DISTRIBUTION */

  const serviceData = [
    { name: "Solar", value: stats.solar },
    { name: "Mandap", value: stats.mandap },
    { name: "Both", value: stats.both },
  ];

  const serviceColors = ["#facc15", "#ec4899", "#8b5cf6"];

  /* CITY DATA */

  const cityMap: any = {};

  leads.forEach((l) => {

    if (!cityMap[l.city]) cityMap[l.city] = 0;

    cityMap[l.city]++;

  });

  const cityData = Object.keys(cityMap).map((city) => ({
    city,
    leads: cityMap[city],
  }));

  /* STATUS DATA */

  const done = leads.filter(
    (l) => l.status === "done"
  ).length;

  const pending = leads.filter(
    (l) => l.status !== "done"
  ).length;

  const statusData = [
    { name: "Done", value: done },
    { name: "Pending", value: pending },
  ];

  const statusColors = ["#22c55e", "#f59e0b"];

  /* LEADS GROWTH */

  const dayMap: any = {
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
    Sun: 0,
  };

  leads.forEach((l) => {

    if (!l.created_at) return;

    const date = new Date(l.created_at);

    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    });

    if (dayMap[day] !== undefined) {

      dayMap[day]++;

    }

  });

  const leadsGrowth = Object.keys(dayMap).map((day) => ({
    name: day,
    leads: dayMap[day],
  }));

  /* ---------------------------------- */
  /* EXPORT CSV */
  /* ---------------------------------- */

  const exportLeads = () => {

    const csv =
      "Name,Phone,City,Service\n" +
      leads
        .map(
          (l: any) =>
            `${l.name},${l.phone},${l.city},${l.service}`
        )
        .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "leads.csv";

    a.click();
  };

  return (

    <AdminLayout>

      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

        <div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">

            Dashboard Overview

          </h1>

          <p className="text-gray-500 mt-2">

            Monitor leads and business performance in real-time

          </p>

        </div>

        <div className="flex gap-2">

          <button
            onClick={loadLeads}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >

            <RefreshCcw size={16} />

            Refresh

          </button>

          <button
            onClick={exportLeads}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg"
          >

            <Download size={16} />

            Export

          </button>

        </div>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {cards.map((c, index) => (

          <div
            key={index}
            className={`p-6 rounded-2xl text-white bg-gradient-to-br ${c.gradient} shadow-xl transition hover:scale-[1.03]`}
          >

            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm opacity-80">{c.label}</p>

                <h2 className="text-5xl font-bold">

                  {loading ? "—" : <CountUp end={c.value} duration={1} />}

                </h2>

              </div>

              <div className="bg-white/20 p-4 rounded-xl">

                <c.icon className="w-8 h-8 text-white" />

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* RECENT LEADS */}

      <Card className="p-6 mb-8 shadow-xl rounded-2xl">

        <div className="flex justify-between items-center mb-4">

          <h2 className="text-xl font-semibold">

            Recent Leads

          </h2>

          <span className="text-sm text-gray-400">

            Total: {leads.length}

          </span>

        </div>

        {loading ? (

          <div className="flex justify-center py-10">

            <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>

          </div>

        ) : (

          <LeadsTable leads={leads} />

        )}

      </Card>

      {/* CHARTS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* LEADS GROWTH */}

        <Card className="p-6 shadow-xl rounded-2xl">

          <h2 className="text-lg font-semibold mb-4">

            Leads Growth

          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <LineChart data={leadsGrowth}>

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="leads"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </Card>

        {/* SERVICE DISTRIBUTION */}

        <Card className="p-6 shadow-xl rounded-2xl">

          <h2 className="text-lg font-semibold mb-4">

            Service Distribution

          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <PieChart>

              <Pie
                data={serviceData}
                dataKey="value"
                outerRadius={100}
                label
              >

                {serviceData.map((_, index) => (

                  <Cell
                    key={index}
                    fill={serviceColors[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </Card>

        {/* LEADS BY CITY */}

        <Card className="p-6 shadow-xl rounded-2xl">

          <h2 className="text-lg font-semibold mb-4">

            Leads by City

          </h2>

          <ResponsiveContainer width="100%" height={300}>

            <BarChart data={cityData}>

              <XAxis dataKey="city" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="leads"
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </Card>

        {/* STATUS */}

        <Card className="p-6 shadow-xl rounded-2xl">

          <h2 className="text-lg font-semibold mb-4">

            Lead Status

          </h2>

          <ResponsiveContainer width="100%" height={280}>

            <PieChart>

              <Pie
                data={statusData}
                dataKey="value"
                innerRadius={70}
                outerRadius={100}
                label
              >

                {statusData.map((_, index) => (

                  <Cell
                    key={index}
                    fill={statusColors[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </Card>

      </div>

    </AdminLayout>

  );
};

export default Dashboard;