import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPinned, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
// Removed import for public image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-24 items-start min-h-screen lg:min-h-[90vh] py-8 sm:py-12 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col justify-center h-full order-1 text-center lg:text-left"
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Professional
              <br />
              <span className="text-yellow-200 drop-shadow-lg">Moving Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Trusted packers and movers providing door-to-door relocation services. 
              Safe, reliable, and efficient moving solutions across India.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-4 mb-6 sm:mb-8 max-w-sm mx-auto lg:mx-0 lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact#quote-form" className="w-full">
                <Button
                  size="lg"
                  className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group flex items-center justify-center w-full py-3 sm:py-4 text-base sm:text-lg font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-3 gap-4 sm:gap-6 text-center max-w-md mx-auto lg:mx-0 lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">30+</div>
                <div className="text-xs sm:text-sm text-white">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
                <div className="text-xs sm:text-sm text-white">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-white">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center - Google Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col justify-center h-full order-3 lg:order-2"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-xl border border-white/20">
              <div className="text-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                    alt="Google" 
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-white font-semibold text-base sm:text-lg">Google Reviews</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-bold ml-2 text-lg sm:text-xl">4.9</span>
                </div>
                <p className="text-blue-100 text-xs sm:text-sm">Based on 2,847+ reviews</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {/* Review 1 */}
                <motion.div 
                  className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xs sm:text-sm">R</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-xs sm:text-sm truncate">Rajesh Kumar</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200 mb-1" />
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    "Excellent service! The team was professional and handled our furniture with great care. Highly recommended!"
                  </p>
                </motion.div>

                {/* Review 2 */}
                <motion.div 
                  className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xs sm:text-sm">P</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-xs sm:text-sm truncate">Priya Sharma</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200 mb-1" />
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    "Swift and reliable! They made our office relocation seamless. Great value for money."
                  </p>
                </motion.div>

                {/* Review 3 */}
                <motion.div 
                  className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-200 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xs sm:text-sm">A</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-xs sm:text-sm truncate">Amit Patel</p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-200 mb-1" />
                  <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
                    "Best packers and movers in the city. On-time delivery and zero damage. Thank you!"
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col justify-center h-full order-2 lg:order-3"
          >
            <div className="bg-red-600 rounded-xl p-4 sm:p-6 shadow-lg flex flex-col gap-4">
              <h2 className="text-lg sm:text-xl font-bold text-white mb-2">Contact Us</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="tel"
                  placeholder="Your Number"
                  className="px-4 py-3 sm:py-4 rounded text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-sm sm:text-base"
                  required
                  pattern="[0-9]{10}"
                />
                <textarea
                  placeholder="Your Message"
                  className="px-4 py-3 sm:py-4 rounded text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-sm sm:text-base resize-none"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-200 text-red-700 font-semibold py-3 sm:py-4 rounded hover:bg-red-700 hover:text-white transition-colors duration-200 text-sm sm:text-base touch-manipulation"
                >
                  Send Message
                </button>
              </form>
              <div className="flex items-center gap-2 mt-2">
                <MapPinned className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                <div className="text-white text-xs sm:text-sm">
                  <span className="font-bold">Rated </span>
                  <span className="font-semibold text-sm sm:text-base">4.9</span>
                  <span className="text-yellow-200">★</span>
                  <span className="font-bold"> by customers</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;