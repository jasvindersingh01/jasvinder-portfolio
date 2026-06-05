// src/components/sections/Hero.jsx

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

import { MoveRight, FileText } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import profile from "../../assets/profile/dp.png";

const techStack = [
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
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "from-green-500 to-lime-500",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] px-5 pt-32 pb-20 text-white"
    >
      {/* ===== Background Effects ===== */}

      {/* Glow Orbs */}
      <div className="absolute top-20 left-10 h-9
      2 w-92 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="stars-layer">
        {[...Array(120)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>


      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* ================= LEFT ================= */}

        <div>
          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border px-4 py-2 text-sm uppercase tracking-[0.3em] backdrop-blur-xl"
            style={{
              borderColor: "rgba(34,211,238,.2)",
              background: "rgba(34,211,238,.08)",
              color: "var(--accent-cyan)",
            }}
          >
            Frontend & MERN Stack Developer
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            Jasvinder
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Singh
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-2xl font-semibold md:text-3xl"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Building Production Web Apps",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400"
          >
            Frontend Developer at RightAds Digital, building modern and responsive websites using React and modern web technologies. Beyond my professional work, I enjoy creating full-stack applications with the MERN stack and exploring new technologies like Next.js and TypeScript.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            {/* Primary */} 
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_0_40px_rgba(59,130,246,0.45)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <MoveRight
                  size={18}
                  className="
  transition-all
  duration-300
  group-hover:translate-x-2
  "
                />
              </span>

              <span className="absolute inset-0 translate-x-[-120%] bg-white/20 skew-x-12 transition duration-700 group-hover:translate-x-[120%]" />
            </a>

            {/* Secondary */}
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    rounded-2xl
    border
    border-white/10
    bg-white/5
    px-7
    py-4
    text-sm
    font-semibold
    text-white
    backdrop-blur-xl
    transition-all
    duration-300
    hover:bg-white/10
  "
>
  <span className="flex items-center gap-2">
    <FileText
      size={18}
      className="transition-transform duration-300 group-hover:scale-110"
    />

    View Resume
  </span>
</a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/jasvindersingh01"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400/30"
            >
              <FaGithub />

              <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl text-white backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400/30"
            >
              <FaLinkedinIn />

              <div className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 blur-xl transition duration-300 group-hover:opacity-100" />
            </a>
          </motion.div>

          {/* Tech Stack Pills */}

        </div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center"
        >
          {/* Glow Layer */}
          <div
            className="absolute h-[520px] w-[520px] rounded-full blur-[140px] opacity-30"
            style={{
              background:
                "radial-gradient(circle,var(--accent-cyan),transparent 70%)",
            }}
          />

          {/* Ring 1 */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
            className="
      absolute
      h-[470px]
      w-[470px]
      rounded-full
      border
      border-white/10
    "
          />

          {/* Ring 2 */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            className="
      absolute
      h-[550px]
      w-[550px]
      rounded-full
      border
      border-cyan-500/10
    "
          />

          {/* Main Image */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative z-20"
          >
            <img
              src={profile}
              alt="Jasvinder Singh"
              className="
        h-[420px]
        w-[420px]
        rounded-full
        object-cover
        border
        border-white/10
      "
            />
          </motion.div>


        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 hidden md:block"
      >
        <div className="h-12 w-6 rounded-full border border-white/10 backdrop-blur-sm">
          <div
            className="
      mx-auto
      mt-2
      h-2
      w-2
      rounded-full
      bg-gradient-to-b
      from-cyan-400
      to-purple-500
      shadow-[0_0_15px_rgba(34,211,238,.8)]
      "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;