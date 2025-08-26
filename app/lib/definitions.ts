import {
    siKotlin, siAndroid, siReact,
    siDotnet,
    siGmail,
    siGithub,
    siTypescript,
    siGooglecloud,
    siHtml5,
    siCss
} from "simple-icons/icons";
import JavaSVG from "@/app/public/icons/java.svg";
import CSharpSVG from "@/app/public/icons/csharp.svg";
import XamarinSVG from "@/app/public/icons/xamarin.svg";
import LinkedInSVG from "@/app/public/icons/linkedin.svg";
import AzureSVG from "@/app/public/icons/azure.svg";
import AWSSVG from "@/app/public/icons/aws.svg";


export type Category = {
    label: string;
    items: SubItem[];
};
export type SubItem =
    | { label: string; path: string; href?: string } // inline SVG
    | { label: string; local: string; href?: string }; // local SVG path

export const hasPath = (i: SubItem): i is { label: string; path: string } =>
    (i as { label: string; path: string }).path !== undefined;

export const NAME = "Gray Pham" as const;
export const TITLE = "Senior Software Engineer" as const;
export const LOCATION = "Canada" as const;

const EMAIL = "mailto:graypham98@gmail.com" as const;
const GITHUB = "https://github.com/gray1512" as const;
const LINKEDIN = "https://linkedin.com/in/grayp1512" as const;

export const SKILLS: Category[] = [
  {
    label: "Languages",
    items: [
      { label: "C#", local: CSharpSVG },
      { label: "Java", local: JavaSVG },
      { label: "Kotlin", path: siKotlin.path },
      { label: "TypeScript", path: siTypescript.path },
    ],
  },
  {
    label: "Web",
    items: [
      { label: ".NET", path: siDotnet.path },
      { label: "React", path: siReact.path },
      { label: "HTML5", path: siHtml5.path },
      { label: "CSS3", path: siCss.path },
    ],
  },
  {
    label: "Cloud",
    items: [
      { label: "Azure", local: AzureSVG },
      { label: "AWS", local: AWSSVG },
      { label: "GCP", path: siGooglecloud.path },
    ],
  },
  {
    label: "Mobile",
    items: [
      { label: "Android", path: siAndroid.path },
      { label: "React Native", path: siReact.path },
      { label: "Xamarin", local: XamarinSVG },
      { label: ".NET MAUI", path: siDotnet.path }, // fallback if no Maui icon
    ],
  }
];

export const CONTACTS: SubItem[] = [
    { label: "Email", path: siGmail.path, href: EMAIL },
    { label: "Github", path: siGithub.path, href: GITHUB },
    { label: "LinkedIn", local: LinkedInSVG, href: LINKEDIN },
];
