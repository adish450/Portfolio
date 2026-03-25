import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      role: "Lead Software Development Engineer – Android",
      company: "Samsung R&D, Noida",
      duration: "Mar 2024 – Present",
      bullets: [
        "Led new UI/UX feature development in system apps used by 50M+ global users, improving load times by 25% and reducing crash rates by 15%.",
        "Migrated legacy modules to MVVM + Coroutines, improving maintainability and enabling safer asynchronous code.",
        "Increased testability by adding JUnit, Mockito unit tests and Espresso UI tests into the release pipeline.",
        "Streamlined app validation processes through automated testing and internal scripts, catching bugs earlier.",
        "Collaborated with product and UX teams to deliver stable releases across 5+ device categories including foldable and flip models.",
      ]
    },
    {
      role: "Software Development Engineer – Android",
      company: "Samsung R&D, Noida",
      duration: "Feb 2021 – Feb 2024",
      bullets: [
        "Implemented on-demand language installation in Android apps, reducing setup steps by 40% and enabling seamless multilingual support.",
        "Designed and optimized password storage and autofill workflows, improving user convenience and login efficiency.",
        "Developed a customizable keys menu with lazy loading and optimized navigation, achieving 30% faster menu access.",
        "Reduced memory usage by 20% on low-end devices and enhanced UI/UX, improving app responsiveness and reducing ANRs.",
        "Leveraged MVVM architecture and Kotlin Coroutines to build maintainable, asynchronous, high-performance Android applications.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className="text-primary" size={32} />
            Work Experience
          </h2>
          <p className="text-muted-foreground">My professional journey in enterprise Android development.</p>
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
              {/* Timeline line for desktop */}
              <div className="hidden md:block absolute left-[-41px] top-2 bottom-[-48px] w-px bg-white/10 last:hidden"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-5px] md:left-[-46px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>

              <Card className="hover-glow bg-gradient-to-br from-card/80 to-card/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                      <p className="text-lg font-medium text-primary">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-secondary/80 text-sm font-medium border border-white/5 whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 text-xs">◆</span>
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
