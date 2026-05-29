import { useState } from "react";
import { motion } from "framer-motion";

const owaspRisks = [
  {
    id: "LLM01",
    title: "Prompt Injection",
    threat: 95,
    color: "from-red-500 to-orange-500",
    mitigation: `# Input Sanitization\nvalidate_prompt(input, {\n  max_tokens: 4096,\n  block_patterns: INJECTION_DB,\n  sandbox: true\n})`,
    description: "Manipulating LLM behavior through crafted inputs that override system instructions.",
    size: "md:col-span-2",
  },
  {
    id: "LLM02",
    title: "Insecure Output",
    threat: 80,
    color: "from-orange-500 to-yellow-500",
    mitigation: `# Output Filtering\nsanitize_output(response, {\n  strip_code: true,\n  escape_html: true\n})`,
    description: "Failing to validate or sanitize LLM outputs before passing to downstream systems.",
    size: "md:col-span-1",
  },
  {
    id: "LLM03",
    title: "Training Data Poisoning",
    threat: 85,
    color: "from-red-600 to-red-400",
    mitigation: `# Data Validation\nverify_dataset(source, {\n  integrity: "sha256",\n  provenance: true\n})`,
    description: "Corrupting training data to manipulate model behavior and introduce backdoors.",
    size: "md:col-span-1",
  },
  {
    id: "LLM04",
    title: "Model DoS",
    threat: 70,
    color: "from-yellow-500 to-green-500",
    mitigation: `# Rate Limiting\nthrottle(request, {\n  rpm: 60,\n  max_context: 8192\n})`,
    description: "Exhausting model resources through expensive queries or recursive prompts.",
    size: "md:col-span-1",
  },
  {
    id: "LLM05",
    title: "Supply Chain Vuln",
    threat: 75,
    color: "from-orange-400 to-yellow-400",
    mitigation: `# Dependency Audit\nscan_dependencies({\n  models: true,\n  plugins: true,\n  sbom: "generate"\n})`,
    description: "Vulnerabilities in third-party model components, plugins, or training pipelines.",
    size: "md:col-span-1",
  },
  {
    id: "LLM06",
    title: "Sensitive Info Disclosure",
    threat: 90,
    color: "from-red-500 to-pink-500",
    mitigation: `# PII Protection\nredact_output(response, {\n  pii: true,\n  secrets: true,\n  differential_privacy: 0.1\n})`,
    description: "LLM revealing confidential data from training sets or conversation context.",
    size: "md:col-span-2",
  },
  {
    id: "LLM07",
    title: "Insecure Plugin Design",
    threat: 72,
    color: "from-yellow-500 to-orange-400",
    mitigation: `# Plugin Sandbox\nisolate_plugin(ext, {\n  permissions: LEAST_PRIV,\n  timeout: 5000\n})`,
    description: "Plugins with excessive permissions or insufficient input validation.",
    size: "md:col-span-1",
  },
  {
    id: "LLM08",
    title: "Excessive Agency",
    threat: 78,
    color: "from-orange-500 to-red-400",
    mitigation: `# Action Guardrails\nlimit_actions(agent, {\n  require_approval: true,\n  max_chain: 3\n})`,
    description: "LLM agents given too much autonomy without proper human oversight controls.",
    size: "md:col-span-1",
  },
  {
    id: "LLM09",
    title: "Overreliance",
    threat: 60,
    color: "from-green-500 to-cyan-500",
    mitigation: `# Confidence Scoring\nflag_low_confidence(res, {\n  threshold: 0.85,\n  require_citation: true\n})`,
    description: "Blindly trusting LLM outputs without verification, leading to misinformation.",
    size: "md:col-span-1",
  },
  {
    id: "LLM10",
    title: "Model Theft",
    threat: 82,
    color: "from-purple-500 to-pink-500",
    mitigation: `# Model Protection\nwatermark(model, {\n  technique: "steganographic",\n  access_log: true\n})`,
    description: "Unauthorized extraction or replication of proprietary LLM model weights.",
    size: "md:col-span-1",
  },
];

const OWASPSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="owasp" className="py-8 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-[200px]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-secondary mb-3 font-medium">Threat Intelligence</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            OWASP Top 10 for <span className="text-glow-blue text-primary">LLMs</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interactive threat map of the most critical security risks in Large Language Model applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
          {owaspRisks.map((risk, i) => (
            <motion.div
              key={risk.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`glass-card glass-card-hover p-5 cursor-pointer relative overflow-hidden transition-all duration-500 group ${risk.size}`}
            >
              {/* Glow border on hover */}
              {hoveredIndex === i && (
                <motion.div
                  layoutId="owasp-glow"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 30px hsl(227 100% 59% / 0.3), inset 0 0 30px hsl(227 100% 59% / 0.05)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-primary tracking-wider">{risk.id}</span>
                  {/* Animated shield icon */}
                  <motion.svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-primary"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </motion.svg>
                </div>

                <h3 className="font-display text-sm md:text-base font-bold text-foreground mb-2">{risk.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-auto">{risk.description}</p>

                {/* Threat meter - visible on hover */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredIndex === i ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-3 border-t border-border/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Threat Level</span>
                      <span className="text-xs font-mono font-bold text-destructive">{risk.threat}%</span>
                    </div>
                    <div className="threat-meter">
                      <div
                        className={`threat-meter-fill bg-gradient-to-r ${risk.color}`}
                        style={{ width: hoveredIndex === i ? `${risk.threat}%` : "0%" }}
                      />
                    </div>
                    <pre className="text-[10px] font-mono text-muted-foreground bg-background/50 p-2 rounded-lg overflow-x-auto leading-relaxed whitespace-pre-wrap">
                      {risk.mitigation}
                    </pre>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OWASPSection;
