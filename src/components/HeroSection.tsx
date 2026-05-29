import { Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import WireframeSphere from "./WireframeSphere";
import LiveTerminal from "./LiveTerminal";
import NeuralBackground from "./NeuralBackground";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden digital-grain">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <WireframeSphere />
      </Suspense>
      <NeuralBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[1]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/4 blur-[180px] z-[1]" />

      <div className="relative z-10 container mx-auto px-4 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="relative">
            <Shield className="w-12 h-12 text-primary" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-muted-foreground/30 to-transparent" />
          <div className="relative">
            <Brain className="w-12 h-12 text-secondary" />
            <div className="absolute inset-0 animate-ping opacity-20" style={{ animationDelay: "0.5s" }}>
              <Brain className="w-12 h-12 text-secondary" />
            </div>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-lime animate-pulse" />
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">AI Security Platform</span>
        </motion.div>

        {/* Main headline with shimmer */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 pb-2 shimmer-text leading-[1.1]"
        >
          Architecting
          <br />
          Secure Intelligence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We protect the next generation of AI systems — from model integrity and adversarial defense
          to LLM security and governance compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => scrollTo("#owasp")}
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-display tracking-wider px-8 border-glow-blue"
          >
            Explore Threats
            <ChevronDown className="w-4 h-4 ml-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="border-secondary/50 text-secondary hover:bg-secondary/10 font-display tracking-wider px-8"
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground animate-float" />
        </motion.div>
      </div>

      {/* Live Terminal */}
      <LiveTerminal />
    </section>
  );
};

export default HeroSection;
