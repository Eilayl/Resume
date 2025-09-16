import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaMailchimp, FaMoon, FaPhone, FaSun } from 'react-icons/fa6';

type HeaderProps = {
    onChange?: (darkMode: boolean) => void;
};

export const Header = ({onChange} : HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
      const BrightIcon = FaSun as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
      const DarkIcon = FaMoon as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
      const Phone = FaPhone as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
      const Email = FaEnvelope as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
      const LinkedIn = FaLinkedin as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
      const GitHub = FaGithub as unknown as React.FC<{ className?: string , size?: number, onClick?: () => void }>;
  useEffect(() => {
    if (onChange) {
      onChange(darkMode);
    }
  }, [darkMode]);
      return (
    <div
      className={`header-container ${darkMode ? "dark" : "light"}`}
    >
        <div className="left-side">
          <span>Eilay Levi</span>
          <span>Full-Stack Developer</span>
          <div className="span-and-icon">
            <Phone size={20} className='icon'/>
            <a href="tel:+9720547632322"><span>+972 53-551-0999</span></a>
          </div>
          <div className="span-and-icon">
            <Email size={20} className='icon'/>
            <a href="mailto:eilaylevi95@gmail.com"><span>eilaylevi95@gmail.com</span></a>
          </div>
            </div>
        <div className="right-side">
                <a className="contact-icon" href="https://www.linkedin.com/in/eilay-levi"><LinkedIn size={30} /> </a>
                <a className="contact-icon"href="https://www.github.com/eilayl"><GitHub size={30}/></a>
                <div className="bright-mode">
            <div className="which-mode">
                <DarkIcon
                size={30}
                className={`icon ${darkMode ? "chosen" : ""}`}
                onClick={() => setDarkMode(true)}
                />
                <BrightIcon
                size={30}
                className={`icon ${!darkMode ? "chosen" : ""}`}
                onClick={() => setDarkMode(false)}
                />
                </div>
            </div>
        </div>
</div>
  );
};
