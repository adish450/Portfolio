import { motion } from "framer-motion";
import { Cpu, Smartphone, Code2, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const highlights = [
    { icon: Smartphone, title: "Modern UI/UX", desc: "Crafting beautiful, responsive interfaces using Jetpack Compose." },
    { icon: Cpu, title: "Performance First", desc: "Optimizing memory, reducing ANRs, and delivering buttery smooth 60fps." },
    { icon: Code2, title: "Clean Architecture", desc: "Building scalable, maintainable modular codebases with MVVM." },
    { icon: Wrench, title: "Testing & CI/CD", desc: "Automating quality with robust unit, UI tests, and release pipelines." },
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
            Senior Android Engineer with 4+ years of experience building high-performance, user-friendly Android applications for global users. Skilled in Kotlin, Java, and modern architectures like MVVM and Clean Architecture. Experienced in Jetpack Compose, Coroutines, Room, Retrofit, and modular app design to deliver scalable, maintainable, and high-quality apps with optimized performance.
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
