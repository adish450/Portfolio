import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Java", "C++", "Python"],
    },
    {
      title: "Architecture & Design",
      skills: ["MVVM", "Clean Architecture", "Modularization", "Offline-first Architecture", "SDUI (Server-Driven UI)"],
    },
    {
      title: "Android & Frameworks",
      skills: ["Android Framework", "AOSP", "System Services", "Jetpack Compose", "Coroutines", "Flow", "Paging"],
    },
    {
      title: "Networking & Databases",
      skills: ["Retrofit", "OkHttp", "Room", "SQLite", "DataStore"],
    },
    {
      title: "Testing & CI/CD",
      skills: ["JUnit", "Mockito", "Espresso", "GitHub Actions", "Jenkins", "Fastlane"],
    },
    {
      title: "Tools & Optimization",
      skills: ["Hilt", "Dagger 2", "Crashlytics", "LeakCanary", "Perfetto", "Android Profiler", "Git", "ANR/Crash Debugging", "HAL (Hardware Abstraction Layer)", "IPC (Binder)", "Analytics"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#0d1117] border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-primary mb-4">{"// skills.json"}</div>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover-glow bg-card/60">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-mono text-primary">
                    <span className="text-muted-foreground mr-2">"</span>
                    {category.title}
                    <span className="text-muted-foreground ml-2">": [</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 pl-4">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="text-xs py-1 px-2.5 font-mono bg-card border-primary/30 text-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        "{skill}"
                      </Badge>
                    ))}
                  </div>
                  <div className="text-muted-foreground font-mono mt-3">]</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
