import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gabriel Ribeiro Mendonça",
  initials: "BJ",
  location: "Salvador, BA, Brasil",
  locationLink: "https://maps.app.goo.gl/iT6PDbMjk9Vvox7f9",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "UCSAL",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2007",
      end: "2010",
    },
    {
      school: "HarvardX CS50x",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2022",
      end: "2023",
    },
    {
      school: "One Bit Code Pro",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2021",
      end: "",
    },
    {
      school: "Alura / Alura Língua",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2021",
      end: "2022",
    },
    {
      school: "Cultura Inglesa",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2012",
      end: "2020",
    },
    {
      school: "Colegio Antonio Vieira",
      degree: "Bachelor's Degree in Control systems engineering and Robotics",
      start: "2010",
      end: "2020",
    },
  ],
  work: [
    {
      company: "WG",
      link: "https://www.instagram.com/wgrepresentacoesltdaba?igsh=MXRna3U1dDBoMzlmNw==",
      badges: [],
      title: "TI",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Na WG,tive  a oportunidade de trabalhar em projetos como  criação e manutenção de um site, e  tenho desenvolvido minhas habilidades em plataformas de hosting e programação web.",
    },
    {
      company: "AFPA",
      link: "https://www.instagram.com/afpa.advogados?igsh=MTFpeDhmaW9lcXpycw==",
      badges: [],
      title: "Freelancer",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "Como freelancer na AFPA, trabalhei na área de Social Media. Essas experiências me permitiram desenvolver habilidades de solucionamento de problemas.",
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "Spring Boot",
    "Apache",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    }
  ],
} as const;
