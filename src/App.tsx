import React, { useState } from 'react';
import './App.css';
import { Header } from './atoms/Header/Header';
import { FaCode } from 'react-icons/fa6';
import { TbTargetArrow } from 'react-icons/tb';
import { HighLights } from './atoms/Highlights/HighLights';
import { PiBooksFill } from "react-icons/pi";
import { Experience } from './atoms/Experience/Experience';
import { Experiences } from './types';
import { Projects } from './atoms/Projects/Projects';
import { Skills } from './atoms/Skills/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);
const experiencesarray = [
    {
      title: "Synapss",
      role: "Full-Stack Developer",
      time: "2023–Present",
      highlights: [
        "Developed and maintained web applications using React and Node.js, enhancing user experience and functionality.",
        "Collaborated with cross-functional teams to design and implement new features, ensuring alignment with business goals.",
        "Optimized application performance and scalability through code reviews and refactoring.",
      ],
    },
    {
      title: "asdasd",
      role: "Full-Stack Developer",
      time: "2021–2023",
      highlights: [
        "Built and deployed custom web applications for clients using React, Node.js, and MongoDB.",
        "Managed project timelines and deliverables, ensuring client satisfaction and successful project completion.",
        "Provided ongoing maintenance and support for client applications, addressing bugs and implementing updates.",
      ],
    },
    {
      title: "Startup Founder",
      role: "Product Manager",
      time: "2020–2021",
      highlights: [
        "Founded and led a startup focused on delivering innovative tech solutions to market.",
        "Managed product development lifecycle from ideation to launch, coordinating with developers, designers, and marketers.",
        "Conducted market research and user testing to refine product features and improve user engagement.",
      ],
    },
  ];
const CodeIcon = FaCode as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
const KnowLedgeIcon = PiBooksFill as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
const LeadIcon = TbTargetArrow as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;

return (
    <div className="App" style={{color: darkMode ? 'white' : 'black', backgroundColor: darkMode ? '#1e1e2f' : 'white'}}>
      <Header onChange={(mode) => {setDarkMode(mode)}}/>
      <span className="name">Eilay Levi</span>
      <span className="role">Full-Stack Developer</span>
      <div className={`skills ${darkMode ? "dark" : "light"}`}>
        <span className="skill">React</span>
        <span className="skill">Node.js</span>
        <span className="skill">Python</span>
        <span className="skill">MongoDB</span>
        <span className="skill">SQL</span>
      </div><br/>
      <p className="description">Full-Stack Developer with two years of <b>daily, intensive experience</b> in React and Node.js. <b>Currently volunteering at Synapss</b>, building product features. Founded and led a startup, managing Agile delivery, MVP iterations, and market research. Expanding DevOps skills with Docker and automation tools.</p>
      <div className="highlights">
      <HighLights darkMode title={"Full-Stack Developer"} description="2 years of experience in React and Node.js, currently volunteering in Synapss." icon={<CodeIcon size={50}/>} color="#f39c12"/>
      <HighLights darkMode title={"Team Managment"} description="Led a startup using Agile methodologies, managing sprints, backlogs, and team collaboration to deliver high-quality products." icon={<LeadIcon size={50}/>} color="#27ae60"/>
      <HighLights darkMode title={"Knowledge in QA"} description="Build Locust load tests and Unit testing to improve Synapss system's Quality" icon={<KnowLedgeIcon size={50}/>} color="#8e44ad"/>
      </div>
      <div style={{marginTop: '2vh', gap:'2vh'}}>
        <Experience experiences={experiencesarray} darkMode={darkMode}/>
      <Projects/>
      <Skills darkMode/>
      </div>
    </div>
  );
}

export default App;
