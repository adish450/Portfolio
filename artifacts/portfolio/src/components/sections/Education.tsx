import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const awards = [
    { title: "Professional Level Certification", org: "Samsung Electronics" },
    { title: "Rising Star Award", period: "Q2 2022" },
    { title: "Employee of the Quarter", period: "Q3 2022" },
    { title: "Employee of the Quarter", period: "Q1 2025" },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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

        {/* Awards & Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-primary" size={32} />
            Awards & Certificates
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="bg-secondary/30 border-white/5 hover:border-primary/30 transition-colors">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{award.title}</p>
                      <p className="text-sm text-muted-foreground">{award.org ?? award.period}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
