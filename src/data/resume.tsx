import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Isaac Mutsinzi",
  initials: "IM",
  url: "https://my-brand-isaac.vercel.app/",
  location: "Kampala, Uganda",
  locationLink: "https://www.google.com/maps/place/kampala",
  description:
    "A dedicated and detail-oriented software engineer with a passion for building robust, scalable, and user-centric applications. Skilled in designing and implementing efficient backend logic, crafting modern user interfaces, and integrating advanced features such as authentication, payment gateways, and API-driven systems. Experienced in leveraging technologies like Java, Golang and JavaScript frameworks like Next JS to deliver impactful solutions. Driven by a commitment to innovation, learning, and collaboration to solve complex technical challenges.",
  summary:
    "In 2020, I wrote my first line of code in JavaScript and instantly fell in love with coding. This passion led me to develop complex systems, including an e-commerce platform powered by Golang, capable of processing 1,000 orders per second. I pursued a degree in Computer Science, interned at Andela, Africa's largest tech recruiting company, and participated in over 14 hackathons for fun, honing my skills and embracing the thrill of innovation.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Angular",
    "Next.js",
    "Typescript",
    "Node.js",
    "Kafka",
    "Rabbit MQ",
    "Go",
    "Postgres",
    "Java",
    "Nest.js",
    "MongoDB",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "mutsinziisaac123@gmail.com",
    tel: "+256783686289",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mutsinziisaac",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mutsinzi-isaac-157693223",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/mutsinzi_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "",
        url: "mutsinziisaac123@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Andela",
      href: "https://www.andela.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack Engineer",
      logoUrl: "/andela.png",
      start: "Jun 2023",
      end: "Present",
      description:
        "Contributed to DevPulse , an innovative online education platform designed to empower developers and managers to collaborate seamlessly. Played a pivotal role in building the platform using cutting-edge technologies, including Next.js for the frontend, Nest.js for the backend, PostgreSQL for robust data management, and Socket.IO for real-time communication features. Helped enhance user experience and scalability, fostering an environment of productive collaboration.",
    },
    {
      company: "Bureau Veritas Uganda",
      badges: [],
      href: "https://www.bureauveritas.ug/",
      location: "Kampala",
      title: "Software Engineer",
      logoUrl: "/bv.png",
      start: "Feb 2021",
      end: "Jun 2023",
      description:
        "Infrastructure Management and Optimization. Managed and maintained the organization's IT infrastructure, including servers, networks, and cloud services, ensuring optimal performance, security, and uptime",
    },
  ],
  education: [
    {
      school: "ISBAT University",
      href: "https://isbatuniversity.ac.ug/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/isbat.jpeg",
    },
    {
      school: "ISBAT university",
      href: "https://isbatuniversity.ac.ug/",
      degree: "Diploma in Software Engineering",
      logoUrl: "/isbat.jpeg",
    },
    {
      school: "Hilton High School",
      href: "https://ibo.org",
      degree: "High school certificate",
      logoUrl: "hhs.jpeg",
    },
  ],
  projects: [
    {
      title: "Meditation",
      href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Meditation is cross platform mobile app that allows users to listen to audio meditations and keep track of their meditation sessions.",
      technologies: [
        "React Native",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mutsinziisaac/meditation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/med.jpeg",
      video: "",
    },
    {
      title: "GEEKMART",
      href: "https://endearing-cannoli-8d5726.netlify.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "GEEK MART is a web application that allows users to buy and sell products online. It also includes a secure payment gateway, allowing users to make secure payments for their purchases",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "GO",
        "Angular",
        "React Native",
      ],
      links: [
        {
          type: "Website",
          href: "https://endearing-cannoli-8d5726.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/atlp-rwanda/e-commerce-furebo-32-fn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/geek.png",
      video: "",
    },
    {
      title: "DevPulse",
      href: "https://atlp-devpulse-fn.vercel.app/#/home",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "DevPulse is an Ed platform for developers to learn, share and grow their skills. it also helps educators to create and manage courses and monitoring student progress and performance. we used React, Node.js, Express.js, and MongoDB.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Socket IO",
        "Nest.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://atlp-devpulse-fn.vercel.app/#/home",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/atlp-rwanda/atlp-devpulse-fn",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/devpulse.png",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
} as const;
