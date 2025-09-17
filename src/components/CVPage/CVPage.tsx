import React, { useState } from 'react';
import { Header } from '../../atoms/Header/Header';
import { FaCode } from 'react-icons/fa6';
import { TbTargetArrow } from 'react-icons/tb';
import { HighLights } from '../../atoms/Highlights/HighLights';
import { PiBooksFill } from "react-icons/pi";
import { Experience } from '../../atoms/Experience/Experience';
import { Projects } from '../../atoms/Projects/Projects';
import { Skills } from '../../atoms/Skills/Skills';
import { Contact } from '../../atoms/Contact/Contact';
import './CVPage.css'

export const CVPage = () => {
  const [darkMode, setDarkMode] = useState(false);
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
<p className="description">
<strong>Full-Stack Developer</strong> with hands-on experience in React and Node.js. 
Currently volunteering at Synapss, building scalable product features. 
Bringing added value in QA (unit & load testing), analytics, and Figma, with a strong Agile and MVP mindset.
</p>

      <div className="highlights">
<HighLights 
  darkMode 
  title={"Full-Stack Development"} 
  description="Practical expertise in React and Node.js, building end-to-end applications and delivering scalable features." 
  color="#f39c12" 
  icon={<CodeIcon size={40}/>}
/>

<HighLights 
  darkMode 
  title={"Agile & Leadership"} 
  description="Experience leading a startup, managing sprints, backlogs, and MVP delivery with cross-functional collaboration." 
  color="#27ae60" 
  icon={<LeadIcon size={40}/>}
/>

<HighLights 
  darkMode 
  title={"QA & Analytics"} 
  description="Applied QA methodologies including unit testing and load testing, alongside data analysis and Figma skills to enhance quality and design." 
  color="#8e44ad"
  icon={<KnowLedgeIcon size={40}/>} 
/>
      </div>
      <div style={{marginTop: '2vh', gap:'2vh'}}>
        <Experience darkMode={darkMode}/>
      <Projects/>
      <Skills darkMode/>
      <Contact darkMode={darkMode}/>
      </div>
    </div>
  );
}

