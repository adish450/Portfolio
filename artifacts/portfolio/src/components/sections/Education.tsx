import { motion } from "framer-motion";
import { Terminal, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  const awards = [
    { title: "Professional Level Certification", org: "Samsung Electronics" },
    { title: "Rising Star Award", period: "Q2 2022" },
    { title: "Employee of the Quarter", period: "Q3 2022" },
    { title: "Employee of the Quarter", period: "Q1 2025" },
  ];

  return (
    <section id="education" className="py-24 relative border-t border-border">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <Terminal size={16} /> 
            <span>$ cat education.txt</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
          
          <Card className="overflow-hidden border-border bg-card">
            <div className="bg-[#161b22] px-4 py-2 border-b border-border flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">university.sh</span>
            </div>
            <CardContent className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-sm">
              <div>
                <div className="text-primary mb-2">export const degree = <span className="text-foreground">"B.Tech in Electronics & Communication Engineering"</span>;</div>
                <div className="text-primary mb-4">export const university = <span className="text-foreground">"Jamia Millia Islamia, New Delhi"</span>;</div>
                <div className="text-muted-foreground">{"// Jul 2016 – Jun 2020"}</div>
              </div>
              <div className="shrink-0 text-center bg-[#0d1117] border border-border p-6 rounded shadow-xl">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-semibold">CGPA</p>
                <p className="text-3xl font-bold text-primary">9.64 <span className="text-lg text-muted-foreground">/10</span></p>
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
          <div className="font-mono text-primary mb-4 flex items-center gap-2">
            <Terminal size={16} /> 
            <span>$ ls -l ./awards</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Awards & Certificates</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-colors font-mono text-sm">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="text-primary shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{award.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        <span className="text-primary mr-1">@</span> 
                        {award.org ?? award.period}
                      </p>
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
