import React from "react";
import "./HighLights.css";

type HighLightsProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  darkMode: boolean;
};

export const HighLights = ({ title, description, icon, color, darkMode }: HighLightsProps) => {
  return (
    <div className={`highlight-card ${darkMode ? "dark" : "light"}`}>
      <div className="highlight-icon" style={{ color }}>
        {icon}
      </div>
      <div className="highlight-text">
        <h3 className="highlight-title">{title}</h3>
        <p className="highlight-description">{description}</p>
      </div>
    </div>
  );
};
