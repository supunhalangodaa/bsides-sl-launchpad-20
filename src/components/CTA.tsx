import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary">
              Limited Spots Available
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-gradient">Join the Movement</span>?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Be part of Sri Lanka's premier cybersecurity community event. 
            Network, learn, and grow with fellow security enthusiasts.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group">
              Get Your Ticket
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="terminal" size="xl">
              Become a Sponsor
            </Button>
          </motion.div>

          {/* Terminal decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-4 bg-card border border-border rounded-lg max-w-md mx-auto text-left font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
            </div>
            <div className="text-muted-foreground">
              <span className="text-accent">$</span> curl bsides.lk/register
              <br />
              <span className="text-primary">{">"}</span> Initializing registration...
              <br />
              <span className="text-primary">{">"}</span> Welcome to <span className="text-foreground">BSides SL 2025</span>
              <span className="animate-pulse">▋</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
