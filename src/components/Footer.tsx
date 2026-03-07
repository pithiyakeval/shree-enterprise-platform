import { NavLink } from "react-router-dom";
import { MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white mt-20">
      <div className="container mx-auto px-6 py-14">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-3 tracking-tight">
              Shree Enterprise
            </h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Government-approved vendor delivering reliable solar solutions and
              premium mandap decorations across Junagadh & nearby regions.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Solar Services", path: "/solar-services" },
                { name: "Mandap Services", path: "/mandap-services" },
                { name: "Help", path: "/help" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition hover:text-yellow-400 ${
                        isActive
                          ? "text-yellow-400 font-medium"
                          : "text-white/80"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <ul className="space-y-2 text-sm text-white/80">
              <li>📍 Main Chowk, Nagichana</li>
              <li>Mangrol, Junagadh – 362240</li>

              <li>
                📞{" "}
                <a href="tel:+919974852378" className="hover:text-yellow-400">
                  +91 99748 52378
                </a>
              </li>

              <li>
                📞{" "}
                <a href="tel:+919898812423" className="hover:text-yellow-400">
                  +91 98988 12423
                </a>
              </li>

              <li>
                📧{" "}
                <a
                  href="mailto:jagdishbhai.pithiya@gmail.com"
                  className="hover:text-yellow-400 break-all"
                >
                  jagdishbhai.pithiya@gmail.com
                </a>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919898812423"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-green-500 hover:text-white transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Google Maps */}
              <a
                href="https://www.google.com/maps/place/Nagichana,+Gujarat"
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-yellow-400 hover:text-black transition"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/15 mt-12 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Shree Enterprise. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

