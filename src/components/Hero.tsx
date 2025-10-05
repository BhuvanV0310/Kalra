import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPinned, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { emailjsConfig } from "@/lib/emailjs";
// Removed import for public image

const Hero = () => {
  const [showReviews, setShowReviews] = React.useState(false);
  
  // Form state for hero contact form
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gray-50/20 opacity-20"></div>
      </div>

      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-6 lg:gap-6 xl:gap-8 items-start lg:items-center min-h-screen py-4 xs:py-6 sm:py-8 md:py-10 lg:py-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 flex flex-col justify-center order-1 lg:order-1 text-center lg:text-left mb-6 lg:mb-0"
          >
            <motion.h1 
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 md:mb-5 lg:mb-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >

              
              Professional
              <br />
              <span className="text-blue-600 drop-shadow-lg relative">
                Moving Services

              </span>
            </motion.h1>
            
            {/* Bullet Points */}
            <motion.ul 
              className="space-y-2 xs:space-y-3 sm:space-y-4 mb-4 sm:mb-6 md:mb-7 lg:mb-8 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                30+ Years Experience
              </li>
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                15000+ successfully moved orders
              </li>
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                GPS enabled vehicle
              </li>
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                Reasonable rate
              </li>
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                Best Services
              </li>
              <li className="flex items-center text-xs xs:text-sm sm:text-base md:text-lg text-gray-700 font-bold">
                <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-2 xs:mr-3 flex-shrink-0 border border-black"></span>
                24/7 support
              </li>
            </motion.ul>
          </motion.div>

            {/* Center - Google Reviews (Always Visible) */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col justify-center order-2 lg:order-2 mb-6 lg:mb-0"
            >
            <div className="bg-gray-400/90 backdrop-blur-md rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-4 xl:p-5 shadow-xl border border-white/30 backdrop-saturate-150 max-h-[350px] xs:max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[400px] overflow-hidden flex flex-col items-center mx-auto max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-none">
              <div className="text-center mb-3 sm:mb-4">
              <div className="flex items-center justify-center gap-1 xs:gap-2 mb-2">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                />
                <span className="text-black font-semibold text-xs xs:text-xs sm:text-sm md:text-base">Google Reviews</span>
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 fill-yellow-400 text-black" />
                ))}
                <span className="text-black font-bold ml-1 xs:ml-2 text-xs xs:text-sm sm:text-base md:text-lg">4.9</span>
              </div>
              </div>
              <div className="space-y-1.5 xs:space-y-2 sm:space-y-3 max-h-[40vh] xs:max-h-[50vh] sm:max-h-[60vh] overflow-y-auto w-full">
              {/* Review 1 - Gaurav Semwal */}
              <motion.div 
                className="bg-blue-600/70 rounded-lg p-1.5 xs:p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1 sm:mb-2">
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs xs:text-xs sm:text-sm">G</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-xs xs:text-xs sm:text-sm truncate">Gaurav Semwal</p>
                  <p className="text-blue-200 text-xs xs:text-xs">Local Guide • 1 month ago</p>
                  <div className="flex items-center gap-0.5 xs:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 fill-yellow-400 text-black" />
                  ))}
                  </div>
                </div>
                </div>
                <p className="text-red-50 text-xs xs:text-xs sm:text-sm leading-relaxed">
                "Amazing professionals in shifting. Mr AK Kalra ensures smooth moving. A must try for peace of mind while shifting homes."
                </p>
              </motion.div>

              {/* Review 2 - Swasti Bardhan */}
              <motion.div 
                className="bg-blue-600/70 rounded-lg p-1.5 xs:p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1 sm:mb-2">
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs xs:text-xs sm:text-sm">S</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-xs xs:text-xs sm:text-sm truncate">Swasti Bardhan</p>
                  <p className="text-blue-200 text-xs xs:text-xs">2 months ago</p>
                  <div className="flex items-center gap-0.5 xs:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 fill-yellow-400 text-black" />
                  ))}
                  </div>
                </div>
                </div>
                <p className="text-red-50 text-xs xs:text-xs sm:text-sm leading-relaxed">
                "Fantastic experience with Kalra M&P. Very supportive staff. All items relocated safely without any damage."
                </p>
              </motion.div>

              {/* Review 3 - Mayank Singhal */}
              <motion.div 
                className="bg-blue-600/70 rounded-lg p-1.5 xs:p-2 sm:p-3 md:p-4 border border-blue-300/20 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-1.5 xs:gap-2 mb-1 sm:mb-2">
                <div className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs xs:text-xs sm:text-sm">M</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-xs xs:text-xs sm:text-sm truncate">Mayank Singhal</p>
                  <p className="text-blue-200 text-xs xs:text-xs">Local Guide • 6 months ago</p>
                  <div className="flex items-center gap-0.5 xs:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-3 sm:h-3 fill-yellow-400 text-black" />
                  ))}
                  </div>
                </div>
                </div>
                <p className="text-red-50 text-xs xs:text-xs sm:text-sm leading-relaxed">
                "Mr Kalra ensures customer delight. Delhi to Lucknow delivery was timely with all safety measures. Highly recommended!"
                </p>
              </motion.div>
              </div>
              <a
              href="https://www.google.com/search?sca_esv=d1d26e03a6da53f6&sxsrf=AE3TifNFDl1VBfV6IwbVC5zCkAOJGcu8pw:1759399471029&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8bWnJWeA0IzsbiXKSDSU2ob9GCQYO__QO5eZk2eMojlEYpjhCb2fqyhYXC9yw8jKqvPjkFU_7MRL0wT2WL6PXV6Lexd6-Vw4YotuISpAqPbcDWyeQ%3D%3D&q=Kalra+Packers+Movers+Reviews&sa=X&ved=2ahUKEwjBhPTjoYWQAxV21jgGHeLVCsEQ0bkNegQIKBAE&biw=1366&bih=599&dpr=1"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 xs:mt-3 sm:mt-4 text-blue-900 underline text-xs xs:text-sm sm:text-base text-center hover:text-blue-700 transition-colors touch-manipulation"
              >
              See all Google reviews
              </a>
            </div>
            </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col justify-center h-full order-3 lg:order-3"
          >
            <div className="bg-red-600 rounded-xl p-3 xs:p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 shadow-lg flex flex-col gap-2 xs:gap-3 sm:gap-4 hover:shadow-xl transition-shadow duration-300 relative mx-auto max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-none w-full">
              <h2 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 relative text-center">
                Contact Us
              </h2>
              <form ref={formRef} className="flex flex-col gap-2 xs:gap-3 sm:gap-4" onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                setSent(false);
                
                try {
                  const result = await emailjs.sendForm(
                    emailjsConfig.serviceId,
                    emailjsConfig.templateId,
                    formRef.current,
                    emailjsConfig.publicKey
                  );
                  
                  if (result.status === 200) {
                    setSent(true);
                    // Reset form after successful submission
                    if (formRef.current) {
                      formRef.current.reset();
                    }
                  } else {
                    setError("Failed to send. Please try again later.");
                  }
                } catch (err) {
                  console.error("EmailJS error:", err);
                  setError("Failed to send. Please check your internet connection or try again later.");
                }
                setSending(false);
              }}>
                <input
                  name="user_phone"
                  type="tel"
                  placeholder="Your Number"
                  className="px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4 rounded-lg text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-xs xs:text-sm sm:text-base transition-all duration-200 hover:shadow-md w-full"
                  required
                  pattern="[0-9]{10}"
                />
                <textarea
                  name="user_message"
                  placeholder="Your Message"
                  className="px-2 xs:px-3 sm:px-4 py-2 xs:py-3 sm:py-4 rounded-lg text-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-200 text-xs xs:text-sm sm:text-base resize-none transition-all duration-200 hover:shadow-md w-full"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-yellow-200 text-red-700 font-semibold py-2 xs:py-3 sm:py-4 rounded-lg hover:bg-red-700 hover:text-white transition-all duration-300 text-xs xs:text-sm sm:text-base touch-manipulation hover:scale-105 active:scale-95 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed w-full"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
                
                {sent && <div className="text-green-200 text-xs xs:text-xs sm:text-sm font-medium text-center">Message sent successfully! We'll contact you soon.</div>}
                {error && <div className="text-yellow-200 text-xs xs:text-xs sm:text-sm text-center">{error}</div>}
              </form>
              <div className="flex items-center justify-center gap-1 xs:gap-2 mt-1 sm:mt-2">
                <MapPinned className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
                <div className="text-white text-xs xs:text-xs sm:text-sm md:text-base text-center">
                  <span className="font-bold">Rated </span>
                  <span className="font-semibold text-xs xs:text-sm sm:text-base md:text-lg">4.9</span>
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