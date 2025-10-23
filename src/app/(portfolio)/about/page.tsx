'use client';

import { usePortfolio } from '@/context/PortfolioContext';
import { degrees, motion } from 'framer-motion';
import { useState } from 'react';

export default function About() {
  const { isDeveloperMode } = usePortfolio();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [certificateModal, setCertificateModal] = useState<{ open: boolean; img?: string; company?: string }>(
    { open: false }
  );

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

  // Helper function to convert date string to timestamp
  const getTimestamp = (dateStr: string) => {
    const [start] = dateStr.split(' - ');
    const [month, year] = start.split(' ');
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    return new Date(parseInt(year), months[month as keyof typeof months]).getTime();
  };

  interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    logo?: string;
  }

  interface Experience {
    company: string;
    role: string;
    period: string;
    description: string;
    logo?: string;
    location?: string;
    certificateImg?: string;
  }

  const experience: Experience[] = [
    {
      company: 'EPAM Systems',
      role: 'Junior Software Test Automation Engineer',
      period: 'Jul 2024 - Present · 1 yr 4 mos',
      description: 'Location: Hyderabad, Telangana, India · On-site',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHBM1NmkFO9_g/company-logo_100_100/company-logo_100_100/0/1736349454702/epam_systems_logo?e=1762992000&v=beta&t=3ufYvQZQsFiatFwvzpwZfdUshR8Pdvb5VJ8bPRY2VxI',
      location: 'Hyderabad, Telangana, India · On-site',
      // certificateImg: '/profile-placeholder.jpg'
    },
    {
      company: 'Revolute Tech',
      role: 'SDE-Frontend',
      period: 'Aug 2023 - Oct 2023 · 3 mos',
      description: `• My primary responsibilities included translating UI/UX design wireframes into actual code, ensuring a seamless and visually appealing user experience.\n\n• I utilized HTML, CSS, and JavaScript, along with frameworks such as React.js, to build dynamic and responsive web pages. This role required a keen eye for detail and a strong understanding of modern web development practices.\n\n• I also contributed to the optimization of web applications for maximum speed and scalability, which included code refactoring and improving loading times.`,
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQHfLEfTjN7z_w/company-logo_100_100/company-logo_100_100/0/1644247440251?e=1762992000&v=beta&t=8sHIHnUO-9s_L3oR0v2ALMILh0Ac1xdD1608Cw_cNAo',
      location: 'Remote',
      certificateImg: 'https://media.licdn.com/dms/image/v2/D562DAQEUGV6CAtS1RA/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1716115641874?e=1761811200&v=beta&t=H5zNpQUiN6B7XZpI9n5mZntL31wqUHWQ1iZhZwGBo-o'
    },
    {
      company: 'theTechBridge',
      role: 'React Developer',
      period: 'Jan 2023 - Jul 2023 · 7 mos',
      description: `• During my internship, I worked on the project 'Version 2 for Educase,' where I played a crucial role in developing the web panel using REACTJS. I was responsible for creating and implementing a Custom Hook and managed to single-handedly complete the project.\n\n• My focus on optimizing the application's performance ensured a seamless and efficient user experience. This involved ensuring that the web panel functioned smoothly across various devices and screen sizes.\n\n• I was actively involved in client communication, handling requirement analysis and design collaboration. This role required me to effectively translate client needs into technical specifications and design solutions.`,
      // logo: 'https://media.licdn.com/dms/image/D560BAQG5AYktgn-FPA/company-logo_100_100/0/1695661056731/thetechbridge_logo?e=1706140800&v=beta&t=sK07OKxnjpMepg9JgURr8jDTOQytl5K9AkBMpO7AA0k',
      location: 'Remote',
      certificateImg: 'https://media.licdn.com/dms/image/v2/D562DAQGzZgk9ADzrHQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1716102384912?e=1761811200&v=beta&t=Xnz6E9fFW1eZOalFnG8VxYsvNPQVHNZIG_YmFMRUR-k'
    },
    {
      company: 'Olcademy',
      role: 'Cyber Security Intern',
      period: 'Jul 2022 - Nov 2022 · 5 mos',
      description: `• Spearheaded cybersecurity initiatives as an intern at Olcademy, focusing on securing the payment infrastructure and entire website against hacking threats and malware attacks.\n\n• Implemented rigorous security measures, conducted frequent vulnerability assessments, and developed proactive strategies to fortify the digital ecosystem.\n\n• Leveraged dual expertise as a web developer to seamlessly integrate robust security protocols into the website's architecture, ensuring a comprehensive and resilient online presence for the company.`,
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQFnDqzR-2gxPQ/company-logo_100_100/company-logo_100_100/0/1631415706251/the_olcademy_logo?e=1762992000&v=beta&t=xydGXNlQ5Z59kOMSgZG861SCJpzcpbNzd-ZKb51zr2Y',
      location: 'Remote',
      certificateImg: 'https://media.licdn.com/dms/image/v2/D562DAQHzjticHtnPMg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707038309474?e=1761811200&v=beta&t=WPJVgV7ofaivlhjt_SDzenIXFNX3s1Z9YC9OuNiBbOE'
    },
    {
      company: 'Olcademy',
      role: 'Project Management Intern',
      period: 'Nov 2021 - Feb 2022 · 4 mos',
      description: `• Orchestrated and effectively supervised a team specializing in Software Testing and Cyber Security during the internship tenure.\n\n• Directed and optimized team performance, implementing strategies that significantly increased efficiency and productivity.\n\n• Maintained consistent communication with the senior management team, providing regular project updates and swiftly addressing any concerns or hurdles that arose.`,
      logo: 'https://media.licdn.com/dms/image/v2/C510BAQFnDqzR-2gxPQ/company-logo_100_100/company-logo_100_100/0/1631415706251/the_olcademy_logo?e=1762992000&v=beta&t=xydGXNlQ5Z59kOMSgZG861SCJpzcpbNzd-ZKb51zr2Y',
      location: 'Remote',
      certificateImg: 'https://media.licdn.com/dms/image/v2/D562DAQGH-W-9VfIv0g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707036323568?e=1761811200&v=beta&t=FCk1RvDQo4XbtfYUqqGN4iuBIQu11f4DjLogAufGlsc'
    },
    {
      company: 'SARP MindFire',
      role: 'Web Development Intern',
      period: 'Oct 2020 - Nov 2020 · 2 mos',
      description: `• Spearheaded frontend development tasks as a Web Developer intern, contributing to the creation of user-centric interfaces.\n\n• Demonstrated proficiency in handling two pivotal projects: the development of a Legal Advisory platform and a School Website, ensuring a seamless user experience.\n\n• Conducted rigorous testing protocols to validate website functionalities, guaranteeing optimal performance and user-friendliness.`,
      logo:'https://media.licdn.com/dms/image/v2/C4D0BAQG_JO93FOF1Zw/company-logo_100_100/company-logo_100_100/0/1630520134335/sarp_mindfire_pvt_ltd_logo?e=1762992000&v=beta&t=PNKsVpI2EGjS5D0_TjpszYSHFgZdmIGHRx8_SArW0Hc',
      location: 'Patna, Bihar, India · On-site',
      certificateImg: 'https://media.licdn.com/dms/image/v2/D562DAQFxuggDVJ1qnQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1707038675114?e=1761811200&v=beta&t=mwJ4oSPXt3Uk6jbnzLHgBGp0Dz21oUX8SphEYqCjVEQ'
    }
  ].sort((a, b) => getTimestamp(b.period) - getTimestamp(a.period));

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

        {/* Experience Section - Modern Interactive Timeline
            Features:
            - Animated cards with hover effects
            - Color-coded sections for visual hierarchy
            - Interactive timeline dots with click feedback
            - Smooth reveal animations for descriptions
            - Responsive layout that adapts to screen size
            - Material design with elevation shadows
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-1">Experience</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{experience.length} Experiences</div>
          <div className="relative" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '40px', minHeight: '800px' }}>
            <div className="absolute h-full w-1" style={{
              left: '120px',
              background: 'linear-gradient(to bottom, #7ab800 0%, #0085c3 35%, #f2af00 50%, #ce1126 65%, #6e2585 100%)',
              zIndex: 0
            }}></div>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company + exp.role + exp.period}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="mb-8 relative"
                style={{ perspective: '1000px', marginTop: index === 0 ? '0' : '100px' }}
              >
                {/* Interactive Timeline dot */}
                <button
                  type="button"
                  aria-label="Expand experience details"
                  className={`absolute left-[120px] -top-3 w-6 h-6 flex items-center justify-center rounded-full border-4 z-10 transition-all duration-300 ${activeIndex === index ? 'scale-110' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  style={{
                    backgroundColor: index === 0 ? '#7ab800' : 
                                   index === 1 ? '#0085c3' : 
                                   index === 2 ? '#f2af00' : 
                                   index === 3 ? '#ce1126' : '#6e2585',
                    borderColor: 'white'
                  }}
                >
                  <span className="block w-2 h-2 rounded-full bg-white"></span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    scale: activeIndex === index ? 1.02 : 1,
                    x: activeIndex === index ? 10 : 0
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 10,
                    transition: { duration: 0.3 }
                  }}
                  className={`overflow-hidden bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 cursor-pointer relative ml-[160px]`}
                  style={{
                    width: '500px',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'visible',
                    perspective: '1000px',
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    borderColor:
                      index === 0 ? '#7ab800' :
                      index === 1 ? '#0085c3' :
                      index === 2 ? '#f2af00' :
                      index === 3 ? '#ce1126' :
                      index === 4 ? '#6e2585' :
                      '#ff6f61', // new color for last card if more than 5
                  }}
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2">
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`} 
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0" 
                        />
                      ) : (
                        <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-purple-300 animate-bounce text-2xl select-none">
                          🦄
                        </span>
                      )}
                      {exp.certificateImg && (
                        <button
                          type="button"
                          className="mt-2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 border border-blue-700"
                          onClick={e => {
                            e.stopPropagation();
                            setCertificateModal({ open: true, img: exp.certificateImg, company: exp.company });
                          }}
                        >
                          View Certificate
                        </button>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold" style={{
                          color:
                            index === 0 ? '#7ab800' :
                            index === 1 ? '#0085c3' :
                            index === 2 ? '#f2af00' :
                            index === 3 ? '#ce1126' :
                            index === 4 ? '#6e2585' :
                            '#ff6f61',
                        }}>{exp.role}</h3>
                        <span className="text-sm px-3 py-1 rounded" style={{
                          backgroundColor:
                            index === 0 ? '#7ab800' :
                            index === 1 ? '#0085c3' :
                            index === 2 ? '#f2af00' :
                            index === 3 ? '#ce1126' :
                            index === 4 ? '#6e2585' :
                            '#ff6f61',
                          color: 'white'
                        }}>{exp.period}</span>
                      </div>
                      <p className="font-semibold mb-1" style={{
                        color:
                          index === 0 ? '#7ab800' :
                          index === 1 ? '#0085c3' :
                          index === 2 ? '#f2af00' :
                          index === 3 ? '#ce1126' :
                          index === 4 ? '#6e2585' :
                          '#ff6f61',
                      }}>{exp.company}</p>
                      {exp.location && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {exp.location}
                        </p>
                      )}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ 
                          opacity: activeIndex === index ? 1 : 0.7,
                          y: activeIndex === index ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-600 dark:text-gray-300 whitespace-pre-line"
                      >
                        {exp.description}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {/* Certificate Modal */}
      {certificateModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-lg w-full relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
              onClick={() => setCertificateModal({ open: false })}
              aria-label="Close certificate modal"
            >
              &times;
            </button>
            <h3 className="mb-4 text-lg font-semibold text-center text-gray-800 dark:text-white">
              {certificateModal.company} Certificate
            </h3>
            <img
              src={certificateModal.img}
              alt={certificateModal.company + ' certificate'}
              className="max-h-96 w-auto rounded border border-gray-300 dark:border-gray-700 shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
}