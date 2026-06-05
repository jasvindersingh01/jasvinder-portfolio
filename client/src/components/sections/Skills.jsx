// src/components/sections/Skills.jsx

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaFigma,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiFramer,
    SiVercel,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: <FaReact />,
                color: "from-cyan-400 to-blue-500",
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss />,
                color: "from-sky-400 to-cyan-500",
            },
            {
                name: "JavaScript",
                icon: <SiJavascript />,
                color: "from-yellow-300 to-yellow-500",
            },
            {
                name: "HTML5",
                icon: <FaHtml5 />,
                color: "from-orange-400 to-red-500",
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt />,
                color: "from-blue-400 to-indigo-500",
            },
            {
                name: "Framer Motion",
                icon: <SiFramer />,
                color: "from-pink-400 to-purple-500",
            },
        ],
    },

    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                color: "from-green-400 to-emerald-500",
            },
            {
                name: "Express.js",
                icon: <SiExpress />,
                color: "from-slate-300 to-slate-500",
            },
            {
                name: "Authentication",
                icon: <FaGithub />,
                color: "from-orange-300 to-yellow-500",
            },
        ],
    },

    {
        title: "Database",
        skills: [
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                color: "from-green-500 to-lime-500",
            },
        ],
    },

    {
        title: "Tools & Deployment",
        skills: [
            {
                name: "GitHub",
                icon: <FaGithub />,
                color: "from-slate-400 to-slate-600",
            },
            {
                name: "Git",
                icon: <FaGitAlt />,
                color: "from-orange-400 to-red-500",
            },
            {
                name: "Vercel",
                icon: <SiVercel />,
                color: "from-slate-100 to-slate-400",
            },
            {
                name: "Deployment",
                icon: <SiVercel />,
                color: "from-indigo-400 to-purple-500",
            },
            {
                name: "Figma",
                icon: <FaFigma />,
                color: "from-pink-400 to-purple-500",
            },
        ],
    },
];

const marqueeSkills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Framer Motion",
    "JWT",
    "GitHub",
    "Responsive UI",
    "Frontend Development",
    "MERN Stack",
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#050816] px-5 py-28 text-white"
        >
            {/* ===== Background Effects ===== */}

            {/* Glow Orbs */}
            <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[160px]" />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* ===== Heading ===== */}

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    {/* Small Badge */}
                    <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
                        My Expertise
                    </div>

                    {/* Main Heading */}
                    <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
                        Technologies
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            I Work With
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-lg leading-relaxed text-slate-400">
                        I specialize in building modern frontend experiences and
                        scalable full-stack applications using the MERN stack,
                        premium UI design systems, and modern animation libraries.
                    </p>
                </motion.div>

                {/* ===== Skill Categories ===== */}

                <div className="mt-20 space-y-14">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: categoryIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            {/* Category Title */}
                            <div className="mb-8 flex items-center gap-4">
                                <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-purple-500" />

                                <h3 className="text-2xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Grid */}
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{
                                            y: -10,
                                            scale: 1.04,
                                            rotate: 1,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 120,
                                        }}
                                        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                                    >
                                        {/* Glow */}
                                        <div
                                            className={`absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r ${skill.color}`}
                                        />

                                        {/* Top Border */}
                                        <div
                                            className={`absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r ${skill.color}`}
                                        />

                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 translate-x-[-120%] skew-x-12 bg-white/10 transition duration-1000 group-hover:translate-x-[120%]" />

                                        {/* Icon */}
                                        <div className="relative z-10 text-5xl text-white">
                                            {skill.icon}
                                        </div>

                                        {/* Name */}
                                        <h4 className="relative z-10 mt-6 text-xl font-bold text-white">
                                            {skill.name}
                                        </h4>

                                        {/* Small Text */}
                                        <p className="relative z-10 mt-2 text-sm text-slate-400">
                                            Modern development workflow & scalable architecture.
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ===== Marquee ===== */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 py-6 backdrop-blur-2xl"
                >
                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />

                    <Marquee
                        speed={60}
                        gradient={false}
                    >
                        {marqueeSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="mx-8 flex items-center gap-4"
                            >
                                {/* Dot */}
                                <div className="h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

                                {/* Text */}
                                <p className="text-xl font-semibold tracking-wide text-white">
                                    {skill}
                                </p>
                            </div>
                        ))}
                    </Marquee>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;