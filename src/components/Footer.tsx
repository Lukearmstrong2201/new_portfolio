import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Github, Linkedin, Mail} from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/lukearmstrong2201",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/lukearmstrong2201",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    url: "mailto:lukearmstrong2201@hotmail.com",
    label: "Email"
  }
];

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Languages', href: '#languages' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold text-gradient hover:scale-105 transition-transform mb-4"
            >
              Luke Armstrong
            </button>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Full Stack Web Developer passionate about creating innovative solutions 
              with modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(social.url, '_blank')}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Barnsley, United Kingdom</p>
              <p>lukearmstrong2201@hotmail.com</p>
              <p>+(44)7572421716</p>
            </div>
            <Button
              className="mt-4 btn-hero"
              onClick={() => scrollToSection('#contact')}
            >
              Start a Project
            </Button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Luke Armstrong. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with  using React/Vite & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  );
}