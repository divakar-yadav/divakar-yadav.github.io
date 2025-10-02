import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "dkyadav@uwm.edu",
      link: "mailto:dkyadav@uwm.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (312) 678-9371",
      link: "tel:+13126789371"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, California",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/divakar-yadav",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/divakar-yadv",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {info.title}
                    </h4>
                    <a
                      href={info.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 rounded-lg bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:shadow-lg transition-all duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
