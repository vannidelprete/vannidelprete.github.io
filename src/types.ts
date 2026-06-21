export interface About {
  bio: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  type: 'company' | 'personal';
  github: string | null;
  link: string | null;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: 'full-time' | 'part-time' | 'internship';
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  thesis: string | null;
  period: string;
  grade: string | null;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  platform: string;
  date: string;
  courses: string[];
  url: string;
}

export interface SkillsData {
  categories: {
    name: string;
    skills: string[];
  }[];
}