import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Truck, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Star
} from "lucide-react";

const About = () => {
  const achievements = [
  { icon: Award, number: "30+", label: "Years Experience" },
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Truck, number: "50+", label: "Moving Vehicles" },
    { icon: Shield, number: "100%", label: "Insured Moves" },
  ];

  const values = [
    {
      icon: Target,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service you can trust."
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every item is handled with care as if it were our own precious belongings."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your belongings' safety is our top priority throughout the moving process."
    },
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
      <section className="bg-gradient-hero text-white py-20 bg-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">About Kalra Packers & Movers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in relocation services for over 30 years. We make moving 
              stress-free with professional expertise and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
        <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 1992, Kalra Packers and Movers began as a small family business with a 
                simple mission: to make relocation as smooth and stress-free as possible. What started 
                as a local moving service has grown into one of India's most trusted names in the 
                relocation industry.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Over the years, we have successfully completed thousands of moves, earning the trust 
                and satisfaction of our customers through our commitment to excellence, reliability, 
                and personalized service. The business has been running for two generations, originally started with just one truck and a small team. Today, we have grown to operate 7+ trucks and employ over 20 dedicated workers, able to deliver anywhere in India from your neighborhood. Our founder, A.K. Kalra, has led this journey with a vision for reliable and accessible moving services. We now operate across major cities in India with a team of skilled professionals and modern equipment.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span className="text-foreground">Transparent Pricing</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="bg-gradient-section rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Clock className="text-primary h-5 w-5 mt-1" />
                    <span className="text-muted-foreground">On-time delivery guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="text-primary h-5 w-5 mt-1" />
                    <span className="text-muted-foreground">Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-primary h-5 w-5 mt-1" />
                    <span className="text-muted-foreground">Trained and experienced staff</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="text-primary h-5 w-5 mt-1" />
                    <span className="text-muted-foreground">Industry-leading service standards</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
        <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
        <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional moving experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their moving needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-yellow-400 shadow-hero group">
                <Link to="/contact">
                  <Link to="/contact#quote-form">Get Free Quote</Link>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
                <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-yellow-400 shadow-hero">
                  <Link to="/services">View Our Services</Link>
                </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;