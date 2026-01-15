import { motion } from "framer-motion";
import { Users, Presentation, Shield, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "350+",
    label: "Attendees",
    description: "First ever BSides Sri Lanka",
  },
  {
    icon: Presentation,
    value: "20+",
    label: "Speakers",
    description: "Industry experts & researchers",
  },
  {
    icon: Shield,
    value: "15+",
    label: "Sessions",
    description: "Talks, workshops & panels",
  },
  {
    icon: Award,
    value: "1st",
    label: "Edition",
    description: "Making history in Sri Lanka",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-wider">
            // 2025_event_highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            By The Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A snapshot of what made BSides Sri Lanka an unforgettable experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-secondary/50 border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-mono text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-foreground font-medium mt-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
