import { Braces, Cloud, Database, Github, Globe, Linkedin, LucideProps, Mail, Server, Smartphone } from "lucide-react";
import * as react from 'react';

interface Skill {
  category: string;
  icon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  skills: string[];
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[] | null;
  demo: string | null | undefined;
  github: string | null | undefined;
}

export const NAME = "Gray Pham" as const;
export const TITLE = "Senior Software Engineer" as const;
export const LOCATION = "Canada" as const;
export const INTRO = "Hey, I like building thoughtful products and keeping things straightforward." as const;

export const EMAIL = "graypham98@gmail.com" as const;
export const GITHUB = "https://github.com/gray1512" as const;
export const LINKEDIN = "https://linkedin.com/in/grayp1512" as const;

export const SKILLS: Skill[] = [
  {
    category: "Backend & APIs",
    icon: Server,
    skills: [
      "C#", ".NET",
      "TypeScript", "JavaScript", "Node.js", "Express",
      "Java", 
      "Python", "Flask"
    ],
    color: "text-muted-foreground"
  },
  {
    category: "Frontend & Web",
    icon: Globe,
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Material UI",
    ],
    color: "text-muted-foreground"
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "CI/CD",
    ],
    color: "text-muted-foreground"
  },
  {
    category: "Data & Infrastructure",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Azure Blob Storage",
      "AWS S3"
    ],
    color: "text-muted-foreground"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Season Watch",
    description: "A platform that scrapes and classifies seasonal signals from social media, transforming them into geolocated events visualized on an interactive map.",
    tech: [
      "Next.js",
      "Express.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Docker"
    ],
    demo: "https://season-watch.vercel.app/",
    github: null
  },
];
