import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Divakar Yadav"
                  className="w-full h-full object-cover object-center scale-110"
                  style={{ objectPosition: 'center 25%' }}
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't load
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextElementSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold" style={{ display: 'none' }}>
                  DY
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-600 dark:text-primary-400"
          >
            Divakar Yadav
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
          >
            Software Engineer - Inference Optimization
          </motion.h2>

          {/* Research Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                CUDA Optimization
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                ML Systems
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                GPU Computing
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Distributed Inference
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I am a Software Engineer specializing in <strong>GPU Computing and ML Systems</strong>. Currently pursuing my Master's at 
            <strong> University of Wisconsin-Milwaukee</strong> and working as a CUDA Engineer optimizing inference systems for 
            large-scale distributed ML workloads.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="btn-primary flex items-center gap-2 cursor-pointer"
            >
              View My Work
            </Link>
            <a
              href="/resume/DivakarYadav.pdf"
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            <a
              href="https://github.com/divakar-yadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 group"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </a>
            <a
              href="https://linkedin.com/in/divakar-yadv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 group"
            >
              <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </a>
            <a
              href="mailto:dkyadav@uwm.edu"
              className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200 group"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <button
              onClick={scrollToAbout}
              className="p-2 rounded-full bg-white/20 dark:bg-dark-800/20 backdrop-blur-sm border border-white/30 dark:border-dark-700/30 hover:bg-white/30 dark:hover:bg-dark-800/30 transition-all duration-200 animate-bounce"
            >
              <ChevronDown size={24} className="text-gray-700 dark:text-gray-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
