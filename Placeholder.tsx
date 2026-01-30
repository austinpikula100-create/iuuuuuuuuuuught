import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

interface PlaceholderProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  colorClass: string;
  isSearch?: boolean;
}

export default function Placeholder({ title, icon, description, colorClass, isSearch }: PlaceholderProps) {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const query = searchParams.get("q");
  
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      {/* Rivo Branding Header */}
      <header className="p-4 sm:p-6 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter select-none flex">
            <span className="text-[#4285F4]">R</span>
            <span className="text-[#EA4335]">I</span>
            <span className="text-[#FBBC05]">V</span>
            <span className="text-[#34A853]">O</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">
              {title}
            </span>
          </div>
        </div>
      </header>

      <div className="flex-1 p-4 sm:p-8">
        <div className="max-w-5xl mx-auto w-full">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 w-fit group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`w-20 h-20 rounded-2xl ${colorClass} flex items-center justify-center mb-6 shadow-xl shadow-black/5`}>
              {icon}
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">{title}</h1>
            <p className="text-muted-foreground mb-8">
              {description}
            </p>

            {isSearch && query ? (
              <div className="w-full flex-1 flex flex-col gap-4">
                <div className="bg-muted/30 p-4 rounded-xl border border-border flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">Showing results for:</span>
                  <span className="text-lg font-bold text-primary italic">"{query}"</span>
                </div>
                <iframe 
                  src={`https://www.bing.com/search?q=${encodeURIComponent(query)}&embedded=true`}
                  className="w-full flex-1 rounded-2xl border border-border shadow-inner bg-white min-h-[600px]"
                  title="Search Results"
                />
              </div>
            ) : (
              <div className="p-12 rounded-2xl border border-border bg-muted/10 max-w-2xl w-full text-center">
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  Current Path: <span className="text-foreground">{location}</span>
                </p>
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-6">
                  <motion.div 
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "45%" }}
                    transition={{ delay: 0.2, duration: 1.5 }}
                  />
                </div>
                <p className="text-sm font-medium text-foreground">Welcome to the future of {title.replace('Rivo ', '')}</p>
                <p className="text-xs text-muted-foreground mt-2">Coming soon in Version 2.0</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
