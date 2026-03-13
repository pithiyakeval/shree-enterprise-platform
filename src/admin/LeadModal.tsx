import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Copy,
} from "lucide-react";

const LeadModal = ({
  lead,
  onClose,
}: {
  lead: any;
  onClose: () => void;
}) => {
  const copyPhone = () => {
    navigator.clipboard?.writeText(lead.phone || "");
  };

  const whatsapp = () => {
    window.open(
    `https://wa.me/91${lead.phone?.replace(/\D/g,"")}`,
    "_blank"
    );
  };

  const call = () => {
    window.location.href = `tel:${lead.phone}`;
  };

  const fields = [
    { label: "Name", value: lead.name },
    { label: "Phone", value: lead.phone },
    { label: "Email", value: lead.email || "-" },
    { label: "City", value: lead.city },
    { label: "Service", value: lead.service },
    { label: "KW", value: lead.kw },
    { label: "Budget", value: lead.budget },
    { label: "Event Type", value: lead.event_type },
    { label: "Event Date", value: lead.event_date },
    { label: "Message", value: lead.message },
    { label: "Source", value: lead.where_from },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">

      <Card className="relative max-w-xl w-full p-8 rounded-2xl shadow-2xl bg-white max-h-[90vh] overflow-y-auto">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">

          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Lead Details
          </h2>

          <div className="mt-2">

            <span
              className={`px-3 py-1 text-xs rounded-full font-semibold ${
                lead.status?.toLowerCase() === "done"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {lead.status || "Pending"}
            </span>

          </div>

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

        {/* Details */}
        <div className="space-y-4">

          {fields.map((f, index) => (
            <div
              key={index}
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

        {/* Message Box */}
        {lead.message && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">

            <h3 className="text-sm font-semibold mb-1 text-gray-600">
              Message
            </h3>

            <p className="text-gray-800 text-sm">
              {lead.message}
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

export default LeadModal;