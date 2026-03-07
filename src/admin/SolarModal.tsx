import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  X,
  Phone,
  Copy,
  Sparkles,
  Sun
} from "lucide-react";

const SolarModal = ({ row, onClose }: any) => {

  const copyPhone = () => {
    navigator.clipboard.writeText(row.phone);
  };

  const call = () => {
    window.location.href = `tel:${row.phone}`;
  };

  const whatsapp = () => {
    window.open(`https://wa.me/91${row.phone}`, "_blank");
  };

  const fields = [
    { label: "Name", value: row.name },
    { label: "Phone", value: row.phone },
    { label: "City", value: row.city },
    { label: "KW Capacity", value: row.kw },
    { label: "Budget", value: row.budget },
    { label: "Source", value: row.where_from },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <Card className="relative max-w-xl w-full p-8 rounded-2xl shadow-2xl bg-white max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Sun className="w-6 h-6 text-yellow-500" />
            Solar Lead Details
          </h2>

          <span
            className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-semibold ${
              row.status === "Done"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {row.status || "Pending"}
          </span>

        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">

          <Button
            onClick={call}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <Phone className="w-4 h-4" />
            Call
          </Button>

          <Button
            onClick={whatsapp}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            WhatsApp
          </Button>

          <Button
            variant="secondary"
            onClick={copyPhone}
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy
          </Button>

        </div>

        {/* Lead Details */}
        <div className="space-y-4">

          {fields.map((f, i) => (
            <div
              key={i}
              className="flex justify-between border-b pb-2"
            >
              <span className="text-gray-500 font-medium">
                {f.label}
              </span>

              <span className="text-gray-900 font-semibold text-right">
                {f.value || "-"}
              </span>
            </div>
          ))}

        </div>

        {/* Message */}
        {row.message && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">

            <h3 className="text-sm font-semibold mb-1 text-gray-600">
              Message
            </h3>

            <p className="text-gray-800 text-sm">
              {row.message}
            </p>

          </div>
        )}

        {/* Footer */}
        <Button onClick={onClose} className="w-full mt-6">
          Close
        </Button>

      </Card>

    </div>
  );
};

export default SolarModal;