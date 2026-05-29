import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const pipelineStages = [
  {
    id: "input",
    label: "Input Sanitization",
    icon: "🛡️",
    description: "First line of defense against prompt injection and malicious inputs.",
    details: "All user inputs pass through multi-layer sanitization including regex pattern matching, semantic analysis, and known attack signature detection. We maintain a continuously updated database of injection patterns covering 50,000+ known vectors.",
    tech: ["NLP Filtering", "Regex Engine", "Signature DB"],
  },
  {
    id: "prompt",
    label: "Prompt Injection Shield",
    icon: "⚡",
    description: "Isolates system prompts from user-controllable content.",
    details: "Our proprietary prompt isolation architecture creates a cryptographic boundary between system instructions and user input. This prevents instruction override attacks while maintaining full model capability through sandboxed execution contexts.",
    tech: ["Prompt Isolation", "Context Sandboxing", "Instruction Guard"],
  },
  {
    id: "model",
    label: "Model Integrity",
    icon: "🧠",
    description: "Continuous monitoring of model weights and behavior drift.",
    details: "Real-time fingerprinting of model parameters detects unauthorized modifications, weight poisoning, or behavioral drift. Automated rollback capabilities ensure model integrity across deployment environments with <50ms detection latency.",
    tech: ["Weight Hashing", "Drift Detection", "Auto-Rollback"],
  },
  {
    id: "output",
    label: "Output Validation",
    icon: "✅",
    description: "Ensures responses don't leak sensitive data or harmful content.",
    details: "Multi-stage output pipeline including PII detection, toxicity scoring, factual grounding verification, and data exfiltration prevention. All outputs are scored against compliance policies before delivery to end users.",
    tech: ["PII Redaction", "Toxicity Filter", "Compliance Check"],
  },
  {
    id: "audit",
    label: "Audit & Compliance",
    icon: "📊",
    description: "Full audit trail with regulatory compliance reporting.",
    details: "Every interaction is logged with tamper-proof audit trails supporting SOC 2, ISO 27001, GDPR, and emerging AI-specific regulations. Automated compliance reporting generates evidence packages for auditors with zero manual effort.",
    tech: ["SOC 2", "ISO 27001", "GDPR", "AI Act"],
  },
];

const PipelineSection = () => {
  const [selectedStage, setSelectedStage] = useState<string | null>(null);
  const stage = pipelineStages.find((s) => s.id === selectedStage);

  return (
    <section id="pipeline" className="py-8 relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3 font-medium">Architecture</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            AI Security <span className="text-primary text-glow-blue">Pipeline</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click each stage to explore the architectural safeguards protecting your AI systems.
          </p>
        </motion.div>

        {/* Pipeline visualization */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 max-w-5xl mx-auto">
          {pipelineStages.map((s, i) => (
            <motion.button
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedStage(s.id)}
              className={`flex-1 glass-card glass-card-hover p-5 text-left transition-all duration-500 group relative ${
                selectedStage === s.id ? "border-primary/50 border-glow-blue" : ""
              }`}
            >
              <div className="text-2xl mb-3">{s.icon}</div>
              <h3 className="font-display text-sm font-bold text-foreground mb-2">{s.label}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{s.description}</p>

              {/* Connector line */}
              {i < pipelineStages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-3 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {stage && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 mt-8 max-w-3xl mx-auto relative"
            >
              <button
                onClick={() => setSelectedStage(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{stage.icon}</span>
                <h3 className="font-display text-xl font-bold text-foreground">{stage.label}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{stage.details}</p>

              <div className="flex flex-wrap gap-2">
                {stage.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PipelineSection;
