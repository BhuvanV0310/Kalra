import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Calendar,
  User,
  ArrowRight,
  Clock,
  Tag,
  Plus,
  X
} from "lucide-react";

const Blog = () => {
  const [showModal, setShowModal] = useState(false);
  const categories = [
    "All Posts",
    "Moving Tips",
    "Packing Guide",
    "Business Moving",
    "Insurance",
    "Planning",
    "International"
  ];

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "10 Essential Tips for a Stress-Free Home Move",
      excerpt: "Moving homes can be overwhelming, but with proper planning and the right approach, you can make it a smooth experience. Here are our top tips...",
      author: "Kalra Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Moving Tips",
      featured: true
    },
    {
      id: 2,
      title: "How to Pack Fragile Items Safely",
      excerpt: "Protecting your valuable and fragile items during a move requires special attention and proper packing techniques. Learn the best practices...",
      author: "Packing Expert",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Packing Guide"
    },
    {
      id: 3,
      title: "Office Relocation Checklist: Complete Guide",
      excerpt: "Planning an office move? Our comprehensive checklist ensures nothing is forgotten and your business operations continue smoothly...",
      author: "Business Solutions",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Business Moving"
    },
    {
      id: 4,
      title: "Understanding Moving Insurance: What You Need to Know",
      excerpt: "Protect your belongings during the move with the right insurance coverage. Learn about different types of coverage and what's included...",
      author: "Insurance Advisor",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Insurance"
    },
    {
      id: 5,
      title: "Seasonal Moving: Best Times to Relocate",
      excerpt: "Timing your move can significantly impact cost and convenience. Discover the best seasons for moving and how to plan accordingly...",
      author: "Moving Consultant",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Planning"
    },
    {
      id: 6,
      title: "International Moving: A Complete Guide",
      excerpt: "Moving abroad involves unique challenges and requirements. Our guide covers everything from documentation to customs clearance...",
      author: "International Team",
      date: "February 15, 2024",
      readTime: "12 min read",
      category: "International"
    }
  ]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    author: "",
    category: categories[1],
  });

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author) return;
    setBlogPosts([
      {
        id: blogPosts.length + 1,
        title: newPost.title,
        excerpt: newPost.content.slice(0, 100) + "...",
        author: newPost.author,
        date: new Date().toLocaleDateString(),
        readTime: "3 min read",
        category: newPost.category,
      },
      ...blogPosts,
    ]);
    setShowModal(false);
    setNewPost({ title: "", content: "", author: "", category: categories[1] });
  };

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
            <h1 className="text-5xl font-bold mb-6">Moving Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Expert advice, tips, and insights to make your moving experience smooth and stress-free. 
              Learn from the professionals who know moving best.
            </p>
          </motion.div>
        </div>
      </section>

  <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <Card className="shadow-card mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          index === 0 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Subscribe</h3>
                  <p className="text-muted-foreground mb-4">
                    Get the latest moving tips and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full p-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="w-full bg-gradient-primary">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              {blogPosts
                .filter(post => post.featured)
                .map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="mb-12"
                  >
                    <Card className="shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-gradient-primary text-white p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <Tag className="h-4 w-4" />
                            <span className="text-sm">Featured Post</span>
                          </div>
                          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                          <p className="text-blue-100 mb-4 leading-relaxed">{post.excerpt}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-blue-100">
                            <div className="flex items-center space-x-2">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <Button variant="outline" className="group bg-primary text-white border-none hover:bg-primary-glow">
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts
                  .filter(post => !post.featured)
                  .map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="h-full shadow-card hover:shadow-lg transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <User className="h-3 w-3" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{post.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <Link to={`/blog/${post.id}`}>
                            <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-glow group">
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>

              {/* Load More */}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest moving tips, industry insights, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <Button className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;