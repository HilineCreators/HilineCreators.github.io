import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const scanLines = [
  "$ llm-scan --target gpt-4o --mode deep",
  "[INFO] Initializing parameter integrity check...",
  "[SCAN] Checking 175B parameters for anomalies...",
  "[OK] Embedding layers: CLEAN",
  "[OK] Attention heads: NO DRIFT DETECTED",
  "[WARN] Prompt injection vector found at layer 47",
  "[INFO] Deploying adversarial shield v3.2...",
  "[OK] Shield active. Threat neutralized.",
  "[SCAN] Data exfiltration paths: BLOCKED",
  "[OK] Model fingerprint verified: 0xA3F7..B91C",
  "[INFO] Compliance check: SOC2 ✓ | ISO27001 ✓",
  "[DONE] Security scan complete. Score: 97/100",
  "$ _",
];

const LiveTerminal = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= scanLines.length) {
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }

    const timer = setTimeout(() => {
      setLines((prev) => [...prev, scanLines[currentLine]]);
      setCurrentLine((prev) => prev + 1);
    }, currentLine === 0 ? 1000 : 600 + Math.random() * 800);

    return () => clearTimeout(timer);
  }, [currentLine]);

  const getLineColor = (line: string) => {
    if (line.startsWith("[OK]")) return "text-cyber-lime";
    if (line.startsWith("[WARN]")) return "text-yellow-400";
    if (line.startsWith("[SCAN]")) return "text-neon-cobalt";
    if (line.startsWith("[DONE]")) return "text-cyber-lime font-bold";
    if (line.startsWith("$")) return "text-foreground";
    return "text-muted-foreground";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-8 right-8 w-[380px] hidden lg:block z-20"
    >
      <div className="glass-card p-1">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/30">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[10px] text-muted-foreground font-mono">llm-security-scan</span>
        </div>
        <div className="p-3 h-[200px] overflow-hidden font-mono text-[11px] leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className={`${getLineColor(line)} whitespace-nowrap`}>
              {line}
            </div>
          ))}
          {currentLine < scanLines.length && (
            <span className="inline-block w-2 h-3.5 bg-cyber-lime animate-pulse" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LiveTerminal;
