import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Terminal, Calendar, MapPin } from "lucide-react";
import bsidesLogo from "@/assets/bsides-logo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div initial={{
        opacity: 0,
        x: -100
      }} animate={{
        opacity: 0.1,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.5
      }} className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-primary to-transparent" />
        <motion.div initial={{
        opacity: 0,
        x: 100
      }} animate={{
        opacity: 0.1,
        x: 0
      }} transition={{
        duration: 1,
        delay: 0.7
      }} className="absolute top-2/3 right-0 w-1/3 h-px bg-gradient-to-l from-accent to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="flex flex-col items-center text-center">
          {/* Terminal prefix */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="flex items-center gap-2 text-muted-foreground font-mono text-sm mb-8">
            <Terminal className="w-4 h-4 text-accent" />
            <span>root@bsides-lk:~$</span>
            <span className="text-foreground terminal-cursor">./init_conference</span>
          </motion.div>

          {/* Logo */}
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="mb-8 animate-float">
            <img src={bsidesLogo} alt="BSides Sri Lanka 2025" className="w-64 md:w-80 h-auto" />
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="text-xl md:text-2xl text-muted-foreground font-light mb-6 max-w-2xl">
             Sri Lanka's 1st Ever Cybersecurity Community Conference
          </motion.p>

          {/* Event details */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8
        }} className="flex flex-wrap items-center justify-center gap-6 mb-10 text-sm font-mono">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary" />
              <span>2025</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Colombo, Sri Lanka</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 1
        }} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="https://form.jotform.com/260142521593047" target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="terminal" size="xl" asChild>
              <a href="#press">
                Learn More
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <motion.div className="w-1.5 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;