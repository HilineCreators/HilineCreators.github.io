import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Understanding Adversarial Attacks on LLMs",
    excerpt: "A deep dive into how adversarial prompts can manipulate large language models and what defenses exist today.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    tag: "Research",
  },
  {
    title: "Data Privacy in the Age of Generative AI",
    excerpt: "How organizations can protect sensitive data while leveraging generative AI for innovation.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    tag: "Privacy",
  },
  {
    title: "AI Governance Frameworks: A 2026 Guide",
    excerpt: "An overview of emerging regulations and best practices for responsible AI deployment.",
    date: "Jan 10, 2026",
    readTime: "10 min read",
    tag: "Governance",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-8 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3 font-medium">From Our Blog</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary text-glow-blue">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Thoughts and research on AI security, privacy, and governance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="https://blog-hilinecreators.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card glass-card-hover group block overflow-hidden transition-all duration-500"
            >
              <div className="h-px bg-gradient-to-r from-primary to-secondary opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-mono font-semibold px-2.5 py-1 rounded-full border border-primary/15 bg-primary/5">
                    {post.tag}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                
                <h3 className="font-display text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
