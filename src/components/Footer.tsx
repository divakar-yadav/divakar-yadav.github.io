import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/divakar-yadav",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/divakar-yadv",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      url: "mailto:dkyadav@uwm.edu",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-8">
              Divakar Yadav
            </h3>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white transition-all duration-200 group"
                aria-label={social.label}
              >
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </div>
              </a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-sm"
          >
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-200">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </a>
          </motion.div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 mb-8"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Divakar Yadav
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
