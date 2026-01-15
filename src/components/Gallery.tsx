import { motion } from "framer-motion";
import { Camera } from "lucide-react";

import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import event3 from "@/assets/gallery/event-3.jpg";
import event4 from "@/assets/gallery/event-4.jpg";
import event5 from "@/assets/gallery/event-5.jpg";
import event6 from "@/assets/gallery/event-6.jpg";
import event7 from "@/assets/gallery/event-7.jpg";
import event8 from "@/assets/gallery/event-8.jpg";
import event9 from "@/assets/gallery/event-9.jpg";
import event10 from "@/assets/gallery/event-10.jpg";
import event11 from "@/assets/gallery/event-11.jpg";
import event12 from "@/assets/gallery/event-12.jpg";

const images = [
  { src: event1, alt: "Speaker presenting at BSides Sri Lanka 2025" },
  { src: event2, alt: "Penetration testing talk at BSides" },
  { src: event3, alt: "Speaker on stage at BSides" },
  { src: event4, alt: "Panel discussion at BSides Sri Lanka" },
  { src: event5, alt: "Technical presentation at BSides" },
  { src: event6, alt: "Sponsor booth at BSides event" },
  { src: event7, alt: "Audience at BSides Sri Lanka 2025" },
  { src: event8, alt: "Cybersecurity expert speaking at BSides" },
  { src: event9, alt: "Ethical hacker presentation at BSides" },
  { src: event10, alt: "Bug hunting workshop at BSides" },
  { src: event11, alt: "Hacking Village at BSides Sri Lanka" },
  { src: event12, alt: "Networking at BSides Sri Lanka 2025" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Snaps from 2025
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Relive the moments from BSides Sri Lanka 2025 — where the cybersecurity community came together.
          </p>
        </motion.div>

        {/* 2-row grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card shadow-lg cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
