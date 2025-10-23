'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { degrees, motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const { isDeveloperMode } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const education = [
    {
      level: 'College',
      institution: 'Chandigarh University',
      degree: 'Bachelor of Engineering in Computer Science',
      year: '2021-2024',
      image: 'https://imgs.search.brave.com/mNrjv0k7j2EI12ipvlxNbsvTqK08xnMJ9ZmGkxRq9iA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvY29s/bGVnZV9kYXRhL2lt/YWdlcy9jYW1wdXNp/bWFnZS8xNDgyMTQw/MTcwYWlyMTkuanBn', // Add your college image to public folder
      website: 'https://www.cuchd.in/'
    },
    {
      level: 'Secondary',
      institution: 'Government Polytechnic Patna-07',
      degree: 'Diploma in Computer Science and Engineering',
      year: '2018-2021',
      image: 'https://imgs.search.brave.com/NZQhQ2lDtvl3dKfbNjwoVJ5p3fwJoJ1ZbYy9zkO_AFg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cGF0bmEvZTcvMDYx/MnB4NjEyLng2MTIu/MTgwMjI3MDYzODEw/LmY5ZTcvY2F0YWxv/Z3VlL2dvdmVybm1l/bnQtcG9seXRlY2hu/aWMtY29sbGVnZS03/LWd1bHphcmJhZ2gt/cGF0bmEtZ292ZXJu/bWVudC1jb2xsZWdl/cy14Y3NqOHozc3Jy/LTI1MC5qcGc_dz02/NDAmcT03NQ', // Add your school image to public folder
      website: 'https://www.gpp7.org.in/'
    },
    {
      level: 'Primary',
      institution: 'Shivam International School,Phulwaria',
      year: '2017-2018',
      image: 'https://imgs.search.brave.com/3DqJcKMZxJRk10xdyBafAIqKWARn0arG3PukVibkSHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly95YXlz/a29vbC1zY2hvb2wt/aW1hZ2VzLnMzLmFw/LXNvdXRoLTEuYW1h/em9uYXdzLmNvbS80/NjYzMzM4U2NyZWVu/c2hvdCUyMCgxMDIp/LnBuZw', // Add your school image to public folder
      website: 'https://www.shivaminternationalschool.org/'
    }
  ];

  const experience = [
    {
      company: 'Revolute Tech',
      role: 'SDE-Frontend',
      period: 'Aug 2023 - Oct 2023',
      description: 'My primary responsibilities included translating UI/UX design wireframes into actual code, ensuring a seamless and visually appealing user experience.'
    },
    {
      company: 'TheTechBridge',
      role: 'React Developer',
      period: 'Jan 2023 - Jul 2023',
      description: ''
    },
    {
      company: 'Olcademy',
      role: 'Cyber Security Intern',
      period: 'Jul 2022 - Nov 2022',
      description: 'Spearheaded cybersecurity initiatives as an intern at Olcademy focusing on securing the payment infrastructure and entire website against hacking threats and malware attacks.'
    },
    {
      company: 'Olcademy',
      role: 'Project Manager Intern',
      period: 'Nov 2021 - Feb 2022',
      description: 'Orchestrated and effectively supervised a team specializing in Software Testing and Cyber Security during the internship tenure. Directed and optimized team performance, implementing strategies that significantly increased efficiency and productivity. Maintained consistent communication with the senior management team, providing regular project updates and swiftly addressing any concerns or hurdles that arose.'
    },
    {
      company: 'Sarp MindFire Pvt.Ltd',
      role: 'Web Developer Intern',
      period: 'Oct 2020 - Nov 2020',
      description: 'Spearheaded frontend development tasks as a Web Developer intern, contributing to the creation of user-centric interfaces. Demonstrated proficiency in handling two pivotal projects: the development of a Legal Advisory platform and a School Website, ensuring a seamless user experience. Conducted rigorous testing protocols to validate website functionalities, guaranteeing optimal performance and user-friendliness.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>
        
        {/* Education Section - Full Screen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.level}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex flex-row items-center gap-6"
              >
                <div className="w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden border-2 border-blue-500">
                  <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.level}</h3>
                  <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    {edu.institution}
                  </a>
                  {edu.degree && <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>}
                  <p className="text-gray-500 dark:text-gray-400">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section - Below Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h2>
          <div className="relative pl-8 ml-4 border-l-4 border-blue-500">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role + exp.period}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-10 relative"
              >
                {/* Interactive Timeline dot */}
                <button
                  type="button"
                  aria-label="Expand experience details"
                  className={`absolute -left-5 top-2 w-6 h-6 flex items-center justify-center rounded-full border-4 z-10 transition-all duration-300 ${activeIndex === index ? 'bg-blue-700 border-blue-300 scale-110' : 'bg-blue-500 border-white dark:border-gray-800'}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className={`block w-2 h-2 rounded-full ${activeIndex === index ? 'bg-white' : 'bg-blue-200'}`}></span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    scale: activeIndex === index ? 1.05 : 1,
                    x: activeIndex === index ? (index % 2 === 0 ? 20 : -20) : 0
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    x: index % 2 === 0 ? 20 : -20,
                    transition: { duration: 0.3 }
                  }}
                  className={`overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor: index === 0 ? '#7ab800' : 
                               index === 1 ? '#0085c3' : 
                               index === 2 ? '#f2af00' : 
                               index === 3 ? '#ce1126' : '#6e2585'
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold" style={{
                      color: index === 0 ? '#7ab800' : 
                             index === 1 ? '#0085c3' : 
                             index === 2 ? '#f2af00' : 
                             index === 3 ? '#ce1126' : '#6e2585'
                    }}>{exp.role}</h3>
                    <span className="text-sm px-3 py-1 rounded" style={{
                      backgroundColor: index === 0 ? '#7ab800' : 
                                     index === 1 ? '#0085c3' : 
                                     index === 2 ? '#f2af00' : 
                                     index === 3 ? '#ce1126' : '#6e2585',
                      color: 'white'
                    }}>{exp.period}</span>
                  </div>
                  <p className="font-semibold mb-2" style={{
                    color: index === 0 ? '#7ab800' : 
                           index === 1 ? '#0085c3' : 
                           index === 2 ? '#f2af00' : 
                           index === 3 ? '#ce1126' : '#6e2585'
                  }}>{exp.company}</p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0.7,
                      y: activeIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}