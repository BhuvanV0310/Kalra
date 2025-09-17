import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "10 Essential Tips for a Stress-Free Home Move",
    content: `Moving homes can be overwhelming, but with proper planning and the right approach, you can make it a smooth experience. Here are our top tips:

1. Start Early: Begin packing and organizing at least a month before your move.
2. Declutter: Sort out items you no longer need and donate or sell them.
3. Label Boxes: Clearly label each box with its contents and destination room.
4. Pack Essentials Separately: Keep important documents, medications, and daily essentials in a separate bag.
5. Hire Professionals: Consider hiring experienced movers for heavy or valuable items.
6. Protect Fragile Items: Use bubble wrap and sturdy boxes for breakables.
7. Notify Utilities: Inform utility companies about your move in advance.
8. Take Photos: Photograph electronics and furniture setups for easy reassembly.
9. Confirm Details: Double-check moving dates, Address :- 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075, and contacts.
10. Stay Calm: Take breaks and ask for help when needed.`,
    author: "Kalra Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Moving Tips"
  },
  {
    id: "2",
    title: "How to Pack Fragile Items Safely",
    content: `Protecting your valuable and fragile items during a move requires special attention and proper packing techniques. Learn the best practices:

- Use quality packing materials like bubble wrap, packing paper, and sturdy boxes.
- Wrap each item individually and fill empty spaces with cushioning.
- Mark boxes as 'Fragile' and stack them on top during transport.
- Avoid overpacking boxes to prevent breakage.`,
    author: "Packing Expert",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Packing Guide"
  },
  {
    id: "3",
    title: "Office Relocation Checklist: Complete Guide",
    content: `Planning an office move? Our comprehensive checklist ensures nothing is forgotten and your business operations continue smoothly:

- Assign a move coordinator.
- Communicate with employees and clients.
- Inventory all equipment and furniture.
- Update address with vendors and service providers: Address :- 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075.
- Schedule IT setup and downtime.`,
    author: "Business Solutions",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Business Moving"
  },
  {
    id: "4",
    title: "Understanding Moving Insurance: What You Need to Know",
    content: `Protect your belongings during the move with the right insurance coverage. Learn about different types of coverage and what's included:

- Basic carrier liability
- Full value protection
- Third-party insurance options
- How to file a claim if needed.`,
    author: "Insurance Advisor",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Insurance"
  },
  {
    id: "5",
    title: "Seasonal Moving: Best Times to Relocate",
    content: `Timing your move can significantly impact cost and convenience. Discover the best seasons for moving and how to plan accordingly:

- Spring and fall are ideal for mild weather.
- Summer is busiest but convenient for families.
- Winter moves may be cheaper but require extra precautions.`,
    author: "Moving Consultant",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Planning"
  },
  {
    id: "6",
    title: "International Moving: A Complete Guide",
    content: `Moving abroad involves unique challenges and requirements. Our guide covers everything from documentation to customs clearance:

- Research destination regulations.
- Prepare necessary documents.
- Choose international movers.
- Plan for customs and shipping timelines.`,
    author: "International Team",
    date: "February 15, 2024",
    readTime: "12 min read",
    category: "International"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-hero text-white py-16 mb-8">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm mb-4">
              <span className="flex items-center gap-2"><User className="h-4 w-4" />{post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />{post.date}</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{post.readTime}</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">{post.category}</span>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="container mx-auto px-4 pb-20">
        <Card className="max-w-3xl mx-auto shadow-card">
          <CardContent className="p-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="prose prose-lg max-w-none text-foreground mb-8 whitespace-pre-line">
                {post.content}
              </div>
              <Link to="/blog">
                <Button variant="outline" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Blog
                </Button>
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPost;
