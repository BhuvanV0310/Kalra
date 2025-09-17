import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Fallback scroll to form if navigated via #quote-form
  useEffect(() => {
    if (window.location.hash === "#quote-form" && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, []);
  const contactInfo = [
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Customer Support", "Emergency Services Available"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kalrapackersandmovers.com", "support@kalrapackersandmovers.com"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Raajpuri, Opp sector-5", "Dwarka New Delhi -110075"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-7292010102", "+91-9876543210"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Request Call Back Button */}
      <section className="w-full flex justify-center py-8 bg-yellow-200">
        <Button asChild className="bg-primary-glow text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
          <Link to="/contact#quote-form">Request Call Back</Link>
        </Button>
      </section>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to move? Get in touch with our expert team for a free quote and 
              personalized moving solution tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
  <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-card transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${info.color} p-6 text-white`}>
                      <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{info.title}</h3>
                    </div>
                    <div className="p-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-2 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div 
              {...fadeInUp}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Why Us?</h3>
                  <div className="space-y-3">
                  </div>
                    {[
                      "30+ years experience",
                      "Free, no-obligation quotes",
                      "Transparent pricing",
                      "Customer Satisfaction",
                      "Customized moving solutions",
                    ].map((reason, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{reason}</span>
                      </div>
                    ))}
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Call Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get Your Free Quote</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours 
                with a detailed quote for your moving needs.
              </p>
              <form id="quote-form" className="space-y-6" ref={formRef} onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                setSent(false);
                try {
                  const result = await emailjs.sendForm(
                    "service_x7x8eoi",
                    "template_6ixa1vr",
                    formRef.current,
                    "MMQt4x2BmjQgdMDOD"
                  );
                  if (result.status === 200) {
                    setSent(true);
                  } else {
                    setError("Failed to send. Please try again later.");
                  }
                } catch (err) {
                  setError("Failed to send. Please check your internet connection or try again later.");
                }
                setSending(false);
              }}>
                <div className="relative mb-4">
                  <Input name="user_email" type="email" required className="peer pt-6 bg-gray-100" placeholder=" " />
                  <label className="absolute inset-0 flex items-center justify-center text-sm text-black transition-all pointer-events-none">Email Address *</label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Additional Details
                  </label>
                  <Textarea 
                    name="additional_details"
                    placeholder="Tell us about your moving requirements, number of rooms, special items, etc."
                    rows={4}
                    className="bg-gray-100"
                  />
                </div>
                <Button className="w-full bg-gradient-primary hover:shadow-button group" size="lg" type="submit" disabled={sending}>
                  <Send className="mr-2 h-4 w-4" />
                  {sending ? "Sending..." : "Send Quote Request"}
                </Button>
                {sent && <div className="text-green-600 mt-2">Quote request sent successfully!</div>}
                {error && <div className="text-red-600 mt-2">{error}</div>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of Delhi, easily accessible from all major areas
            </p>
          </motion.div>
          
            <motion.div {...fadeInUp} className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full h-full">
                <iframe
                  title="Kalra Packers & Movers Location"
                  src="https://www.google.com/maps?q=474,+Plot,+Block-C,+Sector+6+Dwarka,+Dwarka,+New+Delhi,+Delhi,+110075&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '1rem', maxWidth: '600px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="text-lg font-semibold text-foreground mt-4">
                  Address :- 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075
                </div>
                </div>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;