import { motion, useReducedMotion } from "framer-motion";
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
import {
    MapPin,
    BriefcaseBusiness,
    GraduationCap,
    Code2,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const skills = [
    { icon: <FaReact />, name: "React", color: "from-cyan-400 to-blue-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "from-gray-600 to-gray-300" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "from-sky-400 to-cyan-500" },
    { icon: <SiJavascript />, name: "JavaScript", color: "from-yellow-300 to-yellow-500" },
    { icon: <SiTypescript />, name: "TypeScript", color: "from-blue-400 to-blue-600" },
    { icon: <FaNodeJs />, name: "Node.js", color: "from-green-400 to-emerald-500" },
    { icon: <SiExpress />, name: "Express", color: "from-slate-500 to-slate-700" },
    { icon: <SiMongodb />, name: "MongoDB", color: "from-green-500 to-lime-500" },
    { icon: <FaGithub />, name: "GitHub", color: "from-slate-500 to-slate-800" },
];

const details = [
    { icon: MapPin, label: "Location", value: "Kota, Rajasthan" },
    { icon: BriefcaseBusiness, label: "Role", value: "Frontend Developer" },
    { icon: GraduationCap, label: "Education", value: "BCA Graduate" },
    { icon: Code2, label: "Focus", value: "MERN Stack" },
];

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

// Stagger container — staggers all direct children
const staggerContainer = (stagger = 0.1, delayChildren = 0.2) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren: stagger,
            delayChildren,
        },
    },
});

const detailCardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

const skillCardVariant = {
    hidden: { opacity: 0, scale: 0.7, rotate: -6 },
    show: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 130, damping: 14 },
    },
};

// ─── Component ───────────────────────────────────────────────────────────────

const About = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#050816] px-5 py-28 text-white"
            aria-labelledby="about-heading"
        >
            {/* ── Background Effects ── */}
            <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/10 blur-[160px]" />

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

                {/* ══════════════════════════════ LEFT ══════════════════════════════ */}

                <motion.div
                    variants={shouldReduceMotion ? undefined : fadeLeft}
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        className="
                            mb-5
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-5
                            py-2.5
                            backdrop-blur-xl
                        "
                    >
                        <span
                            className="
                            mr-3
                            h-2
                            w-2
                            rounded-full
                            bg-[var(--accent-cyan)]
                            shadow-[0_0_12px_rgba(34,211,238,.8)]
    "
                        />

                        <span className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                            About Me
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h2
                        id="about-heading"
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        className="text-4xl font-black leading-tight md:text-6xl"
                    >
                        Building Modern
                        <br />
                        <motion.span
                            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            Web Applications
                        </motion.span>
                    </motion.h2>

                    {/* Paragraphs */}
                    <motion.p
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-lg leading-relaxed text-slate-400"
                    >
                        I'm Jasvinder Singh, a Frontend Developer at RightAds Digital with
                        experience building responsive websites, integrating APIs, and
                        deploying production-ready applications.
                    </motion.p>

                    <motion.p
                        variants={shouldReduceMotion ? undefined : fadeUp}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-lg leading-relaxed text-slate-400"
                    >
                        Beyond my professional work, I enjoy building full-stack
                        applications using the MERN stack and continuously exploring modern
                        technologies like Next.js and TypeScript.
                    </motion.p>

                    {/* Detail Cards — staggered */}
                    <motion.div
                        variants={shouldReduceMotion ? undefined : staggerContainer(0.12, 0.4)}
                        initial={shouldReduceMotion ? false : "hidden"}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="mt-10 grid gap-4 sm:grid-cols-2"
                    >
                        {details.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.label}
                                    variants={shouldReduceMotion ? undefined : detailCardVariant}
                                    whileHover={
                                        shouldReduceMotion
                                            ? undefined
                                            : { y: -6, transition: { type: "spring", stiffness: 200 } }
                                    }
                                    className="
                    group rounded-2xl border border-white/10 bg-white/[0.03]
                    p-5 backdrop-blur-xl transition-colors duration-300
                    hover:border-cyan-500/20
                  "
                                >
                                    <motion.div
                                        whileHover={shouldReduceMotion ? undefined : { scale: 1.2, rotate: 10 }}
                                        transition={{ type: "spring", stiffness: 250 }}
                                        className="mb-4 inline-block text-cyan-400"
                                    >
                                        <Icon size={22} />
                                    </motion.div>

                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                        {item.label}
                                    </p>

                                    <h4 className="mt-2 text-lg font-semibold text-white">
                                        {item.value}
                                    </h4>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* ══════════════════════════════ RIGHT ═════════════════════════════ */}

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