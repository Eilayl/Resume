export interface Experiences {
    title: string;
    role: string;
    time: string;
    highlights: string[];
}

export type SkillItem = {
  name: string;
  level: number;           // אחוזים (0–100)
  note?: string;           // לדוגמה: (NumPy, Django)
};

export type SkillCategory = {
  title: string;           // שם הקטגוריה (Programming Languages, Databases...)
  items: SkillItem[];      // מערך של Skills
};

export type Language = {
  name: string;
  level: string;           // Native / Basic / Advanced
};
