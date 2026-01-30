import { SearchInput } from "@/components/SearchInput";
import { AppGrid } from "@/components/AppGrid";
import { Header } from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-100/40 rounded-full blur-3xl opacity-60"></div>
      </div>

      <Header />

      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-5xl"
        >
          {/* Logo */}
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter mb-8 sm:mb-12 select-none flex">
            <span className="text-[#4285F4]">R</span>
            <span className="text-[#EA4335]">I</span>
            <span className="text-[#FBBC05]">V</span>
            <span className="text-[#34A853]">O</span>
          </h1>

          {/* Search */}
          <div className="w-full px-4 mb-4">
            <SearchInput autoFocus />
          </div>

          {/* Quick Actions / Shortcuts (optional) */}
          <div className="flex items-center gap-4 mt-6 text-sm">
            <button className="px-4 py-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all">
              Add Shortcut
            </button>
            <span className="text-border">|</span>
            <div className="text-muted-foreground/60">
              Press <kbd className="font-mono bg-muted/50 px-1 rounded text-xs">/</kbd> to search
            </div>
          </div>

          {/* App Grid */}
          <AppGrid />
        </motion.div>
      </main>

      <footer className="w-full p-4 sm:p-6 text-center text-sm text-muted-foreground/60">
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-muted-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-muted-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-muted-foreground transition-colors">Settings</a>
        </div>
      </footer>
    </div>
  );
}
