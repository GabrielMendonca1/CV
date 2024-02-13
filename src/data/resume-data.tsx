import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gabriel Ribeiro Mendonça",
  initials: "GRM",
  location: "Salvador, BA, Brasil",
  locationLink: "https://maps.app.goo.gl/iT6PDbMjk9Vvox7f9",
  about:
    "Desenvolvedor Full Stack especializado em desenvolvimento de Software, com foco em Inteligência Artificial.",
  summary:
    "Eu sou um estudante de Engenharia de Software com 21 anos, completamente fascinado por Software e Inteligência Artificial. O que me cativa é sobre como eles podem mudar o mundo. Estou sempre procurando aprender mais, seja em ambiente profissional ou em projetos pessoais.",
  avatarUrl: "https://avatars.githubusercontent.com/u/91131661?v=4",
  personalWebsiteUrl: "https://cv-grm.vercel.app/",
  contact: {
    email: "garimeipod@gmail.com",
    tel: "+55 71 9 8179-7836",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/GabrielMendonca1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gabriel-ribeiro-mendon%C3%A7a-910692269/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/GabrielRMendon1",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "UCSAL",
      degree: "Atualmente estou cursando Engenharia de Software na Universidade Católica do Salvador (UCSal), onde estou adquirindo uma base robusta e abrangente em diversas áreas da computação.",
      start: "2020",
      end: "2026",
    },
    {
      school: "HarvardX CS50x",
      degree: "Concluí o curso CS50x de Harvard, uma introdução intensiva à ciência da computação. Este curso aprofundou meu entendimento em resolução de problemas complexos através do pensamento computacional, um aspecto crucial para o desenvolvimento eficaz de software. Durante o curso, fiz uso de várias linguagens de programação, incluindo C, Python, SQL, e JavaScript, que são fundamentais atualmente.",
      start: "2022",
      end: "2023",
    },
    {
      school: "One Bit Code Pro",
      degree: "Participei do One Bit Code Pro, um programa abrangente em tecnologia, que incluiu treinamento em Front-End, Back-End, Mobile, Python, Ruby, Ruby on Rails e No Code. Esta experiência ampliou minhas habilidades técnicas em diversas áreas-chave da programação e desenvolvimento de software.",
      start: "2021",
      end: "",
    },
    {
      school: "Alura / Alura Língua",
      degree: "Iniciei minha jornada acadêmica com esse curso fundamental que serviu como apoio essencial no meu primeiro semestre de faculdade. Este curso foi crucial para o meu entendimento dos termos técnicos da área e proporcionou uma base sólida para a introdução ao desenvolvimento de software.",
      start: "2021",
      end: "2022",
    },
    {
      school: "Cultura Inglesa",
      degree: "Minha jornada no aprendizado do idioma inglês iniciou-se precocemente aos 7 anos de idade no Colégio Antônio Vieira, onde desenvolvi uma base sólida na língua. Posteriormente, avancei para completar o nível Avançado na Cultura Inglesa, uma instituição renomada pela excelência no ensino do inglês.",
      start: "2012",
      end: "2020",
    },
  ],
  work: [
    {
      company: "WG",
      link: "https://www.instagram.com/wgrepresentacoesltdaba?igsh=MXRna3U1dDBoMzlmNw==",
      badges: [],
      title: "TI",
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
      title: "Fluency Tech",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "Vite",
      ],
      description: "Uma empresa focada em technologia",
      link: {
        label: "Fluency.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Continuum Glow",
      techStack: ["Nuxt", "Tailwind", "TypeScript", "JavaScript", "Python"],
      description:
        "Empresa de inovação tecnológica focada em desenvolvimento de software e inteligência artificial.",
      link: {
        label: "github.com",
        href: "https://github.com/ContinuumGlow",
      },
    },
  ],
} as const;
