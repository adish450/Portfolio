import { motion } from "framer-motion";
import { GitCommit, Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Lead Software Development Engineer – Android",
      company: "Samsung R&D, Noida",
      duration: "Mar 2024 – Present",
      hash: "a3f7b2c",
      bullets: [
        "Developing and maintaining Wallpaper platform modules (DressRoom, Dynamic Lock Screen, Sprite Wallpaper, Wallpaper Framework), working across application and Android framework layers for flagship Samsung devices.",
        "Improved wallpaper rendering and resource handling, reducing average load time by 15–20% and optimizing memory usage on foldable devices through framework-level changes.",
        "Resolved 200+ production issues and delivered 80+ code changes supporting One UI 8.0 (Android 16) across multiple device categories including foldable and flip models.",
        "Collaborated with cross-functional teams (HQ, UX, QA) to stabilize wallpaper features across releases, improving reliability and reducing crash occurrences in production.",
      ]
    },
    {
      role: "Software Development Engineer – Android",
      company: "Samsung R&D, Noida",
      duration: "Feb 2021 – Feb 2024",
      hash: "8f92d1e",
      bullets: [
        "Developed and maintained core Android Settings modules, including Connections and General Management, integrating AOSP components into Samsung One UI.",
        "Implemented features such as on-demand language installation and customizable keys menu, improving user workflows and reducing navigation time by 20–30%.",
        "Optimized performance and memory usage of system applications, reducing memory footprint by 15–20% on low-end devices and improving responsiveness.",
        "Built and maintained unit/UI test coverage using JUnit, Mockito, Espresso, reducing regressions and improving release stability across multiple device variants.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <Terminal size={16} /> 
            <span>$ git log --oneline --decorate</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-24px] top-4 bottom-[-48px] w-px bg-border last:hidden"></div>
              
              <div className="hidden md:flex absolute left-[-32px] top-4 w-4 h-4 rounded-full bg-card border-2 border-primary items-center justify-center">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
              </div>

              <Card className="hover-glow bg-card font-mono text-sm border-border">
                <CardContent className="p-6">
                  <div className="mb-4 space-y-1 border-b border-border pb-4">
                    <div className="text-yellow-400">commit {exp.hash}</div>
                    <div><span className="text-muted-foreground">Author:</span> Mohammad Adish {"<adishirfan17@gmail.com>"}</div>
                    <div><span className="text-muted-foreground">Date:  </span> {exp.duration}</div>
                    <div className="mt-2 text-foreground font-bold font-sans text-lg">{exp.role} @ {exp.company}</div>
                  </div>

                  <ul className="space-y-2 mt-4 font-sans text-sm">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-mono mt-0.5 shrink-0">+</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
