import { motion } from "framer-motion";

const sponsorTiers = [
  {
    tier: "Platinum Sponsor",
    sponsors: [
      { name: "OREL IT", color: "#00A0E3" }
    ]
  },
  {
    tier: "Gold Sponsors",
    sponsors: [
      { name: "Dialog Enterprise", color: "#E31E24" },
      { name: "TrustVault", color: "#1E3A5F" }
    ]
  },
  {
    tier: "Strategic Partner",
    sponsors: [
      { name: "Sysco Labs", color: "#FF6B00" }
    ]
  },
  {
    tier: "Silver Sponsor",
    sponsors: [
      { name: "eSec Forte", color: "#0066CC" }
    ]
  },
  {
    tier: "Cyber Warriors",
    sponsors: [
      { name: "HackerOne", color: "#494649" },
      { name: "The SecOps Group", color: "#00A0E3" },
      { name: "SquareX", color: "#000000" },
      { name: "The XSSRat", color: "#9B59B6" },
      { name: "PentesterLab", color: "#6B7280" }
    ]
  }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-mono uppercase tracking-wider text-primary border border-primary/30 rounded-full">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            2025 <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-mono text-sm">
            Thank you to our amazing sponsors who make BSides Sri Lanka possible
          </p>
        </motion.div>

        <div className="space-y-12">
          {sponsorTiers.map((tierData, tierIndex) => (
            <motion.div
              key={tierData.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tierIndex * 0.1 }}
              className="text-center"
            >
              <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
                {tierData.tier}
              </h3>
              <div className={`flex flex-wrap justify-center items-center gap-8 ${
                tierData.tier === "Platinum Sponsor" ? "gap-12" : ""
              }`}>
                {tierData.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: tierIndex * 0.1 + sponsorIndex * 0.05 }}
                    className={`
                      flex items-center justify-center p-6 rounded-lg
                      border border-border/50 bg-card/30 backdrop-blur-sm
                      hover:border-primary/50 hover:bg-card/50 transition-all duration-300
                      ${tierData.tier === "Platinum Sponsor" ? "min-w-[200px] md:min-w-[280px]" : ""}
                      ${tierData.tier === "Gold Sponsors" || tierData.tier === "Strategic Partner" ? "min-w-[160px] md:min-w-[220px]" : ""}
                      ${tierData.tier === "Silver Sponsor" ? "min-w-[140px] md:min-w-[200px]" : ""}
                      ${tierData.tier === "Cyber Warriors" ? "min-w-[120px] md:min-w-[160px]" : ""}
                    `}
                  >
                    <span 
                      className={`font-bold tracking-wide ${
                        tierData.tier === "Platinum Sponsor" 
                          ? "text-2xl md:text-3xl" 
                          : tierData.tier === "Gold Sponsors" || tierData.tier === "Strategic Partner"
                          ? "text-xl md:text-2xl"
                          : tierData.tier === "Silver Sponsor"
                          ? "text-lg md:text-xl"
                          : "text-base md:text-lg"
                      }`}
                      style={{ color: sponsor.color }}
                    >
                      {sponsor.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA for sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground font-mono text-sm mb-4">
            Interested in sponsoring BSides Sri Lanka 2026?
          </p>
          <a
            href="https://form.jotform.com/260142521593047"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-sm font-mono uppercase tracking-wider text-primary border border-primary/50 rounded hover:bg-primary/10 transition-all duration-300"
          >
            Become a Sponsor →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
