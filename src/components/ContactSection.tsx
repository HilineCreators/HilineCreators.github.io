import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, BookOpen, Send, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, href: "https://github.com/Hariprasad-ka/", label: "GitHub" },
  { icon: BookOpen, href: "http://blog.hilinecreators.com/", label: "Blog" },
  { icon: Mail, href: "mailto:contact@hilinecreators.com", label: "Email" },
];

const threats = [
  "LLM-2024-7891: Prompt injection via Unicode homoglyphs",
  "CVE-2026-1234: Model weight exfiltration via side-channel",
  "LLM-2026-0042: Training data extraction through memorization",
  "CVE-2026-5678: Plugin sandbox escape in AI agents",
  "LLM-2026-0099: Instruction hierarchy bypass in system prompts",
  "CVE-2026-3456: Embedding inversion attack on RAG systems",
];

const MagneticButton = ({ children, ...props }: React.ComponentProps<typeof Button>) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200"
      {...props}
    >
      {children}
    </Button>
  );
};

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-8 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary text-glow-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to secure your AI systems? Let's talk.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 max-w-lg mx-auto space-y-4"
        >
          <Input
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="bg-background/30 border-border/30 focus:border-primary/50"
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="bg-background/30 border-border/30 focus:border-primary/50"
          />
          <Textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={5}
            className="bg-background/30 border-border/30 focus:border-primary/50"
          />
          <MagneticButton type="submit" className="w-full font-display tracking-wider border-glow-blue">
            <Send className="w-4 h-4 mr-2" /> Send Message
          </MagneticButton>
        </motion.form>

        {/* Cyber Footer */}
        <div className="mt-24">
          {/* Threat Marquee */}
          <div className="overflow-hidden border-y border-border/20 py-3 mb-10">
            <div className="animate-marquee whitespace-nowrap flex gap-8">
              {[...threats, ...threats].map((t, i) => (
                <span key={i} className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive/80" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              © 2026 Hiline Creators. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
