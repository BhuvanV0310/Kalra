import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPinned, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
// Removed import for public image

const Hero = () => {
  const [showReviews, setShowReviews] = React.useState(false);
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6 xl:gap-8 items-center min-h-screen lg:min-h-[85vh] xl:min-h-[80vh] py-6 sm:py-8 md:py-10 lg:py-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white flex flex-col justify-center order-1 md:order-1 lg:order-1 text-center md:text-left"
          >
            <motion.h1 
              className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Professional
              <br />
              <span className="text-yellow-200 drop-shadow-lg">Moving Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-7 lg:mb-8 text-blue-100 leading-relaxed max-w-xl md:max-w-2xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Trusted packers and movers providing door-to-door relocation services. 
              Safe, reliable, and efficient moving solutions across India.
            </motion.p>

            <motion.div 
              className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-7 lg:mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0 lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact#quote-form" className="w-full">
                <Button
                  size="lg"
                  className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group flex items-center justify-center w-full py-3 sm:py-4 md:py-4 lg:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 text-center max-w-xs sm:max-w-md md:max-w-lg mx-auto md:mx-0 lg:max-w-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">30+</div>
                <div className="text-xs sm:text-sm md:text-base text-white leading-tight">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-white leading-tight">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm md:text-base text-white leading-tight">Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center - Google Reviews */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col justify-center order-2 md:order-3 lg:order-2 mb-6 md:mb-0"
            >
            {/* Google Reviews Button */}
            <button
              type="button"
              className="bg-blue-300/50 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-5 lg:p-4 xl:p-5 shadow-xl border border-blue-300/30 backdrop-saturate-150 max-h-[400px] sm:max-h-[450px] md:max-h-[500px] overflow-hidden hover:ring-2 hover:ring-yellow-200 transition-all duration-300 flex flex-col items-center hover:scale-105 active:scale-95 touch-manipulation"
              onClick={() => setShowReviews(true)}
            >
              <div className="text-center mb-3 sm:mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span className="text-black font-semibold text-xs sm:text-sm md:text-base">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-white font-bold ml-2 text-sm sm:text-base md:text-lg">4.9</span>
              </div>
              <p className="text-red-100 text-xs sm:text-sm">Based on 100+ reviews</p>
              </div>
            </button>

            {/* Modal for Reviews */}
            {showReviews && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div className="bg-blue-300/50 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-2xl border border-blue-300/30 max-w-sm sm:max-w-md md:max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
                <button
                type="button"
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white bg-blue-600 rounded-full p-1.5 sm:p-2 hover:bg-blue-800 transition-colors z-10 touch-manipulation"
                onClick={() => setShowReviews(false)}
                >
                <span className="text-sm sm:text-base">✕</span>
                </button>
                <div className="text-center mb-3 sm:mb-4 pr-8">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="text-black font-semibold text-sm sm:text-base">Google Reviews</span>
                </div>
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-white font-bold ml-2 text-base sm:text-lg">4.9</span>
                </div>
                <p className="text-red-100 text-xs sm:text-sm">Based on 100+ reviews</p>
                </div>
                <div className="space-y-2 sm:space-y-3 max-h-[60vh] overflow-y-auto">
                {/* Review 1 - Gaurav Semwal */}
                <motion.div 
                  className="bg-blue-600/50 rounded-lg p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs sm:text-sm">G</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-xs sm:text-sm truncate">Gaurav Semwal</p>
                    <p className="text-blue-200 text-xs">Local Guide • 1 month ago</p>
                    <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    </div>
                  </div>
                  </div>
                  <p className="text-red-50 text-xs sm:text-sm leading-relaxed">
                  "Amazing professionals in shifting. Mr AK Kalra ensures smooth moving. A must try for peace of mind while shifting homes."
                  </p>
                </motion.div>

                {/* Review 2 - Swasti Bardhan */}
                <motion.div 
                  className="bg-blue-600/50 rounded-lg p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs sm:text-sm">S</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-xs sm:text-sm truncate">Swasti Bardhan</p>
                    <p className="text-blue-200 text-xs">2 months ago</p>
                    <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    </div>
                  </div>
                  </div>
                  <p className="text-red-50 text-xs sm:text-sm leading-relaxed">
                  "Fantastic experience with Kalra M&P. Very supportive staff. All items relocated safely without any damage."
                  </p>
                </motion.div>

                {/* Review 3 - Mayank Singhal */}
                <motion.div 
                  className="bg-blue-600/50 rounded-lg p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-xs sm:text-sm">M</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-xs sm:text-sm truncate">Mayank Singhal</p>
                    <p className="text-blue-200 text-xs">Local Guide • 6 months ago</p>
                    <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-2 h-2 sm:w-3 sm:h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    </div>
                  </div>
                  </div>
                  <p className="text-red-50 text-xs sm:text-sm leading-relaxed">
                  "Mr Kalra ensures customer delight. Delhi to Lucknow delivery was timely with all safety measures. Highly recommended!"
                  </p>
                </motion.div>
                </div>
                <a
                href="https://www.google.com/search?q=kalra+packers+movers&client"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-900 underline text-sm sm:text-base text-center hover:text-blue-700 transition-colors touch-manipulation"
                >
                See all Google reviews
                </a>
              </div>
              </div>
            )}
            </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col justify-center h-full order-3 md:order-2 lg:order-3"
          >
            <div className="bg-red-600 rounded-xl p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 shadow-lg flex flex-col gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2">Contact Us</h2>
              <form className="flex flex-col gap-3 sm:gap-4">
                <input
                  type="tel"
                  placeholder="Your Number"
                  className="px-3 sm:px-4 py-3 sm:py-4 rounded-lg text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-sm sm:text-base transition-all duration-200 hover:shadow-md"
                  required
                  pattern="[0-9]{10}"
                />
                <textarea
                  placeholder="Your Message"
                  className="px-3 sm:px-4 py-3 sm:py-4 rounded-lg text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-sm sm:text-base resize-none transition-all duration-200 hover:shadow-md"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-200 text-red-700 font-semibold py-3 sm:py-4 rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 text-sm sm:text-base touch-manipulation hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
              <div className="flex items-center gap-2 mt-1 sm:mt-2">
                <MapPinned className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                <div className="text-white text-xs sm:text-sm md:text-base">
                  <span className="font-bold">Rated </span>
                  <span className="font-semibold text-sm sm:text-base md:text-lg">4.9</span>
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