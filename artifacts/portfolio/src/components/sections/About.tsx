import { motion } from "framer-motion";
import { Cpu, Smartphone, Code2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    { icon: Smartphone, title: "Android Framework & AOSP", desc: "Deep expertise in platform-level development, system services, and HAL integration for Samsung One UI." },
    { icon: Cpu, title: "Performance Optimization", desc: "Reducing load times 15–20%, minimizing memory on foldable devices, and debugging ANRs with Perfetto & Android Profiler." },
    { icon: Code2, title: "Clean Architecture", desc: "Building scalable, modular, offline-first codebases with MVVM, Clean Architecture, and SDUI patterns." },
    { icon: Wrench, title: "Testing & CI/CD", desc: "Automating quality with JUnit, Mockito, Espresso, GitHub Actions, Jenkins, and Fastlane release pipelines." },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Senior Android Engineer with 5+ years of experience building scalable Android applications and platform components. Skilled in Kotlin, Java, and Android Framework/AOSP, with expertise in MVVM, Coroutines, and performance optimization for flagship Samsung devices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover-glow bg-secondary/30">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
