import {
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRazorpay,
  SiJsonwebtokens,
} from "react-icons/si";

export const projects = [
  {
    id: 1,

    title: "Zenvyra",

    category: "Full Stack E-Commerce Platform",

    description:
      "A complete e-commerce platform with authentication, product management, shopping cart, secure payments and admin dashboard.",

    image: "/projects/zenvyra.png",

    live: "#",
    github: "#",

    tech: [
      {
        name: "React",
        icon: FaReact,
        iconColor: "text-cyan-400",
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
        iconColor: "text-sky-400",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        iconColor: "text-green-500",
      },
      {
        name: "Express",
        icon: SiExpress,
        iconColor: "text-gray-300",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        iconColor: "text-green-400",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        iconColor: "text-pink-500",
      },
      {
        name: "Razorpay",
        icon: SiRazorpay,
        iconColor: "text-blue-500",
      },
    ],

    features: [
      "Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Wishlist",
      "Orders",
      "Payments",
      "Admin Dashboard",
    ],
  },

  {
    id: 2,

    title: "Pixora",

    category: "AI Image Generation SaaS",

    description:
      "AI-powered SaaS platform for generating images from text prompts with credits system and secure payments.",

    image: "/projects/pixora.png",

    live: "#",
    github: "#",

    tech: [
      {
        name: "React",
        icon: FaReact,
        iconColor: "text-cyan-400",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        iconColor: "text-green-500",
      },
       {
        name: "Express",
        icon: SiExpress,
        iconColor: "text-gray-300",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        iconColor: "text-green-400",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        iconColor: "text-pink-500",
      },
      {
        name: "Razorpay",
        icon: SiRazorpay,
        iconColor: "text-blue-500",
      },
    ],

    features: [
      "AI Image Generation",
      "Credits System",
      "Authentication",
      "Payment Integration",
      "User Dashboard",
    ],
  },

  {
    id: 3,

    title: "Voltify",

    category: "EV Charging Booking System",

    description:
      "A full-stack EV charging platform with station management, booking functionality and role-based access.",

    image: "/projects/voltify.png",

    live: "#",
    github: "#",

    tech: [
      {
        name: "React",
        icon: FaReact,
        iconColor: "text-cyan-400",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        iconColor: "text-green-500",
      },
      {
        name: "Express",
        icon: SiExpress,
        iconColor: "text-gray-300",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        iconColor: "text-green-400",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        iconColor: "text-pink-500",
      },
    ],

    features: [
      "Slot Booking",
      "Role Based Access",
      "Admin Panel",
      "Station Management",
      "Authentication",
    ],
  },
];