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
  threejs,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  python,
  ipfs,
  java,
  solidity,
  thirdweb,
  c,
  mysql,
  rust,
  motoko,
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
];

const services = [
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Smart Contract Developer",
    icon: backend,
  },
  {
    title: "Photographer & Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "ThirdWeb",
    icon: thirdweb,
  },
  {
    name: "IPFS",
    icon: ipfs,
  },
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Motoko",
    icon: motoko,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "threejs",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Lexi - Vault",
    description:
      "Engineered a Motoko-based dApp that aims to make legal services more available and affordable for everyone, using technology to improve access, security, and quality. It could enable virtual consultations, blockchain-based evidence management, and user feedback for legal professionals. This dApp could transform the way people and organizations access legal services and promote justice for all.",
    tags: [
      {
        name: "Motoko",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=tkpd7-6qaaa-aaaag-acepa-cai",
  },
  {
    name: "Hackabash",
    description:
      "Engineered a revolutionary Motoko-based decentralized application (dApp) to streamline the organization and participation of hackathons. It serves as a comprehensive platform where users can either host or participate in hackathons. By leveraging the power of blockchain technology, Hackabash ensures transparency, security, and efficiency in the process.",
    tags: [
      {
        name: "Motoko",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=5icle-oqaaa-aaaag-acfpa-cai",
  },
  {
    name: "BuzzPay",
    description:
      "Developed a decentralized financial platform built on the principles of Web3 technology. Inspired by the popular payment gateway PayPal, this application aims to provide users with a secure, transparent, and efficient system for conducting online transactions.",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "Hardhat",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NamanShankar01/Projects/tree/a664cba8524fe46dc995b25d55e0ff25e7cd4b0d/PayPal_Final",
  },
  {
    name: "Currency Converter",
    description:
      "Developed a decentralized financial platform built on the principles of Web3 technology. Inspired by the popular payment gateway PayPal, this application aims to provide users with a secure, transparent, and efficient system for conducting online transactions.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://d-zap-frontend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
