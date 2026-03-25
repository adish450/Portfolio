import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-display font-bold tracking-wider text-foreground hover:text-primary transition-colors inline-block mb-2">
              MA<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Senior Android Engineer crafting exceptional mobile experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="mailto:adishirfan17@gmail.com" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/mohammad-adish" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/adish450" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
              <Github size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammad Adish Irfan. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
