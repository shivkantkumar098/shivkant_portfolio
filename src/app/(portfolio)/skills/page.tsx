'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaUserFriends } from 'react-icons/fa';

export default function Skills() {
  const { isDeveloperMode } = usePortfolio();

  const technicalSkills = isDeveloperMode ? [
    // Developer Technical Skills
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React.js/Next.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 70 }
  ] : [
    // QA Technical Skills
    { name: 'Selenium', level: 90 },
    { name: 'Cypress', level: 85 },
    { name: 'JUnit/TestNG', level: 80 },
    { name: 'API Testing', level: 85 },
    { name: 'Performance Testing', level: 75 }
  ];

  const tools = isDeveloperMode ? [
    'VS Code',
    'Git',
    'Docker',
    'AWS',
    'MongoDB'
  ] : [
    'JIRA',
    'Postman',
    'Jenkins',
    'TestRail',
    'SoapUI'
  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Time Management',
    'Leadership'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Skills & Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaCode className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technical Skills
              </h2>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaTools className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Tools
              </h2>
            </div>
            <ul className="space-y-2">
              {tools.map((tool, index) => (
                <motion.li
                  key={tool}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 dark:text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center mb-4">
              <FaUserFriends className="text-2xl text-blue-600 dark:text-blue-400 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Soft Skills
              </h2>
            </div>
            <ul className="space-y-2">
              {softSkills.map((skill, index) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 dark:text-gray-300 flex items-center"
                >
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}