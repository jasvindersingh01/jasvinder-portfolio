// src/components/sections/About.jsx

import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaFigma,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiJavascript,
} from "react-icons/si";

const floatingCards = [
    {
        title: "30+ Websites",
        subtitle: "Production Ready",
    },
    {
        title: "MERN Stack",
        subtitle: "Full Stack Development",
    },
    {
        title: "Modern UI",
        subtitle: "Premium Frontend Design",
    },
    {
        title: "Deployment",
        subtitle: "Vercel • Render • Hosting",
    },
];

const skills = [
    {
        icon: <FaReact />,
        name: "React",
        color: "from-cyan-400 to-blue-500",
    },
    {
        icon: <SiTailwindcss />,
        name: "Tailwind",
        color: "from-sky-400 to-cyan-500",
    },
    {
        icon: <SiJavascript />,
        name: "JavaScript",
        color: "from-yellow-300 to-yellow-500",
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "from-green-400 to-emerald-500",
    },
    {
        icon: <SiExpress />,
        name: "Express",
        color: "from-slate-300 to-slate-500",
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "from-green-500 to-lime-500",
    },
    {
        icon: <FaGithub />,
        name: "GitHub",
        color: "from-slate-400 to-slate-600",
    },
    {
        icon: <FaFigma />,
        name: "Figma",
        color: "from-pink-400 to-purple-500",
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050816] px-5 py-28 text-white"
        >
            {/* ===== Background Effects ===== */}

            {/* Glow Orbs */}
            <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

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

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
                {/* ================= LEFT ================= */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                >
                    {/* Small Heading */}
                    <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl">
                        About Me
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl font-black leading-tight md:text-6xl">
                        Passionate About
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Modern Web Experiences
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-lg leading-relaxed text-slate-400">
                        I’m Jasvinder Singh, a Frontend & MERN Stack Developer
                        focused on building modern, scalable, and visually premium
                        web applications. I specialize in React.js, Tailwind CSS,
                        Node.js, and modern UI/UX experiences with smooth
                        animations and responsive design.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-slate-400">
                        My focus is on crafting high-performance web applications
                        with modern frontend experiences, smooth interactions,
                        scalable architecture, and visually polished interfaces
                        that leave a lasting impression.
                    </p>

                    {/* Highlight Cards */}
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {floatingCards.map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                }}
                                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
                            >
                                {/* Glow */}
                                <div className="absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />

                                {/* Top Border */}
                                <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500" />

                                <h3 className="relative z-10 text-2xl font-bold text-white">
                                    {card.title}
                                </h3>

                                <p className="relative z-10 mt-2 text-sm text-slate-400">
                                    {card.subtitle}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ================= RIGHT ================= */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">
                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

                        {/* Blur Orb */}
                        <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-500/20 blur-[100px]" />

                        {/* Heading */}
                        <div className="relative z-10">
                            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                                Core Technologies
                            </p>

                            <h3 className="mt-4 text-3xl font-black">
                                My Tech Stack
                            </h3>
                        </div>

                        {/* Skills Grid */}
                        <div className="relative z-10 mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.05,
                                        rotate: 2,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                                >
                                    {/* Glow */}
                                    <div
                                        className={`absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100 bg-gradient-to-r ${skill.color}`}
                                    />

                                    {/* Icon */}
                                    <div className="relative z-10 text-4xl text-white">
                                        {skill.icon}
                                    </div>

                                    {/* Skill Name */}
                                    <p className="relative z-10 mt-4 text-sm font-medium text-slate-300">
                                        {skill.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Floating Card */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                            }}
                            className="relative z-10 mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6 backdrop-blur-xl"
                        >
                            <h4 className="text-xl font-bold text-white">
                                Frontend Developer @ RightAds Digital
                            </h4>

                            <p className="mt-3 leading-relaxed text-slate-300">
                                Building premium production-ready web experiences with
                                React.js, Tailwind CSS, animations, backend API
                                integrations, and scalable deployment workflows.
                            </p>
                        </motion.div>
                    </div>

                    {/* Floating Decorative Cards */}

                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="absolute -top-6 -left-6 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl"
                    >
                        <p className="text-sm font-medium text-white">
                            ⚡ React Specialist
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl"
                    >
                        <p className="text-sm font-medium text-white">
                            🚀 Full Stack Builder
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;