import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronRight, Terminal, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Production Issues Resolved" },
    { value: "80+", label: "Code Changes (One UI 8.0)" },
    { value: "9.64", label: "CGPA / 10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="font-mono text-muted-foreground text-sm">
              // senior android engineer
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Mohammad Adish
            </h1>

            <div className="flex items-center gap-3 text-xl sm:text-2xl font-mono text-foreground/80">
              <span className="text-primary">{'>'}</span>
              <span>5+ years @ Samsung R&D</span>
            </div>

            <Card className="bg-[#0d1117] border-[#30363d] font-mono text-sm mt-2 shadow-xl shadow-black/50">
              <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                <span className="ml-2 text-muted-foreground text-xs flex items-center gap-1">
                  <Terminal size={12} /> bash
                </span>
              </div>
              <CardContent className="p-4 space-y-2">
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> npx mohadish
                </div>
                <div className="text-foreground">Loading profile... <span className="text-primary">✓</span></div>
                <div className="text-foreground"><span className="text-primary">Role:</span> Senior Android Engineer</div>
                <div className="text-foreground"><span className="text-primary">Stack:</span> Kotlin · AOSP · Jetpack Compose</div>
                <div className="text-foreground"><span className="text-primary">Status:</span> Available for opportunities <span className="text-primary">✓</span></div>
                <div className="animate-pulse text-primary">_</div>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 mt-4 font-mono">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                View Projects
                <ChevronRight size={18} />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Mohammad_Adish_Resume.pdf`}
                download="Mohammad_Adish_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded bg-card text-foreground font-semibold hover:bg-secondary/80 border border-border transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <a href="https://linkedin.com/in/mohammad-adish" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-white/5">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/adish450" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-white/5">
                <Github size={20} />
              </a>
              <a href="mailto:adishirfan17@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-white/5">
                <Mail size={20} />
              </a>
              <a href="tel:+918826150973" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-white/5">
                <Phone size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
              <img
                src={`${import.meta.env.BASE_URL}images/avatar-abstract.png`}
                alt="Abstract Android Tech"
                className="w-full h-auto object-cover rounded-2xl border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 p-4 bg-card border border-border rounded shadow-xl font-mono text-xs text-primary">
                {"<developer />"}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-border pt-12 pb-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 border-l border-border pl-6">
              <span className="text-3xl font-bold font-mono text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-mono">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
