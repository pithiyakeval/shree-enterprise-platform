import { NavLink } from "react-router-dom";
import { MapPin, MessageCircle, Phone, Mail, Sun, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-black text-white overflow-hidden">

      {/* NOISE TEXTURE */}

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/noise.png')]"></div>

      {/* floating background blobs */}

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 blur-[120px] rounded-full"></div>


      <div className="container mx-auto px-6 py-20 relative z-10">


        {/* CTA STRIP */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Need Solar Installation or Mandap Decoration?
            </h3>
            <p className="text-white/70 text-sm">
              Contact our team today and get a free consultation.
            </p>
          </div>

          <a
            href="https://wa.me/919898812423"
            target="_blank"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition"
          >
            WhatsApp Now
          </a>
        </motion.div>



        {/* MAIN GRID */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">


          {/* BRAND */}

          <div>

            <div className="flex items-center gap-3 mb-4">
              <Sun className="text-yellow-400 w-6 h-6"/>
              <h3 className="text-2xl font-bold tracking-tight">
                Shree Enterprise
              </h3>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Government-approved vendor delivering reliable solar energy
              solutions and premium mandap decorations across Junagadh and
              nearby regions.
            </p>

          </div>



          {/* QUICK LINKS */}

          <div>

            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

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
                      `transition flex items-center gap-1 hover:text-yellow-400 hover:translate-x-1 ${
                        isActive ? "text-yellow-400 font-medium" : "text-white/70"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}

            </ul>

          </div>



          {/* SERVICES */}

          <div>

            <h4 className="text-lg font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-sm text-white/70">

              <li className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-400" />
                Solar Panel Installation
              </li>

              <li className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-yellow-400" />
                Solar Maintenance
              </li>

              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Wedding Mandap
              </li>

              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Engagement Decoration
              </li>

            </ul>

          </div>



          {/* CONTACT */}

          <div>

            <h4 className="text-lg font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-white/70">

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-yellow-400" />
                <span>
                  Main Chowk, Nagichana <br />
                  Mangrol, Junagadh – 362240
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href="tel:+919974852378" className="hover:text-yellow-400">
                  +91 99748 52378
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <a href="tel:+919898812423" className="hover:text-yellow-400">
                  +91 98988 12423
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <a
                  href="mailto:jagdishbhai.pithiya@gmail.com"
                  className="hover:text-yellow-400 break-all"
                >
                  jagdishbhai.pithiya@gmail.com
                </a>
              </li>

            </ul>


            {/* SOCIAL BUTTONS */}

            <div className="flex gap-4 mt-6">

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/919898812423"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.google.com/maps/place/Nagichana,+Gujarat"
                target="_blank"
                className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <MapPin className="w-5 h-5" />
              </motion.a>

            </div>

          </div>

        </div>



        {/* BOTTOM */}

        <div className="border-t border-white/10 mt-16 pt-6 text-center text-xs text-white/50">

          © {new Date().getFullYear()} Shree Enterprise.  
          Designed & Developed with ❤️

        </div>

      </div>

    </footer>
  );
};

export default Footer;