'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiReactrouter,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiApifox,
  SiTableau,
  SiPython,
  SiGooglecolab,
  SiSqlite,
  SiMysql,
  SiGithub,
} from 'react-icons/si';

export default function Projects() {
  const { isDeveloperMode } = usePortfolio();

  const projects = [
    {
      title: 'Study Notion',
      description: 'StudyNotion is a full-featured EdTech platform that enables users to create, consume, and rate educational content. It aims to make learning interactive and accessible for students, and provides a space for instructors to share expertise.',
      image: 'https://i.ibb.co/c3C6FvF/Screenshot-2023-11-17-17-25-59.png',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'React Router', 'Tailwind CSS'],
      github: 'https://github.com/golu098/StudyNotionMERN',
      live: 'https://study-notion-2.vercel.app'
    },
    {
      title: 'Shoppy Admin Dashboard',
      description: 'A React + Tailwind-based admin dashboard for managing orders, employees, customers, and analytics. Includes Kanban, calendars, charts, and profile management features.',
      image: 'https://i.ibb.co/86Y723s/image.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'React Router'],
      github: 'https://github.com/golu098/Shopy_Dashboard',
      live: 'https://shopy-dashboard.vercel.app'
    },
    {
      title: 'Sight Stream App',
      description: 'A real-time chat and video calling app with screen sharing and messaging features. Built with a focus on user-friendly design and smooth communication.',
      image: 'https://i.ibb.co/wWxfFfg/Screenshot-2024-01-28-00-57-44.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'React Router', 'Apifox'],
      github: 'https://github.com/shivkant098/sightstream',
      live: 'https://sightstream.vercel.app'
    },
    {
      title: 'Human Resource Dashboard',
      description: 'A Tableau and Python-powered HR analytics dashboard visualizing workforce demographics, income, and satisfaction data for data-driven HR insights.',
      image: 'https://github.com/golu098/Modern-HR-Dashboard/assets/95178381/0c4cebdd-ec2d-4ddb-a731-1dae8eed5588',
      technologies: ['Tableau', 'Excel', 'MySQL', 'Python', 'Azure Data Explorer', 'Google Colab'],
      github: 'https://github.com/golu098/Modern-HR-Dashboard',
      live: 'https://github.com/golu098/Modern-HR-Dashboard'
    },
    {
      title: 'FinTech Dashboard',
      description: 'Interactive Tableau dashboard for financial insights — combines key metrics with real-time updates and visual analytics for data-driven decision-making.',
      image: 'https://i.ibb.co/74rBs6M/Dashboard-1-1.png',
      technologies: ['Tableau', 'Excel', 'SQLite', 'Python', 'Azure Data Explorer', 'Google Colab'],
      github: 'https://github.com/golu098/FinTech-Dashboard',
      live: 'https://github.com/golu098/FinTech-Dashboard'
    },
    {
      title: 'GrabbGrove',
      description: 'E-commerce site for men’s, women’s, and kids’ clothing with cart management and newsletter subscription. Includes a secure checkout process.',
      image: 'https://i.ibb.co/Ry5KCY5/image.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React', 'React Router', 'Apifox'],
      github: 'https://github.com/golu098/grabbGrove',
      live: 'https://assignment-two-chi.vercel.app'
    },
    {
      title: 'Modern Weather App',
      description: 'Weather app using open API integration showing real-time humidity and 10-day forecasts with color-coded visualizations.',
      image: 'https://i.ibb.co/0KCTSNK/Screenshot-2023-11-17-17-35-54.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/golu098/Modern_weather_app',
      live: 'https://modern-weather-app.vercel.app'
    },
    {
      title: 'Vidyarthi Khata',
      description: 'A personal finance tracker web app that helps users record and analyze their expenses in real-time.',
      image: 'https://i.ibb.co/fF8pMXn/Screenshot-2024-01-10-21-58-43.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/golu098/vidyarthi-khata',
      live: 'https://vidyarthi-khata.vercel.app'
    },
    {
      title: 'Organic Store',
      description: 'A modern e-commerce site for organic products like fruits, vegetables, and crafts. Includes authentication, shopping cart, and categorized browsing.',
      image: 'https://i.ibb.co/3CGCfSK/Screenshot-2024-01-10-21-45-27.png',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'React Router', 'HTML', 'CSS'],
      github: 'https://github.com/golu098/test-1',
      live: 'https://organicstore-two.vercel.app'
    },
    {
      title: 'PulsePlus Clone',
      description: 'E-commerce platform for healthcare products, doctor consultations, and diagnostic test bookings — all in one online healthcare hub.',
      image: 'https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
      github: 'https://github.com/golu098/pulseplus',
      live: 'https://pulseplus.vercel.app'
    }
  ];

  const techIcons: Record<string, React.ElementType | undefined> = {
    HTML: SiHtml5,
    'Tailwind CSS': SiTailwindcss,
    Express: SiExpress,
    'React Router': SiReactrouter,
    MongoDB: SiMongodb,
    'Node.js': SiNodedotjs,
    React: SiReact,
    Apifox: SiApifox,
    Tableau: SiTableau,
    Excel: SiGithub,
    Python: SiPython,
    'Azure Data Explorer': SiGooglecolab,
    'Google Colab': SiGooglecolab,
    SQLite: SiSqlite,
    MySQL: SiMysql,
    GitHub: SiGithub,
  };

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
              <div className="relative h-80">
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
                  {project.technologies.map((tech) => {
                    const Icon = techIcons[tech] || SiGithub; // Fallback to GitHub icon if no match
                    return (
                      <div
                        key={tech}
                        className="relative group flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        <Icon className="text-white w-6 h-6" />
                        <span
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100"
                        >
                          {tech}
                        </span>
                      </div>
                    );
                  })}
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