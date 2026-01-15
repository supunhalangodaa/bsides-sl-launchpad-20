import { motion } from "framer-motion";
import sponsorsImage from "@/assets/sponsors-2025.jpg";
const Sponsors = () => {
  return <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono uppercase tracking-wider text-primary border border-primary/30 rounded-full">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            2025 <span className="text-primary">Sponsors</span>
          </h2>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex justify-center">
          <img src={sponsorsImage} alt="BSides Sri Lanka 2025 Sponsors" className="max-w-full h-auto" />
        </motion.div>

        {/* CTA for sponsors */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mt-12">
          <p className="text-muted-foreground font-mono text-sm mb-4">
            Interested in sponsoring BSides Sri Lanka 2027?
          </p>
          <a href="https://form.jotform.com/260142521593047" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-sm font-mono uppercase tracking-wider text-primary border border-primary/50 rounded hover:bg-primary/10 transition-all duration-300">
            Become a Sponsor →
          </a>
        </motion.div>
      </div>
    </section>;
};
export default Sponsors;