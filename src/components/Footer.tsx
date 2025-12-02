import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container mx-auto px-4">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-3">Shree Enterprise</h3>
            <p className="text-background/80 leading-relaxed">
              Trusted Solar & Mandap Services in Saurashtra since 2018.
              Providing honest, affordable and professional solutions for every family.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><Link to="/services" className="hover:underline">Solar Services</Link></li>
              <li><Link to="/mandap-services" className="hover:underline">Mandap Decoration</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-background/80">
              <li>📍 Main Chowk, Nagichana, Mangrol</li>
              <li>Junagadh, Gujarat  362240</li>
              <li>📞 99748 52378</li>
              <li>📞 98988 12423</li>
              <li>📧 jagdishbhai.pithiya@gmail.com</li>
              <li className="mt-2">
                <a
                  href="https://wa.me/919898812423"
                  target="_blank"
                  className="underline hover:text-background">
                  📱 WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT LINE */}
        <div className="border-t border-background/20 pt-6 text-center text-background/60 text-sm">
          © 2025 Shree Enterprise | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
