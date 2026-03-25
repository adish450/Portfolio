import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "LaundryPro",
      description: "Scalable laundry management app with offline-first data layer, real-time updates, and secure payments.",
      highlights: [
        "Built with MVVM + Clean Architecture, implementing an offline-first data layer with Room and Retrofit, including caching and synchronization strategies for reliable data consistency.",
        "Designed a reactive data flow using Coroutines and Flow, handling real-time updates, background sync, and efficient state management across multiple screens.",
        "Implemented pagination and caching strategies to handle large datasets while minimizing network calls.",
      ],
      tech: ["Kotlin", "MVVM", "Clean Architecture", "Room", "Retrofit", "Coroutines", "Flow"],
      github: "https://github.com/adish450/LaundryPro"
    },
    {
      title: "My Maid Manager",
      description: "Modular household staff management app covering attendance, payroll, tasks, and reporting.",
      highlights: [
        "Developed with Jetpack Compose and Clean Architecture, implementing attendance tracking, payroll management, and reporting features.",
        "Implemented REST API integration with structured error handling and retry mechanisms, improving reliability under network failures.",
        "Added offline-first data synchronization and automated testing (JUnit, Espresso) for application stability and maintainability.",
      ],
      tech: ["Jetpack Compose", "MVVM", "Clean Architecture", "Room", "Retrofit", "OkHttp"],
      github: "https://github.com/adish450/MyMaidManager"
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">Personal projects demonstrating expertise in modern Android development architectures, Jetpack libraries, and offline-first design.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="h-full flex flex-col hover-glow bg-card/60">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <SmartphoneIcon />
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 rounded-full"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <p className="text-foreground/90 font-medium">{project.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                        <span className="text-primary mt-1 text-xs shrink-0">◆</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="bg-background/50 border-white/10">
                      {t}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmartphoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  );
}
