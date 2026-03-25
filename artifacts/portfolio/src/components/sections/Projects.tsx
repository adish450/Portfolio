import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "LaundryPro",
      description: "Comprehensive laundry management application enabling intuitive pickup scheduling, real-time order tracking, and secure payments.",
      highlights: "Built end-to-end flows with live status updates via Coroutines/Flow, implemented robust offline caching with Room, and engineered a secure payment flow with comprehensive CI/CD.",
      tech: ["Kotlin", "MVVM", "Room", "Retrofit", "Coroutines"],
      github: "https://github.com/adish450/LaundryPro"
    },
    {
      title: "My Maid Manager",
      description: "A comprehensive household staff management application covering daily attendance, custom tasks, payroll tracking, and reporting.",
      highlights: "Developed full Compose UI from scratch with Clean Architecture. Implemented offline-first data sync, secure authentication,REST APIs, and modular feature separation.",
      tech: ["Jetpack Compose", "MVVM", "Room", "Retrofit", "Clean Architecture"],
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
          <p className="text-muted-foreground max-w-2xl">Showcasing my personal projects demonstrating expertise in modern Android development architectures and Jetpack libraries.</p>
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
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-foreground/90 font-medium">{project.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.highlights}</p>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  );
}
