import { SkillCategory, Language } from "../../types";

export const skillsData: SkillCategory[] = [
  {
    title: "Core Development",
    items: [
      { name: "React", level: 100 },
      { name: "Node.js", level: 95 },
      { name: "TypeScript & JavaScript (ES6+)", level: 100 },
      { name: "Python (Django)", level: 80 },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 100 },
      { name: "SQL (SQLite)", level: 80 },
    ],
  },
  {
    title: "QA & DevOps",
    items: [
      { name: "Unit Testing", level: 80 },
      { name: "Load Testing (Locust)", level: 80},
      { name: "AWS (Lambada)", level: 60},
      { name: "Ansible", level: 60},
    ],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Team Leadership", level: 100 },
      { name: "Communication", level: 100 },
      { name: "Data-Driven Thinking", level: 90 },
    ],
  },
];


export const languages: Language[] = [
  { name: "Hebrew", level: "Native" },
  { name: "English", level: "Fluent" },
];
