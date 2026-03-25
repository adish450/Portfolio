import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ChevronRight } from "lucide-react";

export function Hero() {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Production Issues Resolved" },
    { value: "80+", label: "Code Changes (One UI 8.0)" },
    { value: "9.64", label: "CGPA / 10" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-white/10 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Mohammad Adish</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl text-foreground/80 font-display">
              Senior Android Engineer
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              5+ years building scalable Android applications and platform components. Expert in Kotlin, Android Framework/AOSP, and modern architecture for flagship Samsung devices.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="mailto:adishirfan17@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)]"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-foreground font-semibold hover:bg-secondary/80 border border-white/10 hover:scale-105 transition-all duration-300"
              >
                View Projects
                <ChevronRight size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6 mt-6">
              <a href="https://linkedin.com/in/mohammad-adish" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/adish450" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Github size={24} />
              </a>
              <a href="tel:+918826150973" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                <Phone size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/avatar-abstract.png`}
              alt="Abstract Android Tech"
              className="w-full max-w-md mx-auto object-cover rounded-3xl border border-white/10 shadow-2xl shadow-primary/20"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 border-t border-white/10 pt-12 pb-12"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 border-l border-white/10 pl-6">
              <span className="text-4xl font-bold font-display text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
