import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
  { name: "Home Relocation", path: "/services/Home-Relocation" },
  { name: "Office Relocation", path: "/services/Office-Relocation" },
  { name: "Car Bike Relocation", path: "/services/Car-Bike-Relocation" },
  { name: "Packaging of Goods", path: "/services/Packaging-of-Goods" },
  { name: "Trained Team", path: "/services/Trained-Team" },
  { name: "Warehouse and Storage Services", path: "/services/Warehouse-and-Storage-Services" },
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav aria-label="Main navigation">
      {/* Top Bar */}
      <div className="bg-white py-2 px-2 sm:px-4 border-b border-blue-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-base">
          {/* Social Links - hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-4 ml-20">
              <a href="https://www.facebook.com/KalraPackers/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} className="text-blue-700 hover:text-primary-glow cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/kalrapackersmovers?igsh=MTFlNXhocHdheHYyZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} className="text-blue-700 hover:text-primary-glow cursor-pointer" />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-blue-700" />
            <span className="text-blue-700 font-semibold text-base">+91-7292010102</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-yellow-200 shadow-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="Home">
              <span className="bg-white rounded-lg px-3 py-1 shadow border border-blue-900 flex flex-col items-center font-extrabold text-blue-900 tracking-widest whitespace-nowrap drop-shadow mr-8" style={{ letterSpacing: '0.12em', fontFamily: 'serif', minWidth: '180px' }}>
                <span className="font-extrabold text-base tracking-widest text-blue-900" style={{ letterSpacing: '0.12em', fontFamily: 'serif' }}>KALRA Packers Movers</span>
                <span className="font-bold text-[0.7rem] tracking-widest mt-0.5 px-2 py-0.5 rounded" style={{ background: '#0a2e73', color: '#fff', letterSpacing: '0.25em', boxShadow: '0 1px 4px rgba(10,46,115,0.10)' }}>SINCE 1992</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Primary">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={cn(
                      "font-bold text-sm px-2 py-1 rounded-xl transition-colors hover:text-primary hover:bg-yellow-50",
                      isActive(item.path) ? "text-primary bg-yellow-100" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button
                asChild
                variant="default"
                className="bg-gradient-primary hover:shadow-button"
              >
                <Link to="/contact#quote-form" className="ml-6 w-20 h-full flex items-center justify-center">
                  Get Quote
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
            aria-modal="true"
            role="dialog"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={cn(
                      "block py-2 font-medium transition-colors",
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button className="w-full bg-gradient-primary">
                <Link to="/contact#quote-form">Get Quote</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;