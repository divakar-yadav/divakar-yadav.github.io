import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

const Publications: React.FC = () => {
  const publications = [
    {
      title: "GPT-OSS-20B: Comprehensive Deployment Analysis of OpenAI's Mixture-of-Experts Model",
      authors: "Divakar Yadav, et al.",
      venue: "arXiv preprint",
      year: "2024",
      description: "Comprehensive deployment analysis of OpenAI's Mixture-of-Experts model on H100 GPUs, achieving 31.8% higher decode throughput and 25.8% lower energy consumption.",
      link: "https://arxiv.org/abs/2508.16700",
      tags: ["GPU Computing", "ML Systems", "Inference Optimization"]
    },
    {
      title: "DECODE: Transformer-based Drug-Protein Binding Prediction",
      authors: "Divakar Yadav, et al.",
      venue: "QBI 2025 Hackathon (2nd Place)",
      year: "2025",
      description: "Built DECODE, a transformer-based drug-protein binding prediction tool achieving 80% test accuracy on BindingDB using Meta's ESM and Molecular Transformer.",
      link: "#",
      tags: ["Bioinformatics", "Transformers", "Drug Discovery"]
    }
  ];

  return (
    <section id="publications" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My research contributions in GPU computing, ML systems, and distributed inference
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {pub.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium">{pub.authors}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {pub.year}
                    </span>
                    <span className="font-medium text-primary-600 dark:text-primary-400">
                      {pub.venue}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={pub.link}
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Research Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My research surrounds <strong>Distributed Machine Learning Systems</strong>, which spans the areas of Efficient Machine Learning, 
              System Optimization, and Hardware Acceleration. I focus on GPU optimization techniques, transformer-based model deployment, 
              and building high-performance inference systems for production-scale ML workloads.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
