import { motion } from "framer-motion";
import { Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              The Team Behind This Event
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the dedicated volunteers who made BSides Sri Lanka 2025 possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img
              src={teamPhoto}
              alt="BSides Sri Lanka 2025 Organizing Team"
              className="w-full h-auto"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-6 text-sm"
          >
            BSides Sri Lanka 2025 Organizing Committee
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
