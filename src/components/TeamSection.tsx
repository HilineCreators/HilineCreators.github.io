import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin } from "lucide-react";

const team = [
  {
    name: "Ajay Asnani",
    role: "Founder & Security Lead",
    bio: "Cybersecurity researcher specializing in AI model protection and adversarial defense.",
    initials: "AA",
    github: "https://github.com/Hariprasad-ka/",
  },
  {
    name: "Priya Mehta",
    role: "AI Governance Specialist",
    bio: "Expert in AI policy frameworks, compliance, and responsible AI deployment strategies.",
    initials: "PM",
  },
  {
    name: "Ravi Shankar",
    role: "Threat Intelligence Analyst",
    bio: "Specializes in monitoring AI-specific threat landscapes and building proactive defense systems.",
    initials: "RS",
  },
  {
    name: "Sara Chen",
    role: "Data Privacy Engineer",
    bio: "Focused on privacy-preserving machine learning and secure data pipeline architectures.",
    initials: "SC",
  },
];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card glass-card-hover p-6 text-center group transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <Avatar className="w-16 h-16 mx-auto mb-4 border border-border/50 group-hover:border-primary/40 transition-all duration-500">
                <AvatarFallback className="bg-muted text-foreground font-display text-sm group-hover:bg-primary/10 transition-colors duration-500">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-[11px] text-secondary mb-3 font-medium tracking-wide">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
              <div className="flex justify-center gap-2">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                <a href="#" className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300">
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
