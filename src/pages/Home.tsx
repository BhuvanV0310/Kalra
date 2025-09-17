import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Home as HomeIcon, 
  Building, 
  Truck, 
  Package, 
  Shield, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";
// ...removed import for public image...

const Home = () => {
  // Gallery images from Flickr (replace/add more URLs as needed)
  // (removed duplicate galleryImages declaration)

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Moving",
      description: "Safe and reliable home shifting services with professional packing and careful handling.",
      link: "/services/residential"
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description: "Efficient business relocation services minimizing downtime and ensuring business continuity.",
      link: "/services/commercial"
    },
    {
      icon: Truck,
      title: "Office Relocation",
      description: "Complete office moving solutions with specialized equipment and experienced staff.",
      link: "/services/office-relocation"
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description: "Professional packing services using quality materials to ensure item safety.",
      link: "/services/packing-unpacking"
    },
    {
      icon: Truck,
      title: "Vehicle Transport",
      description: "Safe car and bike transportation services across India with insurance coverage.",
      link: "/services/vehicle-transport"
    },
    {
      icon: Shield,
      title: "Storage Solutions",
      description: "Secure warehouse storage facilities for short-term and long-term storage needs.",
      link: "/services/storage-solutions"
    },
  ];

  // Gallery images from Flickr (replace/add more URLs as needed)
  const galleryImages = [
    "https://live.staticflickr.com/65535/54782168375_d1890ecb6f_b.jpg",
    // Add more direct image URLs from your Flickr album here
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Excellent service! The team was professional and handled all our belongings with care. Highly recommended!"
    },
    {
      name: "Rajesh Kumar", 
      rating: 5,
      comment: "Best packers and movers. On-time delivery and very reasonable prices. Will use again!"
    },
    {
      name: "Anita Gupta",
      rating: 5,
      comment: "Stress-free relocation experience. The team was punctual and took great care of our furniture."
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

  {/* About Section */}
  <section className="py-20 bg-yellow-200">
        <div className="flex justify-center mb-8">
          <Button asChild className="bg-primary-glow text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            <Link to="/contact#quote-form">Request Call Back</Link>
          </Button>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Welcome to 
                <span className="text-primary"> Kalra Packers & Movers</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 30 years of experience in the moving industry, Kalra Packers and Movers 
                has established itself as a trusted name in relocation services. We provide comprehensive 
                door-to-door packing and moving solutions across India.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">Professional Team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">Transparent Pricing</span>
                </div>
              </div>

              <Button asChild className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <img 
             src="/assets/services-truck.jpg" 
                alt="Professional moving services" 
                className="rounded-2xl shadow-card w-full"
              />
              
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
  <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive moving and relocation services tailored to meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer bg-white shadow-card border border-muted/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-glow to-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-7 w-7 text-white drop-shadow" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground text-center group-hover:text-primary-glow transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-12">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Gallery Section */}
    <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Gallery</h2>
          <div className="max-w-2xl mx-auto">
            <Slider autoplay autoplaySpeed={4000} dots infinite slidesToShow={1} slidesToScroll={1} arrows={false}>
              <div className="flex justify-center items-center h-96">
                <img 
                  src="/assets/LOGO.png" 
                  alt="Kalra Packers & Movers Logo" 
                  className="object-contain h-full w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer" 
                />
              </div>
              {galleryImages.map((img, idx) => (
                <div key={idx} className="flex justify-center items-center h-96">
                  <img 
                    src={img} 
                    alt={`Gallery ${idx + 1}`} 
                    className="object-contain h-full w-full rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer" 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full overflow-hidden -mb-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path fill="url(#gradient)" d="M0,80 C480,0 960,160 1440,80 L1440,0 L0,0 Z" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0e7ff" />
              <stop offset="1" stopColor="#f3f4f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Testimonials Section */}
    <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4 gap-3">
                      <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=F3F4F6&color=111827&size=64`} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-primary shadow" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Move?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get a free quote today and experience stress-free relocation with our professional team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                <Link to="/contact#quote-form">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;