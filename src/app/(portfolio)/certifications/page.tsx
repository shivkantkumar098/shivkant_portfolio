'use client';

import { useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Certifications() {
  const { isDeveloperMode } = usePortfolio();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = isDeveloperMode
    ? [
        // 🧑‍💻 Developer Certifications
       
        {
          title: 'Learning Java Collections',
          issuer: 'LinkedIn Learning',
          date: 'Aug 2024',
          image: '/Learning Java Collections.jpg',
          link: '#',
        },
        {
          title: 'CSS and JavaScript',
          issuer: 'Udemy',
          date: 'Mar 2024',
          image: '/css and javascript udemy.jpg',
          link: '#',
        },
       
        {
          title: 'HTML Workshop of 8 Weeks',
          issuer: 'Geeksforgeeks',
          date: 'Feb 2022',
          image: '/GFGHTML.png',
          link: '#',
        },

        {
          title: 'Fundamental of HTML',
          issuer: 'Coding Ninjas',
          date: 'Jun 2022',
          image: '/Fundamental of html.png',
          link: '#',
        },
        {
          title: 'Basic of JavaScript',
          issuer: 'Coding Ninjas',
          date: 'Jun 2022',
          image: '/Basics of Javascript.png',
          link: '#',
        },
        {
          title:
            'Introduction to Web Development with HTML, CSS, JavaScript',
          issuer: 'Coursera',
          date: 'Feb 2022',
          image: '/HTMLCSSJSCoursera.png',
          link: '#',
        },
        {
          title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
          issuer: 'Coursera',
          date: 'Jan 2022',
          image: '/bootstrap.png',
          link: '#',
        },
       
        {
          title: 'Machine Learning',
          issuer: 'Effervescence, IIIT Allahabad',
          date: 'Aug 2022',
          image: '/Machine Learning.jpg',
          link: '#',
        },
        
      
        {
          title: 'Introduction to Cybersecurity Tools & Cyber Attacks',
          issuer: 'Coursera',
          date: 'Jan 2022',
          image: '/Introduction to Cybersecurity Tools & Cyber Attacks.png',
          link: 'https://www.credly.com/badges/f207872b-94a8-4906-b9c7-19a9adbdbea4/public_url',
        },
        {
          title: 'Exploitation Cyber Security',
          issuer: 'Udemy',
          date: 'Mar 2024',
          image: '/cyber Security.jpg',
          link: '#',
        },
        
        {
          title: 'C++ COURSE',
          issuer: 'Sololearn',
          date: 'Jun 2020',
          image: '/c++.png',
          link: '#',
        },
        {
          title: 'JAVA COURSE',
          issuer: 'Sololearn',
          date: 'Jun 2020',
          image: '/java-solorlearn.png',
          link: '#',
        },
        {
          title: 'HTML COURSE',
          issuer: 'Sololearn',
          date: 'May 2020',
          image: '/html-solorlearn.png',
          link: '#',
        },
      ]
    : [
        // 🧪 QA Certifications
        {
          title: 'Python Automation and Testing',
          issuer:
            'National Association of State Boards of Accountancy (NASBA)',
          date: 'Feb 2025',
          image: '/Python Automation and Testing.jpg',
          
        },
        {
          title: 'Java: Automated API Testing with REST Assured',
          issuer: 'LinkedIn Learning',
          date: 'Sep 2024',
          image: '/Java Automated API Testing with REST Assured.jpg',
          
        },
        {
          title: 'Java Design Patterns: Creational',
          issuer: 'LinkedIn Learning',
          date: 'Aug 2024',
          image: '/Java Design Patterns Creational.jpg',
          link: '#',
        },
        {
          title: 'Java: Testing with JUnit',
          issuer: 'LinkedIn Learning',
          date: 'Aug 2024',
          image: '/java Junit.jpg',
          link: '#',
        },
         {
          title: 'Learning Java Collections',
          issuer: 'LinkedIn Learning',
          date: 'Aug 2024',
          image: '/Learning Java Collections.jpg',
          link: '#',
        },
        {
          title: 'Learning TestNG',
          issuer: 'LinkedIn Learning',
          date: 'Aug 2024',
          image: '/Learning TestNG.jpg',
          link: '#',
        },
        {
          title: 'Software Testing',
          issuer: 'NPTEL',
          date: 'Jul 2022',
          image: '/nptel.jpg',
          link: '#',
        },
        {
          title: 'Data Mining',
          issuer: 'NPTEL',
          date: 'Jan 2023',
          image: '/nptel.jpg',
          link: '#',
        },
        {
          title: 'HackerRank Certificate of JAVA Basic',
          issuer: 'HackerRank',
          date: 'Dec 2020',
          image: '/Hackerrank.png',
          link: '#',
        },
       
        {
          title: 'Student Coordinator',
          issuer: 'CodeChef CU Chapter',
          date: 'Sep 2021',
          image: '/codechef.png',
          link: '#',
        },
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

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div
                className="relative h-48"
                onClick={() => setSelectedImage(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover hover:opacity-90 transition"
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
                <button
                  onClick={() => setSelectedImage(cert.image)}
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🖼️ Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-[90%] md:w-[70%] lg:w-[60%] h-[80%]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Certificate Full View"
                fill
                className="object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
