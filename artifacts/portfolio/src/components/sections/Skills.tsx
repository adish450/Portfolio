import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Kotlin", "Java", "C++"],
    },
    {
      title: "Architecture & Design",
      skills: ["MVVM", "Clean Architecture", "Modularization"],
    },
    {
      title: "Android & Frameworks",
      skills: ["Jetpack Compose", "Coroutines", "Flow", "LiveData", "ViewModel", "Navigation Component"],
    },
    {
      title: "Networking & Databases",
      skills: ["Retrofit", "OkHttp", "Room", "SQLite", "SharedPreferences"],
    },
    {
      title: "Testing & CI/CD",
      skills: ["JUnit", "Mockito", "Espresso", "GitHub Actions", "Jenkins", "Fastlane"],
    },
    {
      title: "Tools & Optimization",
      skills: ["Hilt", "Dagger 2", "Crashlytics", "LeakCanary", "Git", "Performance Tuning", "ANR Reduction", "Analytics"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
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
              <Card className="h-full hover:border-white/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-primary/90">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm py-1.5 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
