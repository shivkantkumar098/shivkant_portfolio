'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const { isDeveloperMode } = usePortfolio();

  const projects = isDeveloperMode ? [
    // Developer Projects
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB',
      image: '/profile-placeholder.jpg', // Replace with project image
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.demo.com'
    },
    {
      title: 'Task Management App',
      description: 'A real-time task management application with collaborative features',
      image: '/profile-placeholder.jpg', // Replace with project image
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.demo.com'
    }
  ] : [
    // QA Projects
    {
      title: 'Test Automation Framework',
      description: 'A comprehensive test automation framework using Selenium and TestNG',
      image: '/profile-placeholder.jpg', // Replace with project image
      technologies: ['Selenium', 'TestNG', 'Java', 'Maven'],
      github: 'https://github.com/yourusername/qa-project1',
      live: null
    },
    {
      title: 'API Testing Suite',
      description: 'Automated API testing suite with detailed reporting',
      image: '/profile-placeholder.jpg', // Replace with project image
      technologies: ['Postman', 'Newman', 'JavaScript'],
      github: 'https://github.com/yourusername/qa-project2',
      live: null
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
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}