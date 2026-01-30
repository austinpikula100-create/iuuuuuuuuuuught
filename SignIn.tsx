import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [, setLocation] = useLocation();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem("rivo_username", username.trim());
      setLocation("/");
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold tracking-tighter">
              <span className="text-[#4285F4]">R</span>
              <span className="text-[#EA4335]">I</span>
              <span className="text-[#FBBC05]">V</span>
              <span className="text-[#34A853]">O</span>
            </CardTitle>
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Sign In</h2>
              <CardDescription>Enter your username to access Rivo apps</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Input
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 text-lg rounded-xl"
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg rounded-xl font-bold bg-[#4285F4] hover:bg-[#3367D6] transition-colors">
                Continue to Rivo
              </Button>
              <Button 
                type="button" 
                variant="ghost" 
                className="w-full"
                onClick={() => setLocation("/")}
              >
                Back to Home
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
