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
    SiNextdotjs,
    SiTypescript,
} from "react-icons/si";

const skills = [
    {
        icon: <FaReact />,
        name: "React",
        color: "from-cyan-400 to-blue-500",
    },
    {
        icon: <SiNextdotjs />,
        name: "Next.js",
        color: "from-black to-red-300",
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
        icon: <SiTypescript />,
        name: "TypeScript",
        color: "from-blue-400 to-blue-600",
    },
    {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "from-green-400 to-emerald-500",
    },
    {
        icon: <SiExpress />,
        name: "Express",
        color: "from-black to-slate-500",
    },
    {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "from-green-500 to-lime-500",
    },
    {
        icon: <FaGithub />,
        name: "GitHub",
        color: "from-black to-slate-600",
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
                        Building Modern
                        <br />

                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            Web Applications
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-8 text-lg leading-relaxed text-slate-400">
                        I’m Jasvinder Singh, a Frontend Developer at RightAds Digital with experience building responsive websites, integrating APIs, and deploying production-ready applications.
                    </p>

                    <p className="mt-6 text-lg leading-relaxed text-slate-400">
                        Beyond my professional work, I enjoy building full-stack applications using the MERN stack and continuously exploring modern technologies like Next.js and TypeScript.
                    </p>
                    <div className="mt-10 grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm text-slate-500">
                                Location
                            </p>

                            <h4 className="mt-2 text-lg font-semibold text-white">
                                Kota, Rajasthan
                            </h4>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Experience
                            </p>

                            <h4 className="mt-2 text-lg font-semibold text-white">
                                Frontend Developer
                            </h4>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Education
                            </p>

                            <h4 className="mt-2 text-lg font-semibold text-white">
                                BCA Graduate
                            </h4>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">
                                Focus
                            </p>

                            <h4 className="mt-2 text-lg font-semibold text-white">
                                MERN Stack
                            </h4>
                        </div>
                    </div>

                    {/* Highlight Cards */}

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
                                Tech Stack
                            </p>

                            <h3 className="mt-4 text-3xl font-black">
                                Technologies I Work With
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

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;