import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const headingVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Heading */}
        <motion.div
          className="text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div>
                       {/* Badge */}
                       <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
                         <span className="mr-2 h-2 w-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(34,211,238,.8)]" />
         
                         <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                           My Work
                         </p>
                       </div>
                     </motion.div>

          <h2 className="mt-4 text-5xl font-black md:text-6xl">
            Projects I've
            <span className="text-gradient"> Built</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--text-secondary)]">
            A showcase of full-stack applications and modern web experiences
            built with React, MERN Stack, and the technologies I use to solve
            real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="
                group overflow-hidden rounded-[32px] border border-white/10
                bg-white/[0.03] backdrop-blur-xl transition-all duration-500
                hover:border-cyan-500/20
                hover:shadow-[0_20px_80px_rgba(6,182,212,0.15)]
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-3xl font-black">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.tech.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <div
                        key={index}
                        className="
                          group/icon relative flex h-10 w-10 items-center
                          justify-center rounded-xl border border-white/10
                          bg-white/5 transition-all duration-300 hover:scale-110
                        "
                      >
                        <Icon className={`text-2xl ${tech.iconColor}`} />

                        <span
                          className="
                            absolute -top-10 left-1/2 -translate-x-1/2
                            whitespace-nowrap opacity-0 transition
                            group-hover/icon:opacity-100
                          "
                        >
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.features.slice(0, 10).map((feature) => (
                    <span
                      key={feature}
                      className="
                        rounded-full border border-white/10 bg-white/5
                        px-3 py-1.5 text-xs
                      "
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group flex-1 rounded-xl px-5 py-3 font-medium text-white
                      transition-all duration-300 hover:-translate-y-1
                      hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-cyan),var(--accent-blue))",
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Live Demo

                      <ArrowUpRight
                        size={18}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </span>
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group flex items-center justify-center gap-2 rounded-xl
                      border border-white/10 bg-white/5 px-5 backdrop-blur-xl
                      transition-all duration-300 hover:-translate-y-1
                      hover:border-white/20 hover:bg-white/10
                    "
                  >
                    <FaGithub
                      className="
                        text-lg transition-transform duration-300
                        group-hover:scale-110
                      "
                    />

                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;