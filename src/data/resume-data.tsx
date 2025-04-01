import { GitHubIcon, LinkedInIcon, XIcon, DiscordIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gabriel Ribeiro Mendonça",
  initials: "GRM",
  location: "Salvador, BA, Brasil",
  locationLink: "https://maps.app.goo.gl/iT6PDbMjk9Vvox7f9",
  about: "Engenheiro de Software - e/acc",
  summary:
  "Full-Stack especializado em Inteligência Artificial. Meu foco está na criação de produtos que resolvam problemas reais, combinando conhecimento técnico com visão estratégica para entregar valor.",  avatarUrl: "https://avatars.githubusercontent.com/u/91131661?v=4",
  personalWebsiteUrl: "https://cv-grm.vercel.app/",
  contact: {
    email: "gabrielrm.email@gmail.com",
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
        url: "https://x.com/bielzito33",
        icon: XIcon,
      },
      {
        name: "Discord",
        url: "",
        icon: DiscordIcon,
      },
    ],
  },
  education: [
    {
      school: "UCSAL",
      degree:
      "Curso Engenharia de Software na UCSal, instituição reconhecida pela excelência acadêmica e formação de profissionais qualificados em tecnologia. O curso proporciona base sólida em programação, design de interfaces, engenharia de requisitos, testes, desenvolvimento ágil e segurança cibernética.",
      start: "2021",
      end: "2026/6",
    },
    {
      school: "HarvardX CS50x",
      degree:
        "​Concluí o curso CS50x da Universidade de Harvard, uma introdução intensiva e renomada à ciência da computação. Este curso aprimorou minha capacidade de resolver problemas complexos por meio do pensamento computacional, uma habilidade essencial para o desenvolvimento eficaz de software.",
      start: "2022",
      end: "2023",
    },
    {
      school: "Cultura Inglesa",
      degree:
        "Comecei a aprender inglês aos 6 anos no Colégio Antônio Vieira, completei o nível Avançado na Cultura Inglesa e aprimorei o idioma em viagens internacionais e nunca deixei de ter contato com o inglês. Hoje, sou fluente em inglês.",
      start: "2012",
      end: "",
    },
    {
      school: "One Bit Code Pro",
      degree:
        "Participei do One Bit Code Pro, um programa completo que cobriu Front-End, Back-End, Mobile, Python, Ruby, Ruby on Rails e No Code.",
      start: "2021",
      end: "2023",
    },
    {
      school: "Alura / Alura Língua",
      degree:
        "Fiz este curso básico que foi essencial no meu primeiro semestre, ajudando-me a compreender termos técnicos e estabelecer uma base sólida.",
      start: "2021",
      end: "2022",
    },
  ],
  work: [
    {
      company: "SYSTEMA",
      link: "https://www.linkedin.com/company/systema-gmbh/mycompany/verification/",
      badges: [],
      title: "Intern",
      start: "06/2024",
      end: "06/2025",
      description:
        "Estou tendo a oportunidade de trabalhar em projetos de grandes empresas e também aprendendo com os melhores, desenvolvendo back-end e front-end, desde sistemas legados até aplicações modernas.",
    },
    {
      company: "WG",
      link: "https://www.instagram.com/wgrepresentacoesltdaba?igsh=MXRna3U1dDBoMzlmNw==",
      badges: [],
      title: "Freelancer",
      start: "2021",
      end: "2024",
      description:
        "Na WG uma representante de calcaods com mais de 30 anos de mercado, tive  a oportunidade de trabalhar em projetos como  criação e manutenção de um site, desenvolvi minhas habilidades em cloud na construcao de um back-end estrutural da empresa para gereciamento de dados e notas fiscais.",
    },
    {
      company: "AFPA",
      link: "https://www.instagram.com/afpa.advogados?igsh=MTFpeDhmaW9lcXpycw==",
      badges: [],
      title: "Freelancer",
      start: "06/2021",
      end: "2023",
      description:
        "Como freelancer na AFPA, trabalhei na área de Social Media e TI. Essas experiências me permitiram desenvolver habilidades na resolução de problemas e gerenciamento de dados.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Sap-ui5",
    "Next",
    "Vue",
    "Node",
    "Java",
    "PostgreSQL",
    "AI tools",
    "Spring Boot",
    "Docker",
    "Git",
  ],
  projects: [
    {
      title: "ICE",
      techStack: ["Nuxt", "TypeScript", "Node"],
      description:
        "Empresa de software e IA, construindo serviços personalizados e ferramentas para a humanidade",
      link: {
        label: "github.com",
        href: "https://iceoficial.com/",
      },
    },
    {
      title: "Fluency Tech",
      techStack: ["React", "TypeScript", "JavaScript"],
      description: "Uma empresa focada em desenvolvimento de software.",
      link: {
        label: "Fluency.com",
        href: "https://www.instagram.com/fluency.tech",
      },
    },
  ],
} as const;
