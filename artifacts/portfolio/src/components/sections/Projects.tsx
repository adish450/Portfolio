import { motion } from "framer-motion";
import { Github, Terminal } from "lucide-react";
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
    <section id="projects" className="py-24 relative bg-[#0d1117] border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <Terminal size={16} /> 
            <span>$ ls -la ./projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
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
              <Card className="h-full flex flex-col hover-glow bg-card border-border overflow-hidden">
                <div className="bg-[#161b22] px-4 py-2 border-b border-border flex items-center gap-2 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-500/80"></div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">{project.title.toLowerCase().replace(' ', '-')}.sh</div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
                
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-bold font-sans">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm font-mono mt-2">{project.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 font-sans text-sm">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary font-mono mt-0.5 shrink-0">{'>'}</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2 pt-6 border-t border-border/50 bg-black/20">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline" className="bg-transparent border-primary/20 text-muted-foreground font-mono text-xs">
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
