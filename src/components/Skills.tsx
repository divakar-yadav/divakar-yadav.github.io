import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, Cloud, Brain, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "GPU Computing & ML",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "CUDA", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "TensorRT", level: 85 },
        { name: "C++", level: 88 },
        { name: "Mixed Precision", level: 92 },
        { name: "Nsight Systems", level: 87 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 92 },
        { name: "Java", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Django", level: 88 },
        { name: "Microservices", level: 90 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Redis", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Cosmos DB", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Data Modeling", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Apache Kafka", level: 78 },
        { name: "Terraform", level: 75 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Deep Learning", level: 88 },
        { name: "Transformers", level: 85 },
        { name: "Computer Vision", level: 82 },
        { name: "NLP", level: 80 },
        { name: "Model Optimization", level: 90 },
        { name: "MLOps", level: 78 }
      ]
    }
  ];

  const additionalSkills = [
    "vLLM", "TensorRT", "Nsight Systems", "Nsight Compute", "cuBLAS", "NCCL", 
    "Mixed Precision", "Kernel Fusion", "Warp Primitives", "Memory Coalescing",
    "GPU Profiling", "CUDA Graphs", "Multi-GPU Inference", "Transformer Optimization",
    "Mixture-of-Experts", "Model Quantization", "Inference Acceleration"
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-primary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Additional Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">6+</div>
            <div className="text-gray-600 dark:text-gray-400">Years of Programming</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">25+</div>
            <div className="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">90%</div>
            <div className="text-gray-600 dark:text-gray-400">Average Proficiency</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
