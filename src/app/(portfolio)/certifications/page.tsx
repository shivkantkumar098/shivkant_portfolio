'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Certifications() {
  const { isDeveloperMode } = usePortfolio();

  const certifications = isDeveloperMode ? [
    // Developer Certifications
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2025',
      image: '/profile-placeholder.jpg', // Replace with actual certificate image
      link: '#'
    },
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2024',
      image: '/profile-placeholder.jpg', // Replace with actual certificate image
      link: '#'
    }
  ] : [
    // QA Certifications
    {
      title: 'ISTQB Advanced Level Test Automation Engineer',
      issuer: 'ISTQB',
      date: '2025',
      image: '/profile-placeholder.jpg', // Replace with actual certificate image
      link: '#'
    },
    {
      title: 'Selenium Certification',
      issuer: 'Selenium HQ',
      date: '2024',
      image: '/profile-placeholder.jpg', // Replace with actual certificate image
      link: '#'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Certifications & Achievements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {cert.date}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}