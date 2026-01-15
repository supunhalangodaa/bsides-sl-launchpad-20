import { Linkedin } from "lucide-react";
import bsidesLogo from "@/assets/bsides-logo.png";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/bsidessrilanka", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img
              src={bsidesLogo}
              alt="BSides Sri Lanka"
              className="w-24 h-auto"
            />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 bg-secondary rounded-lg hover:bg-primary/20 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-accent">&gt;</span> © 2025 BSides Sri Lanka
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">#</span> Made with ❤️ by the Sri Lankan security community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
