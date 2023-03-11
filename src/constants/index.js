import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  netflix,
  mernauth,
  restaurant,
  reactnote,
  aidspvg,
  todoapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id:"https://www.linkedin.com/in/aditya-shelke-242507221/",
    title: "LinkedIn"
  },
  {
    id: "https://github.com/adi-uchiha",
    title: "Github"
  },
  {
    title: "About",
    id: "#about",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React",
    icon: web,
  },
  {
    title: "Nextjs",
    icon: mobile,
  },
  {
    title: "MongoDB",
    icon: backend,
  },
  {
    title: "Tensorflow",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Lead",
    company_name: "PVG's COET AIDS Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2022 - Ongoing",
    points: [
      "Designed coded and hosted the website of college student association club from scratch",
      "Managed a team of 3 people and managed with them",
      "Developed a AI theame for website",
      "Learned collobrative working",
      
    ],
  },
  {
    title: "HacktoberFest 2022",
    company_name: "walkingpal.in",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Open Source Work",
    company_name: "Palisadoes, freecodecamp.org, jsoncrack.org",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Understanding functioning and of complex and big applications",
      "Realiable and maintainable programs",
      "Documentation of changes",      
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "A Nextjs application with the use of the popular TMDB api, used concepts of Server-side-side rendering and Static rendering (nextjs api) to make the appilication load fast",
    tags: [
      {
        name: "nextjs-typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tmdb-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflix-omega-one.vercel.app/",
  },
  {
    name: "Club's landing Page (incomplete)",
    description:
      "Langing page for college Club with Ai theme interactive background using particle.js ",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "particle.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: aidspvg,
    source_code_link: "https://aidspvg-git-dev-adi-uchiha.vercel.app/#",
  },
  {
    name: "Restaurant Landing Page",
    description:
      "A comprehensive page for booking tables in hotels, a website with consistent and professional styling",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "UIUX",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://restaurant-ui-ux-roan.vercel.app/",
  },
  {
    name: "Coffee Tasks",
    description:
      "A simple fast todolist app using react and react modals storing data in local storage of browser.",
    tags: [
      {
        name: "vite.js",
        color: "blue-text-gradient",
      },
      
    ],
    image: todoapp,
    source_code_link: "https://coffee-tasks.vercel.app/",
  },
  {
    name: "Authenticator",
    description:
      "A Highly secure login/logout system using React, JWT, OAuth, Mongodb, React custom hooks, middlewares etc",
    tags: [
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "reactCustomHooks",
        color: "pink-text-gradient",
      },
    ],
    image: mernauth,
    source_code_link: "https://mern-auth-eight.vercel.app/login",
  },
  {
    name: "React Note Taking",
    description:
      "A simple note taking app with markdown abilities",
    tags: [
      {
        name: "Markdown",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: reactnote,
    source_code_link: "https://react-note-taking.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
