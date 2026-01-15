import { motion } from "framer-motion";
import { Code, Lock, Network, Cpu } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Security Research",
    description: "Deep dives into the latest vulnerabilities and defense strategies",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Connect with security professionals from across the region",
  },
  {
    icon: Code,
    title: "Hands-on Workshops",
    description: "Learn practical skills from industry practitioners",
  },
  {
    icon: Cpu,
    title: "CTF Challenges",
    description: "Test your skills in competitive hacking challenges",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm uppercase tracking-wider">
              // about_bsides
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Security by the Community,
              <br />
              <span className="text-gradient">For the Community</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                BSides Sri Lanka brings together security researchers, practitioners, 
                and enthusiasts in a community-driven conference that emphasizes 
                learning and sharing.
              </p>
              <p>
                Unlike traditional conferences, BSides events are organized by 
                volunteers and focus on creating an intimate environment for 
                meaningful discussions and knowledge exchange.
              </p>
              <p className="font-mono text-sm border-l-2 border-primary pl-4 text-foreground">
                "Every person with an idea, some skills, or just curiosity has 
                something to contribute."
              </p>
            </div>
          </motion.div>

          {/* Right content - feature grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-5 bg-card border border-border rounded-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <feature.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
