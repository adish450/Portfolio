import { GitBranch, User } from "lucide-react";

export function StatusBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-8 bg-background border-t border-border flex items-center justify-between px-4 font-mono text-[11px] text-muted-foreground z-50">
      <div className="flex items-center gap-4 h-full">
        <div className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <GitBranch size={12} className="text-primary" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-2 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>available for opportunities</span>
        </div>
      </div>
      <div className="flex items-center gap-4 h-full">
        <div className="hidden md:flex items-center gap-2 px-2 h-full">
          <span>Kotlin · AOSP · Compose</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors text-primary">
          <User size={12} />
          <span>Mohammad Adish Irfan</span>
        </div>
      </div>
    </div>
  );
}
