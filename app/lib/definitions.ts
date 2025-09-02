import { Braces, Github, Globe, Linkedin, LucideProps, Mail, Server, Smartphone } from "lucide-react";
import * as react from 'react';

interface SkillCategory {
  category: string;
  icon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;
  skills: string[];
  color: string;
}

export const NAME = "Gray Pham" as const;
export const TITLE = "Senior Software Engineer" as const;
export const LOCATION = "Canada" as const;
export const INTRO = "Hey, I like building thoughtful products and keeping things straightforward." as const;

export const EMAIL = "graypham98@gmail.com" as const;
export const GITHUB = "https://github.com/gray1512" as const;
const LINKEDIN = "https://linkedin.com/in/grayp1512" as const;

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    icon: Braces,
    skills: ["C#", "Java", "Kotlin", "TypeScript", "JavaScript"],
    color: "text-muted-foreground"
  },
  {
    category: "Web",
    icon: Globe,
    skills: [".NET", "React", "Node.js", "Next.js", "HTML5", "CSS3"],
    color: "text-muted-foreground"
  },
  {
    category: "Platforms",
    icon: Server,
    skills: ["AWS", "Azure", "GCP"],
    color: "text-muted-foreground"
  },
  {
    category: "Mobile",
    icon: Smartphone,
    skills: ["Android", "React Native", ".NET MAUI"],
    color: "text-muted-foreground"
  }
];

export const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: `${EMAIL}`,
    href: `mailto:${EMAIL}`
  },
  {
    icon: Github,
    label: "GitHub",
    value: `${GITHUB.replace("https://", "")}`,
    href: `${GITHUB}`
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: `${LINKEDIN.replace("https://", "")}`,
    href: `${LINKEDIN}`
  }
];
