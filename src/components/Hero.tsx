import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
// Removed import for public image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Professional
              <br />
              <span className="text-yellow-400 drop-shadow-lg">Moving Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl mb-8 text-blue-100 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Trusted packers and movers providing door-to-door relocation services. 
              Safe, reliable, and efficient moving solutions across India.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
                <Link to="/contact#quote-form">Get Free Quote</Link>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-3 gap-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-white">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-white">Support</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-red-600 rounded-xl p-8 shadow-lg flex flex-col gap-4"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            <form className="flex flex-col gap-4">
              <input
              type="tel"
              placeholder="Your Number"
              className="px-4 py-2 rounded bg-white text-red-700 focus:outline-none"
              required
              pattern="[0-9]{10}"
              />
              <textarea
              placeholder="Your Message"
              className="px-4 py-2 rounded bg-white text-red-700 focus:outline-none"
              rows={3}
              required
              />
              <button
              type="submit"
              className="bg-white text-red-700 font-semibold py-2 rounded hover:bg-red-700 hover:text-white transition"
              >
              Send Message
              </button>
            </form>
            <div className="flex items-center gap-2 mt-2">
              <MapPinned className="h-5 w-5 text-white" />
              <span className="text-white font-semibold text-lg">4.9</span>
              <span className="text-yellow-400 text-base">★</span>
              <span className="text-white font-bold text-md">Google Maps rating</span>
            </div>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
                
              
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="text-sm text-foreground font-medium">
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;