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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "craft",
    title: "Craft",
  },
  {
    id: "login",
    title: "Login",
  },
];

const services = [
  {
    title: "Only best performence",
    icon: web,
  },
  {
    title: "Unique Musical Instrument",
    icon: mobile,
  },
  {
    title: "Customizable",
    icon: backend,
  },
  {
    title: "Delivering  All over the Word",
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
    title: "Starting Our Busines",
    company_name: "1of1 Guitars",
    iconBg: "#383E56",
    date: "April - 2021",
    points: [
      "We are developing best performence guitars.",
      "We are developing best performence guitars",
      "We are developing best performence guitars.",
      "We are developing best performence guitars.",
    ],
  },
  {
    title: "Unique",
    company_name: "1of1 Guitars",
    iconBg: "#E6DEDD",
    points: [
      "Our musical instruments are unique.",
      "Our musical instruments are unique.",
      "Our musical instruments are unique",
      "Our musical instruments are unique",
    ],
  },
  {
    title: "Best Artists in our development group",
    company_name: "1of1 Guitars",
    iconBg: "#383E56",
    points: [
      "Our Artists is professionals in their busines.",
      "Our Artists is professionals in their busines",
      "Our Artists is professionals in their busines.",
      "Our Artists is professionals in their busines",
    ],
  },
  {
    title: "Only Hand Made",
    iconBg: "#E6DEDD",
    points: [
      "Our Guitars are handmade",
      "Our Guitars are handmade.",
      "Our Guitars are handmade.",
      "Our Guitars are handmade.",
    ],
  },
];

const projects = [
  {
    name: "Nightmare",
    description:
      "So beautifull as terrible your worst nightmare.",
    tags: [
      {
        name: "Telekaster",
        color: "blue-text-gradient",
      },
      {
        name: "Wood",
        color: "green-text-gradient",
      },
      {
        name: "Pickup",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Katana",
    description:
      "sometimes it feels historilcally.",
    tags: [
      {
        name: "Strata-kaster",
        color: "blue-text-gradient",
      },
      {
        name: "Metal-Fingerboard",
        color: "green-text-gradient",
      },
      {
        name: "Pickup",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Flashlight",
    description:
      "Ըou will hear the wrath of the clouds.",
    tags: [
      {
        name: "Strata-kaster",
        color: "blue-text-gradient",
      },
      {
        name: "Metal-Fingerboard",
        color: "green-text-gradient",
      },
      {
        name: "Pickup",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects};
