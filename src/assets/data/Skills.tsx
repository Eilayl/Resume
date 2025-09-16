import { SkillCategory, Language } from "../../types";

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 100, note: "NumPy, Django" },
      { name: "C#", level: 100 },
      { name: "Java", level: 100 },
      { name: "C", level: 100 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "SQL", level: 100, note: "MySQL, PostgreSQL" },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { name: "Cursor", level: 100 },
      { name: "base44", level: 100 },
    ],
  },
  {
    title: "Data Analysis & Machine Learning",
    items: [
      { name: "Data Analysis", level: 100 },
      { name: "Problem Solving", level: 100 },
      { name: "Algorithm Optimization", level: 100 },
    ],
  },
];

export const languages: Language[] = [
  { name: "Hebrew", level: "Native" },
  { name: "English", level: "Native" },
  { name: "Spanish", level: "Basic" },
];
