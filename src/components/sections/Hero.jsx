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

import { ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

import profile from "../../assets/profile/dp.jpg";
import Meteors from "../effects/Meteors";

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
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[160px]" />

      {/* Galaxy Nebula Layer */}

      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[180px]" />

      <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[180px]" />

      <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[160px]" />

      {/* Stars */}

    <Meteors />


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
            className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-xl"
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
            className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl"
          >
            <TypeAnimation
              sequence={[
                "React Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Frontend Specialist",
                2000,
                "UI/UX Focused Builder",
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
            I build premium, high-performance web experiences using
            React, Tailwind CSS, Node.js, and modern frontend
            animations. Passionate about creating futuristic UI with
            smooth interactions and scalable full-stack architecture.
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
                View Projects
                <ArrowRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1"
                />
              </span>

              <span className="absolute inset-0 translate-x-[-120%] bg-white/20 skew-x-12 transition duration-700 group-hover:translate-x-[120%]" />
            </a>

            {/* Secondary */}
            <a
              href="/resume.pdf"
              download
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10"
            >
              Download Resume
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
              href="https://github.com/"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            {techStack.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                className="group relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 opacity-0 blur-xl transition duration-300 group-hover:opacity-100 bg-gradient-to-r ${item.color}`}
                />

                <span className="relative z-10 text-xl">
                  {item.icon}
                </span>

                <span className="relative z-10 text-sm font-medium text-slate-300">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
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
          className="relative flex justify-center"
        >
          {/* Glow Behind */}
          <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-[120px]" />

          {/* Rotating Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
            className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px]"
          >
            <div className="h-full w-full rounded-full bg-[#050816]" />
          </motion.div>

          {/* Image Card */}
          <motion.div
            whileHover={{
              y: -10,
              rotate: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-3 backdrop-blur-2xl"
          >
            {/* Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />

            <img
              src={profile}
              alt="Jasvinder Singh"
              className="relative z-10 h-[520px] w-[380px] rounded-[30px] object-cover"
            />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 h-32 w-52 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[70px]" />
          </motion.div>

          {/* Floating Badge 1 */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute top-10 -left-5 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl"
          >
            <p className="text-sm font-medium text-white">
              Full Stack MERN Engineer
            </p>
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
          duration: 1.8,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:flex"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/20">
          <div className="mt-2 h-3 w-3 rounded-full bg-cyan-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;