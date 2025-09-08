import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Zap, Brain, Rocket } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: "GPT-OSS-20B: Deployment-Centric Analysis",
      description: "Comprehensive evaluation of OpenAI's open-weight Mixture-of-Experts model against dense baselines on H100 GPU.",
      longDescription: "Led a single-GPU (H100, bf16) evaluation of GPT-OSS-20B (20.9B total, 3.61B active parameters) against Qwen3-32B and Yi-34B. Achieved 31.8% higher decode throughput and 25.8% lower energy consumption while using 31.7% less peak VRAM. Published in arXiv with code release for replication.",
      category: "research",
      technologies: ["CUDA", "PyTorch", "H100 GPU", "Mixture-of-Experts", "Performance Analysis", "Energy Optimization", "VRAM Optimization"],
      github: "https://github.com/divakar-yadav/gpt-oss-20b-analysis",
      demo: "https://arxiv.org/abs/2508.16700",
      image: "/api/placeholder/400/250",
      icon: <Brain className="w-8 h-8" />,
      achievements: ["31.8% higher throughput", "25.8% lower energy", "31.7% less VRAM", "arXiv publication"]
    },
    {
      title: "DECODE - Drug-Protein Binding Prediction",
      description: "A transformer-based tool for predicting drug-protein binding efficacy, achieving 80% test accuracy on BindingDB.",
      longDescription: "Collaborated with researchers from UC Berkeley and UCSF to build DECODE, utilizing Meta's ESM and a Molecular Transformer. Developed a GUI for large-scale drug repurposing and secured 2nd place at the QBI 2025 Hackathon at UCSF.",
      category: "research",
      technologies: ["Python", "PyTorch", "Transformers", "ESM", "Molecular Transformer", "React", "GUI"],
      github: "https://github.com/divakar-yadav/decode",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Brain className="w-8 h-8" />,
      achievements: ["80% test accuracy", "2nd place hackathon", "Large-scale drug repurposing"]
    },
    {
      title: "GPU Performance Optimization",
      description: "Designed and benchmarked custom CUDA kernels to enhance deep learning pipeline performance.",
      longDescription: "Applied warp-level parallelism to minimize idle threads and maximize SM utilization. Implemented mixed-precision execution (FP16/BF16) to accelerate inference and reduce memory footprint. Optimized memory access with coalescing to reduce global memory latency.",
      category: "gpu",
      technologies: ["CUDA", "C++", "PyTorch", "Mixed Precision", "Memory Optimization", "Benchmarking"],
      github: "https://github.com/divakar-yadav/gpu-optimization",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Cpu className="w-8 h-8" />,
      achievements: ["35% performance improvement", "Memory footprint reduction", "Warp-level optimization"]
    },
    {
      title: "ResNet Acceleration on CIFAR-10",
      description: "Developed a CUDA-optimized image classification pipeline using warp primitives and memory coalescing.",
      longDescription: "Replaced PyTorch convolution, ReLU, and SoftMax layers with custom CUDA kernels for fine-grained GPU control. Benchmarked training and inference performance against a standard PyTorch baseline, achieving significant speedups.",
      category: "gpu",
      technologies: ["CUDA", "C++", "PyTorch", "ResNet", "CIFAR-10", "Image Classification"],
      github: "https://github.com/divakar-yadav/resnet-acceleration",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Zap className="w-8 h-8" />,
      achievements: ["Custom CUDA kernels", "Fine-grained GPU control", "Performance benchmarking"]
    },
    {
      title: "Custom CUDA Kernels for Softmax and Matrix Ops",
      description: "Implemented SoftMax and matrix multiplication kernels using warp-level primitives and coalesced memory.",
      longDescription: "Measured GPU occupancy and throughput using Nsight Compute, achieving a 35% improvement over PyTorch native operations. Reduced kernel launch latency and improved arithmetic intensity in classification layers.",
      category: "gpu",
      technologies: ["CUDA", "C++", "Nsight Compute", "Warp Primitives", "Matrix Operations", "SoftMax"],
      github: "https://github.com/divakar-yadav/cuda-kernels",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Rocket className="w-8 h-8" />,
      achievements: ["35% improvement", "Reduced latency", "Improved arithmetic intensity"]
    },
    {
      title: "TensorRT Inference Optimization with FP16",
      description: "Converted ResNet18/34 models to TensorRT and applied FP16 mixed-precision optimization via Tensor Cores.",
      longDescription: "Reduced batch inference latency by 43% using kernel fusion and optimized memory transfers. Validated model accuracy stayed within 1% of original post-quantization.",
      category: "gpu",
      technologies: ["TensorRT", "FP16", "ResNet", "Kernel Fusion", "Memory Optimization", "Quantization"],
      github: "https://github.com/divakar-yadav/tensorrt-optimization",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Cpu className="w-8 h-8" />,
      achievements: ["43% latency reduction", "1% accuracy preservation", "Kernel fusion optimization"]
    },
    {
      title: "Loan Distribution Platform",
      description: "Developed a comprehensive loan distribution platform from scratch with Redis-based caching and Dead Letter Queue.",
      longDescription: "Implemented a Dead Letter queue-based Retry mechanism to reduce the failure rate of Bulk API Calls by 30%. Implemented Redis-based cache mechanism in all backend services to reduce response time to an average of 150ms.",
      category: "web",
      technologies: ["Python", "Django", "Redis", "AWS", "Microservices", "React", "TypeScript"],
      github: "https://github.com/divakar-yadav/loan-platform",
      demo: "#",
      image: "/api/placeholder/400/250",
      icon: <Rocket className="w-8 h-8" />,
      achievements: ["30% failure rate reduction", "150ms average response time", "End-to-end platform"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'research', name: 'Research' },
    { id: 'gpu', name: 'GPU Computing' },
    { id: 'web', name: 'Web Development' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my research work, GPU optimizations, and software development projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20 flex items-center justify-center">
                <div className="text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/divakar-yadav"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
