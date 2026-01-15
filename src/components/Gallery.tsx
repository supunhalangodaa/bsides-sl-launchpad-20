import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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

        {/* Masonry-style grid with natural image sizes */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(image)}
              className="break-inside-avoid overflow-hidden rounded-xl border border-border bg-card shadow-lg cursor-pointer group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 p-2 rounded-full bg-background/80 text-foreground hover:bg-background transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg mx-auto"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
