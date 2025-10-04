import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        {/* Animated phone ringing effect */}

        
        <Link
          to="/contact#quote-form"
          className="group flex items-center justify-center w-14 h-14 bg-green-500 md:hover:bg-green-600 rounded-full shadow-lg md:hover:shadow-xl transition-all duration-300 transform md:hover:scale-110"
          aria-label="Contact us"
        >
        <Phone 
          size={24} 
          className="md:group-hover:animate-pulse text-white"
        />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
        
        {/* Tooltip - only show on desktop */}
        <div className="hidden md:block absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Request Call Back
          <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default FloatingCallButton;