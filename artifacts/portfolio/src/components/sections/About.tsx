import { motion } from "framer-motion";
import { Cpu, Smartphone, Code2, Wrench, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    { icon: Smartphone, title: "App Layer Development", desc: "Building polished, high-performance Android apps with Jetpack Compose, MVVM, Coroutines, Flow, Paging, and offline-first architecture." },
    { icon: Layers, title: "Android Framework & AOSP", desc: "Platform-level engineering across application and framework layers — system services, HAL integration, and Samsung One UI contributions." },
    { icon: Cpu, title: "Performance Optimization", desc: "Reducing load times 15–20%, minimizing memory on foldable devices, and debugging ANRs with Perfetto & Android Profiler." },
    { icon: Code2, title: "Clean Architecture", desc: "Designing scalable, modular, offline-first codebases with MVVM, Clean Architecture, Hilt DI, and SDUI patterns." },
    { icon: Wrench, title: "Testing & CI/CD", desc: "Automating quality with JUnit, Mockito, Espresso, GitHub Actions, Jenkins, and Fastlane release pipelines." },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="font-mono text-primary mb-4">{"<section id=\"about\">"}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans">
            Senior Android Engineer with 5+ years of experience working across both the <span className="text-foreground font-medium">app layer</span> and <span className="text-foreground font-medium">Android framework/AOSP</span>. Skilled in Kotlin, Java, Jetpack Compose, and platform-level development, with a strong focus on performance optimization and scalable architecture for flagship Samsung devices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover-glow bg-card/50">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-3 rounded bg-primary/10 text-primary border border-primary/20">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold font-mono">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="font-mono text-primary mt-16 text-right">{"</section>"}</div>
      </div>
    </section>
  );
}
