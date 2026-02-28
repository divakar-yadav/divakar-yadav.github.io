import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "CUDA Engineer",
      company: "University of Wisconsin-Milwaukee",
      location: "Milwaukee, USA",
      period: "Jan 2024 - Present",
      description: "Developing and optimizing CUDA kernels for accelerating ML inference using custom memory hierarchies, warp-level primitives, and tensor core utilization on NVIDIA H100 GPUs.",
      achievements: [
        "Published GPT-OSS-20B deployment analysis in arXiv, achieving 31.8% higher decode throughput and 25.8% lower energy consumption on H100 GPU",
        "Leveraged Nsight Systems and Nsight Compute to analyze GPU occupancy, memory throughput, and instruction bottlenecks for performance tuning",
        "Integrated CUDA-optimized kernels into PyTorch inference flows and benchmarked performance using TensorRT for transformer-based workloads",
        "Tuned mixed-precision execution (FP16/BF16) using Tensor Cores and NVIDIA Apex to improve latency and throughput under high batch-load inference",
        "Implemented custom kernel fusion techniques to reduce memory overhead and kernel launch latency in real-time inference tasks",
        "Optimized inference for the Mistral foundational model using both vLLM and native PyTorch transformer paths, injecting custom CUDA kernels",
        "Applied CUDA Graph capture and kernel fusion techniques to reduce token generation latency across dynamic input shapes",
        "Performed warp-level scheduling and memory tuning for attention and MLP blocks to minimize inference overhead in long-context LLM scenarios"
      ],
      skills: ["CUDA", "C++", "PyTorch", "TensorRT", "Nsight Systems", "Nsight Compute", "cuBLAS", "NCCL", "Apex", "Mixed Precision", "Multi-GPU Inference", "Kernel Fusion"],
      type: "Research"
    },
    {
      title: "Software Engineer",
      company: "Capri Global Capital",
      location: "Gurgaon, India",
      period: "Sep 2022 - July 2023",
      description: "Implemented comprehensive loan distribution platform and optimized backend services for improved performance and reliability.",
      achievements: [
        "Implemented a Dead Letter queue-based Retry mechanism to reduce the failure rate of Bulk API Calls by 30%",
        "Implemented Redis-based cache mechanism in all backend services to reduce response time to an average of 150ms",
        "Developed a comprehensive Loan Distribution Platform from scratch, including manual CSS and integration with multiple APIs",
        "Managed end-to-end deployment of the platform",
        "Created a dynamic, client-side statement widget that transformed data into a PDF format"
      ],
      skills: ["Microservices", "AWS", "CI/CD", "Apache Kafka", "Python", "Django", "MySQL", "MongoDB", "Redis", "TDD", "Distributed Systems", "React", "Redux", "React Native", "TypeScript"],
      type: "Full-time"
    },
    {
      title: "Software Engineer",
      company: "Udaan",
      location: "Bangalore, India",
      period: "June 2021 - Sep 2022",
      description: "Enhanced e-commerce platform performance and user experience through innovative solutions and optimizations.",
      achievements: [
        "Boosted onboarding rate 24% by developing a portal for sellers to bulk-upload product listings via Excel sheets",
        "Addressed duplicate SKU creation issue by implementing Redis-based SKU lookup with TTL greater than Cosmos DB replication time",
        "Enhanced the official e-commerce catalog page, optimizing user experience and interface design",
        "Authored reusable unit tests using Jest and React Testing Library (RTL), achieving over 80% test coverage"
      ],
      skills: ["Microservices", "Cosmos DB", "Java", "DropWizard", "Kotlin", "Redis", "TDD", "Distributed Systems", "CI/CD", "Kubernetes", "Docker", "React", "Redux", "React Native", "TypeScript"],
      type: "Full-time"
    },
    {
      title: "Software Engineer",
      company: "PhonePe",
      location: "Bangalore, India",
      period: "Feb 2020 - June 2021",
      description: "Developed innovative tools and frameworks to enhance user experience and streamline business processes.",
      achievements: [
        "Created a tool for reordering gift cards based on user interest using drag and drop, which increased the gift card conversion rate by 10%",
        "Developed a dashboard builder framework utilizing a microfrontend concept to streamline dashboard creation",
        "Implemented comprehensive permission management system for user access control and common authorization mechanism"
      ],
      skills: ["Microservices", "Back-End API Development", "Cosmos DB", "Java", "DropWizard", "Kotlin", "Redis", "TDD", "Distributed Systems", "CI/CD", "Kubernetes", "Docker", "React", "Redux", "React Native", "TypeScript"],
      type: "Full-time"
    },
    {
      title: "Software Engineer",
      company: "Deepflux",
      location: "Noida, India",
      period: "April 2019 - Jan 2020",
      description: "Built monolithic backend services and developed sophisticated analytics dashboard with automated deployment processes.",
      achievements: [
        "Automated mail reports via cron jobs for anomaly detection in datasets using luminoil (a LinkedIn library)",
        "Built monolithic backend services from scratch",
        "Developed a sophisticated analytics dashboard using Highcharts.js and React, providing seamless API integration for real-time data visualization",
        "Automated front-end deployment processes, leading to enhanced efficiency and reduced deployment errors"
      ],
      skills: ["Microservices", "NodeJS", "Java", "ReactJS", "Distributed Systems", "Docker", "React", "Redux", "HTML", "CSS"],
      type: "Full-time"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software engineering and GPU computing
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left Column - Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.type === 'Research' 
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    }`}>
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column - Skills */}
                <div className="lg:w-80 flex-shrink-0">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Technologies & Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <div className="w-4 h-4 bg-primary-500 rounded-full"></div>
            <div className="w-32 h-1 bg-primary-500 rounded-full"></div>
            <div className="w-4 h-4 bg-primary-400 rounded-full"></div>
            <div className="w-32 h-1 bg-primary-500 rounded-full"></div>
            <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Continuous growth and learning journey
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
