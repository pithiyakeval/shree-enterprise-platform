import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[rgba(30,64,175,0.85)] to-[rgba(30,64,175,0.75)] text-primary-foreground pt-10 pb-6 mt-16 shadow-inner">

      <div className="container mx-auto px-4">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* BRAND (compact) */}
          <div>
            <h3 className="text-xl font-bold mb-2">Shree Enterprise</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Trusted Solar & Mandap Services since 2018.
            </p>
          </div>

          {/* QUICK LINKS (compact + premium) */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-primary-foreground/80 text-sm">

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-accent ${
                      isActive ? "text-accent font-semibold" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/solar-services"
                  className={({ isActive }) =>
                    `hover:text-accent ${
                      isActive ? "text-accent font-semibold" : ""
                    }`
                  }
                >
                  Solar Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/mandap-services"
                  className={({ isActive }) =>
                    `hover:text-accent ${
                      isActive ? "text-accent font-semibold" : ""
                    }`
                  }
                >
                  Mandap Decoration
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `hover:text-accent ${
                      isActive ? "text-accent font-semibold" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          {/* CONTACT (compact) */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-primary-foreground/80 text-sm">
              <li>📍 Nagichana, Mangrol</li>
              <li>Junagadh, Gujarat 362240</li>
              <li>📞 99748 52378</li>
              <li>📞 98988 12423</li>
              <li>📧 jagdishbhai.pithiya@gmail.com</li>
              <li>
                <a
                  href="https://wa.me/919898812423"
                  target="_blank"
                  className="hover:text-accent underline"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/20 pt-4 text-center text-white/80 text-xs">
          © 2025 Shree Enterprise • All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
