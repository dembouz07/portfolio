import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Tailwind CSS", level: 3, category: "frontend" },
  { name: "JavaScript", level: 3, category: "frontend" },
  { name: "TypeScript", level: 2, category: "frontend" },


  // Backend
  { name: "Php", level: 4, category: "backend" },
  { name: "Java", level: 4, category: "backend" },
  { name: "Laravel", level: 3, category: "backend" },
  { name: "PostgreSQL", level: 3, category: "backend" },

  // Design
  { name: "Figma", level: 4, category: "design" },
  { name: "UI/UX Design", level: 2, category: "design" },
  
  // Other
  { name: "Git/GitHub", level: 5, category: "other" },
  { name: "Windev", level: 4, category: "other" },
  { name: "Docker", level: 3, category: "other" },
  { name: "CI/CD", level: 2, category: "other" }
];