import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gabriel Ribeiro Mendonça",
  initials: "GRM",
  location: "Salvador, BA, Brasil",
  locationLink: "https://maps.app.goo.gl/iT6PDbMjk9Vvox7f9",
  about:
    "Desenvolvedor Full Stack, com foco em Inteligência Artificial.",
  summary:
    "Eu sou um estudante de Engenharia de Software com 21 anos, completamente fascinado por Software e Inteligência Artificial. Estou sempre procurando aprender mais, seja em ambiente profissional ou em projetos pessoais.",
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
      degree: "Concluí o curso CS50x de Harvard, uma introdução intensiva à ciência da computação. Este curso aprofundou meu entendimento em resolução de problemas complexos através do pensamento computacional, um aspecto crucial para o desenvolvimento eficaz de software, fiz uso de várias linguagens de programação, incluindo C, Python, SQL, e JavaScript, que são fundamentais atualmente.",
      start: "2022",
      end: "2023",
    },
    {
      school: "One Bit Code Pro",
      degree: "Participei do One Bit Code Pro, um programa abrangente em tecnologia, que incluiu treinamento em Front-End, Back-End, Mobile, Python, Ruby, Ruby on Rails e No Code.",
      start: "2021",
      end: "",
    },
    {
      school: "Alura / Alura Língua",
      degree: "Iniciei minha jornada acadêmica com esse curso fundamental que serviu como apoio essencial no meu primeiro semestre de faculdade. Este curso foi crucial para o meu entendimento dos termos técnicos da área e proporcionou uma base sólida.",
      start: "2021",
      end: "2022",
    },
    {
      school: "Cultura Inglesa",
      degree: "Minha jornada no aprendizado do idioma inglês iniciou-se precocemente aos 6 anos de idade no Colégio Antônio Vieira, onde desenvolvi uma base sólida. Posteriormente, avancei para completar o nível Avançado na Cultura Inglesa, alem de um contato direto com a língua em viagens internacionais. Atualmente, falo e entendo inglês fluentemente.",
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
      end: "2024",
      description:
        "Na WG,tive  a oportunidade de trabalhar em projetos como  criação e manutenção de um site, desenvolvi minhas habilidades em cloud na construcao de um back-end estrutural da empresa.",
    },
    {
      company: "AFPA",
      link: "https://www.instagram.com/afpa.advogados?igsh=MTFpeDhmaW9lcXpycw==",
      badges: [],
      title: "Freelancer",
      start: "06/2021",
      end: "2023",
      description:
        "Como freelancer na AFPA, trabalhei na área de Social Media e TI. Essas experiências me permitiram desenvolver habilidades na resolução problemas.",
    },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "APIs",
    "Python",
    "React/Next.js",
    "Nuxt/Vue.js",
    "Node.js",
    "PostgreSQL",
    "Spring Boot",
    "Apache",
    "Docker",
    "Git",
    "CSS/Tailwind",
  ],
  projects: [
    {
      title: "ICE",
      techStack: ["Nuxt", "Tailwind", "AWS", "TypeScript", "JavaScript", "Python", "Next.js"],
      description:
        "Empresa/Projeto-Pessoal em software e IA, construindo serviços personalizados para resolução de problemas open e closed source.",
      link: {
        label: "github.com",
        href: "https://github.com/Innovative-Compute-Enterprise",
      },
    },
    {
      title: "Fluency Tech",
      techStack: [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Vite",
      ],
      description: "Uma empresa focada em desenvolvimento de software.",
      link: {
        label: "Fluency.com",
        href: "https://www.instagram.com/fluency.tech",
      },
    },
  ],
} as const;
