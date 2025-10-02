import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "GPT-OSS-20B Research Publication",
      description: "Published comprehensive deployment analysis of OpenAI's Mixture-of-Experts model in arXiv.",
      details: "Led H100 GPU evaluation achieving 31.8% higher throughput, 25.8% lower energy consumption, and 31.7% less VRAM usage compared to dense baselines."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "2nd Place - QBI 2025 Hackathon",
      description: "Secured 2nd place at UCSF's QBI 2025 Hackathon for building DECODE, a transformer-based drug-protein binding prediction tool.",
      details: "Collaborated with UC Berkeley and UCSF researchers, achieved 80% test accuracy on BindingDB using Meta's ESM and Molecular Transformer."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "GPU Performance Expert",
      description: "Specialized in CUDA kernel optimization and GPU-accelerated deep learning pipelines.",
      details: "Optimized inference for Mistral foundational model using vLLM and PyTorch, achieving 35% improvement over native operations."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "4+ years experience building scalable web applications and microservices.",
      details: "Developed comprehensive platforms from scratch, implemented Redis-based caching reducing response times to 150ms average."
    }
  ];

  const education = [
    {
      degree: "M.S. Computer Science",
      school: "University of Wisconsin, Milwaukee",
      period: "Sep 2023 - May 2025",
      details: "Focus on GPU Computing, Machine Learning, and High-Performance Computing"
    },
    {
      degree: "B.Tech",
      school: "Feroze Gandhi Institute of Engineering & Technology",
      period: "July 2014 - May 2018",
      details: "Computer Science and Engineering"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer with expertise in GPU computing and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                I am a Software Engineer specializing in <strong>GPU Computing and ML Systems</strong>. Currently pursuing my Master's in Computer Science at 
                <strong> University of Wisconsin-Milwaukee</strong> and working as a CUDA Engineer optimizing inference systems for large-scale distributed ML workloads.
              </p>
              <p className="leading-relaxed">
                My research focuses on <strong>Distributed Machine Learning Systems</strong>, spanning Efficient Machine Learning, System Optimization, and Hardware Acceleration. 
                I am one of the pioneers who studied GPU optimization techniques for transformer-based models, achieving significant performance improvements in production ML workloads.
              </p>
              <p className="leading-relaxed">
                Recently, I have been working on <strong>massive model inference systems</strong> and <strong>GPU-accelerated deep learning pipelines</strong>. 
                I've published research on GPT-OSS-20B deployment analysis, achieving 31.8% higher decode throughput and 25.8% lower energy consumption on H100 GPUs.
              </p>
              <p className="leading-relaxed">
                Beyond GPU computing, I have strong experience in full-stack development, having built comprehensive platforms from scratch, 
                implemented microservices architectures, and optimized systems for high throughput and low latency in distributed environments.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-600" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6"
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h5>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              Key Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {achievement.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">35%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Performance Improvement</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">80%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Test Accuracy</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2nd</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Place</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
