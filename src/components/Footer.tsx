import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Home, Info, List, Mail as MailIcon, BookOpen, Truck, Building, Package, Shield, Archive } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-3">
              <input type="email" placeholder="Your email address" className="w-full p-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="w-full bg-primary-glow text-white py-2 rounded-lg hover:bg-primary transition-colors">Subscribe</button>
            </form>
            <p className="text-xs text-muted mt-2">Get moving tips, offers, and updates in your inbox.</p>
          </div>
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="/assets/LOGO.png"
                  alt="Kalra Packers & Movers Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold">Kalra</h2>
                <p className="text-sm text-muted">Packers & Movers</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              Professional packers and movers providing reliable, safe, and efficient relocation services 
              across India. Your trusted moving partner for over a decade.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/KalraPackers/" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} className="hover:text-primary-glow cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/kalrapackersmovers?igsh=MTFlNXhocHdheHYyZg==" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} className="hover:text-primary-glow cursor-pointer transition-colors" />
              </a>
              <Linkedin size={20} className="hover:text-primary-glow cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Home size={16} /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Info size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <List size={16} /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <MailIcon size={16} /> Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <BookOpen size={16} /> Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/residential" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Home size={16} /> Residential Moving
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Building size={16} /> Commercial Moving
                </Link>
              </li>
              <li>
                <Link to="/services/office-relocation" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Package size={16} /> Office Relocation
                </Link>
              </li>
              <li>
                <Link to="/services/vehicle-transport" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Truck size={16} /> Vehicle Transport
                </Link>
              </li>
              <li>
                <Link to="/services/storage-solutions" className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors">
                  <Archive size={16} /> Storage Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-glow mt-1 flex-shrink-0" />
                <p className="text-muted">
                  Address :- 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted">+91-7292010102</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted">info@kalrapackersandmovers.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-8 pt-8 text-center">
          <p className="text-muted">
            © {new Date().getFullYear()} Kalra Packers & Movers. All rights reserved. 
            | <Link to="/privacy" className="hover:text-primary-glow transition-colors">Privacy Policy</Link> 
            | <Link to="/terms" className="hover:text-primary-glow transition-colors">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;