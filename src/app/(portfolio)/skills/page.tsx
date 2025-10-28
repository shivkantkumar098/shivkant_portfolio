'use client';

import React from "react";
import { usePortfolio } from '@/context/PortfolioContext';
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiGithub,
  DiBootstrap,
  DiJavascript,
  DiCodepen,
  DiSublime,
  DiJenkins,
  DiVisualstudio,
  DiIntellij,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiTailwindcss,
  SiReactrouter,
  SiReacthookform,
  SiNodemon,
  SiNodedotjs,
  SiExpress,
  SiFigma,
  SiMacos,
  SiCodesandbox,
  SiPostman,
  SiSlack,
  SiVercel,
  SiTableau,
  SiGooglecolab,
  SiAnaconda,
  SiJupyter,
  SiIntellijidea,
  SiSelenium,
  SiJunit5,
  SiCypress,
  SiAppium,
  SiSqlite,
  // SiAmazonaws,
  SiAmazonec2,
  SiDocker,
  SiKubernetes,
  SiJira,
  SiGatling,
  SiApachemaven,
  SiApacheant,
  SiGradle,
  SiConfluence,
  SiNotepadplusplus,
  // SiTestng,
  // SiPlaywrigh,
  // SiRestassured,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { BiNotepad } from "react-icons/bi";
import LeetCodeHeatmap from "@/components/LeetCodeHeatmap";


// =============================
// Developer Techstack
// =============================
function Techstack() {
  const techStacks = [
    { icon: <CgCPlusPlus /> },
    { icon: <DiHtml5 /> },
    { icon: <DiCss3 /> },
    { icon: <DiJavascript1 /> },
    { icon: <SiTailwindcss /> },
    { icon: <DiBootstrap /> },
    { icon: <DiReact /> },
    { icon: <SiReactrouter /> },
    { icon: <DiMongodb /> },
    { icon: <SiExpress /> },
    { icon: <SiNodedotjs /> },
    { icon: <DiGit /> },
    { icon: <DiGithub /> },
    { icon: <SiFirebase /> },
    { icon: <SiPostgresql /> },
    { icon: <DiPython /> },
    { icon: <DiJava /> },
    { icon: <SiFigma /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Professional Skillset
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {techStacks.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 h-32 border-2 border-transparent hover:border-blue-500 transition-colors duration-300"
          >
            <div className="text-6xl text-white">{tech.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// =============================
// Developer Toolstack
// =============================
function Toolstack() {
  const toolStacks = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiCodesandbox />, name: "CodeSandbox" },
    { icon: <DiCodepen />, name: "Codepen" },
    { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
    { icon: <DiSublime />, name: "Sublime Text" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <SiGooglecolab />, name: "Google Colab" },
    { icon: <SiAnaconda />, name: "Anaconda" },
    { icon: <SiJupyter />, name: "Jupyter" },
    {icon:<SiAnaconda/>,name:"Anaconda Navigator"},
    { icon: <BiNotepad />, name: "Notepad" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Tools I Use
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {toolStacks.map((tool, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 h-32 border-2 border-transparent hover:border-blue-500 transition-colors duration-300"
            title={tool.name}
          >
            <div className="text-6xl text-white">{tool.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// =============================
// QA Skillset
// =============================
function QASkillset() {
  const qaSkills = [
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript />, name: "JavaScript" },
    { icon: <SiSelenium />, name: "Selenium" },
    { icon: <SiCypress />, name: "Cypress" },
    // { icon: <SiPlaywright />, name: "Playwright" },
    { icon: <SiAppium />, name: "Appium" },
    // { icon: <SiRestassured />, name: "Rest Assured" },
    // { icon: <SiTestng />, name: "TestNG" },
    { icon: <SiJunit5 />, name: "JUnit 5" },
    // { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiAmazonec2 />, name: "AWS EC2" },
    {icon:<SiDocker/>, name:"Docker"},
    {icon:<SiKubernetes/>, name:"Kubernetes"},
    {icon:<DiJenkins/>, name:"Jenkins"},
    { icon: <DiGit />, name: "Git" },
    { icon: <DiGithub />, name: "GitHub" },
    {icon:<SiPostman />, name:"Postman"},
    
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    {icon:<SiJira/>, name:"Jira"},
    {icon:<SiSlack/>, name:"Slack"},
    {icon:<SiGatling/>, name:"Gatling"},
    {icon:<SiApachemaven/>, name:"Apache Maven"},
    {icon:<SiApacheant/>, name:"Apache Ant"},
    {icon:<SiGradle/>,name:"Gradle"},
    {icon:<SiConfluence/>, name:"Confluence"},
    {icon:<DiVisualstudio />, name:"Visual Studio Code"},
    {icon:<DiIntellij/>, name:"IntelliJ IDEA"},
    {icon:<SiNotepadplusplus/>, name:"Notepad++"}
  
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        QA Skillset
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {qaSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-4 h-32 border-2 border-transparent hover:border-blue-500 transition-colors duration-300"
            title={skill.name}
          >
            <div className="text-6xl text-white">{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


// =============================
// Skills Page Wrapper
// =============================
function SkillsPage() {
  const { isDeveloperMode } = usePortfolio();

  return (
    <>
      {isDeveloperMode ? (
        <>
          <Techstack />
          <Toolstack />
        </>
      ) : (
        <QASkillset />
        
      )}
      <LeetCodeHeatmap />
    </>
  );
}

export { Techstack, Toolstack, QASkillset };
export default SkillsPage;
