import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="text-primary" size={32} />
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-card to-secondary/30 relative">
            {/* Decorative background element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
            
            <CardContent className="p-8 md:p-10 relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">B.Tech in Electronics & Communication Engineering</h3>
                <p className="text-xl text-primary font-medium mb-4">Jamia Millia Islamia, New Delhi</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                  <span className="px-3 py-1 rounded bg-secondary text-muted-foreground">Jul 2016 – Jun 2020</span>
                </div>
              </div>
              
              <div className="shrink-0 text-center bg-card border border-white/10 p-6 rounded-2xl shadow-xl">
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-semibold">CGPA</p>
                <p className="text-4xl font-bold font-display text-gradient">9.64 <span className="text-xl text-muted-foreground">/10</span></p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
