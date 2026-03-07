import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Solar Services", path: "/solar-services" },
    { name: "Mandap Services", path: "/mandap-services" },
    { name: "Help", path: "/help" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-14 md:h-16 items-center justify-between">

            {/* LOGO + BRAND */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logoHorizontal}
                alt="Shree Enterprise"
                className="h-8 md:h-10 object-contain"
              />
              <span className="text-base md:text-lg font-bold tracking-tight text-foreground">
                Shree Enterprise
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition",
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent-light"
              >
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE BOTTOM SHEET */}
      {isOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* BOTTOM MENU */}
          <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white rounded-t-2xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
            
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-lg font-semibold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-6 py-4 text-base font-medium transition",
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 border-t">
              <Button
                asChild
                className="w-full bg-accent text-accent-foreground hover:bg-accent-light py-6 text-base"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
