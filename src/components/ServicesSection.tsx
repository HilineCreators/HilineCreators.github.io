import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Radar,
  ClipboardCheck,
  Swords,
  Scale,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "AI Model Security",
    description: "Protect your AI models from tampering, theft, and unauthorized access with robust security frameworks.",
    details: "We implement multi-layered defenses including model watermarking, access control, and runtime integrity verification.",
  },
  {
    icon: Lock,
    title: "Data Protection & Privacy",
    description: "Ensure sensitive training data remains private with encryption, anonymization, and compliance strategies.",
    details: "Our privacy-preserving techniques include differential privacy, federated learning support, and encrypted data pipelines.",
  },
  {
    icon: Radar,
    title: "Threat Intelligence for AI",
    description: "Monitor and detect emerging threats targeting AI infrastructure with real-time threat intelligence.",
    details: "Continuous monitoring of AI-specific attack vectors, vulnerability databases, and threat actor TTPs.",
  },
  {
    icon: ClipboardCheck,
    title: "Security Auditing & Compliance",
    description: "Comprehensive security audits aligned with industry standards and AI-specific regulatory frameworks.",
    details: "Full-spectrum audits covering model behavior, data lineage, and compliance with SOC 2, ISO 27001, and AI regulations.",
  },
  {
    icon: Swords,
    title: "Adversarial Attack Defense",
    description: "Defend against adversarial inputs, data poisoning, and model evasion attacks with proven techniques.",
    details: "We deploy adversarial training, input sanitization, and robustness testing to harden your models.",
  },
  {
    icon: Scale,
    title: "AI Governance Consulting",
    description: "Build responsible AI policies with governance frameworks that balance innovation and safety.",
    details: "End-to-end governance strategy including risk assessment, bias monitoring, and accountability structures.",
  },
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-8 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3 font-medium">Our Expertise</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-primary text-glow-blue">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            End-to-end security solutions designed specifically for AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="glass-card glass-card-hover p-6 group cursor-pointer relative overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/15 group-hover:bg-primary/15 transition-all duration-500">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <ArrowRight className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${expandedIndex === i ? 'rotate-90 text-primary' : 'group-hover:translate-x-1'}`} />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border/20">
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
