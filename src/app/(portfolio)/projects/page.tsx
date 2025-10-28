'use client';
import './projects.css';
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

  // 🧑‍💻 Developer Projects
  const developerProjects = [
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
    },
  ];

  // 🧪 QA Projects
  const qaProjects = [
    {
      title: 'DataHolder ',
      description: 'A behavior-driven automation testing framework built using Selenium, Java, and Cucumber for a registration form module. It follows the Page Object Model design, integrates Gherkin for readable scenarios, and generates detailed Extent Reports for test execution insights',
      image: '/regForm.webp',
      technologies: ['Java', 'Selenium', 'TestNG', 'Cucumber','Extent Reports', 'Maven'],
      github: 'https://github.com/shivkantkumar098/Registration_Form/tree/BDD_FrameWork',
      live: '',
    },
    {
      title: 'TripTailor',
      description: 'Designed and implemented a behavior-driven test automation framework for a Travel Recommendation app that generates smart itineraries using real-time API data. Automated modules include destination search, itinerary creation, pagination, and UI validation.',
      image: '/tripTrilor.png',
      technologies: ['Java', 'Cucumber', 'Selenium', 'Maven','Rest Assured','TestNG', 'Postman','JUnit'],
      github: 'https://github.com/shivkantkumar098/TravelRecommendation/tree/develop',
      live: '',
    },
    {
      title: 'Ecommerce UI Testing',
      description: 'Designed and implemented a robust UI automation framework for Amazon’s e-commerce platform using Java, Selenium WebDriver, Cucumber, and TestNG. The framework supports BDD-style test scripting, parallel execution, and cross-browser testing. Advanced scenarios include validating dropdowns, performing mouse hovers and drag-and-drop actions, handling checkboxes, executing JavaScript commands, verifying broken links, and generating rich Allure and TestNG reports',
      image: '/amazon.jpg',
      technologies: ['Java', 'Cucumber', 'Selenium', 'Maven','TestNG'],
      github: 'https://github.com/shivkantkumar098/amzonWebSiteTesting',
      live: '',
    },
     {
      title: 'FinSecureAuto',
      description: 'FinSecureAuto ensures seamless integration of automation within banking workflows, enabling faster release cycles with minimal risk.It stands as a robust, scalable, and reusable automation solution tailored for financial domain applications requiring high accuracy and compliance.The framework focuses on maintaining end-to-end validation of mission-critical modules, ensuring zero functional regressions.By combining modular test design and CI/CD integration, it accelerates testing efficiency and improves traceability across builds.Ultimately, FinSecureAuto empowers QA teams to deliver secure, high-quality banking solutions with confidence and consistency.',
       image: '/banking.png',
      technologies: ['Java', 'Cucumber', 'Selenium', 'Maven','TestNG'],
      github: 'https://github.com/shivkantkumar098/FinSecureAuto',
      live: '',
    },
    {
      title: 'SauceDemo E-Commerce',
      description: 'A complete end-to-end automation testing framework built for the SauceDemo e-commerce platform, using Java, Selenium WebDriver, and TestNG. The framework is designed to validate key user journeys such as login, adding products to the cart, checking out, and verifying order completion.The main objective of this project is to ensure UI stability, functional accuracy, and regression reliability across different test environments. Using a Page Object Model (POM) architecture, the framework maintains scalability and clean code separation for easy maintenance.',
      image: '/ecom.png',
      technologies: ['Java', 'Cucumber', 'Selenium', 'Maven','TestNG'],
      github: 'https://github.com/shivkantkumar098/sauceDemo',
      live: '',
    },
  ];

  // 👇 map your QA tech names to logo URLs (you’ll replace these with your own black icons)
  const qaTechImages: Record<string, string> = {
    Java: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
    Selenium: 'https://imgs.search.brave.com/VyPzInQxwSuARjEAv2CaUPXxtadWAcZqAiGg0VZDQoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM5LzIvc2VsZW5p/dW0tbG9nby1wbmdf/c2Vla2xvZ28tMzk0/NjE5LnBuZw',
    TestNG: 'https://imgs.search.brave.com/ZbtpFA2CY-q47s7DPkhD7cXfbTrrVMvZ-EDk6-w-Jz0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aW1nYmluLmNvbS8y/Mi8yMC8xNC9pbWdi/aW4tdGVzdG5nLWxv/Z28tc29mdHdhcmUt/dGVzdGluZy1zb2Z0/d2FyZS1mcmFtZXdv/cmstY29tcHV0ZXIt/aWNvbnMtYXV0b21h/dGlvbi10ZXN0aW5n/LWt3cEtZemo4a3FY/M3Z4dnRqbnRxeUxQ/REsuanBn',
    Maven: 'https://maven.apache.org/images/maven-logo-black-on-white.png',
    'Extent Reports': 'https://imgs.search.brave.com/u6eW06deFKbelzUv1FwF-S-QWd_591H-vSZs0squSOU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hLmZz/ZG4uY29tL2FsbHVy/YS9zL2FsbHVyZS1y/ZXBvcnQvaWNvbj8z/ZDRjN2JhOWNjYWQ5/ZmZlNWVlYmY1ZDg4/MzhhNGI1OGIwMjFk/Mjg2MDExODU3OGIw/YWU2OWUzM2JjZjA4/ZDBmPyZ3PTQ4',
    Cucumber: 'https://cucumber.io/img/logo.svg',
    JUnit: 'https://junit.org/junit5/assets/img/junit5-logo.png',
    'Rest Assured': 'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
    Postman: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    Cypress: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Cypress.png',
    JavaScript: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    Mocha: 'https://imgs.search.brave.com/2sal57fIuDtVeniZ5WOJLLmkrKpqGvC9RNb2pnBx_a8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LW1vY2hhLWxvZ28t/aWNvbi1kb3dubG9h/ZC1pbi1zdmctcG5n/LWdpZi1maWxlLWZv/cm1hdHMtLXByb2dy/YW1taW5nLWxhbmd1/YWdlLWxvZ29zLXBh/Y2staWNvbnMtMTE3/NTAxMi5wbmc_Zj13/ZWJwJnc9MjU2',
    Chai: 'https://imgs.search.brave.com/DHNWSpgjFHYFPcH9XzQqQTZkBHweHto4qHPbOYYN_p4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2Vla3BuZy5jb20v/cG5nL2RldGFpbC81/MTktNTE5MDcyOV9j/aGFpLWpzLnBuZw',
  };
  // Choose the right project list
  const projects = isDeveloperMode ? developerProjects : qaProjects;

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
    Python: SiPython,
    'Google Colab': SiGooglecolab,
    SQLite: SiSqlite,
    MySQL: SiMysql,
    GitHub: SiGithub,
  };

  return (
     <div className="container mx-auto px-4 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {isDeveloperMode ? 'Developer Projects' : 'QA Projects'}
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
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                {/* 👇 Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech) => {
                    if (isDeveloperMode) {
                      const Icon = techIcons[tech] || SiGithub;
                      return (
                        <div key={tech} className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 p-2">
                          <Icon className="text-white w-6 h-6" />
                          <span className="tooltip">{tech}</span>
                        </div>
                      );
                    } else {
                      // QA logos as black & white images
                      return (
                        <div key={tech} className="relative group flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 p-1">
                          <img
                            src={qaTechImages[tech] || '/default-logo.png'}
                            alt={tech}
                            className="qa-tech-icon"
                          />
                          <span className="tooltip">{tech}</span>
                        </div>
                      );
                    }
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