import { motion } from "framer-motion";
import { Users } from "lucide-react";


const TeamSection = () => {
  return (
    <section id="team" className="py-8 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3 font-medium">The People</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary text-glow-blue">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A passionate team of security researchers and AI specialists.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 text-center max-w-md mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg font-bold text-foreground mb-2">Team Coming Soon</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We're assembling a world-class team of AI security researchers and specialists. Stay tuned.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
