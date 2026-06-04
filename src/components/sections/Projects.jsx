import { projects } from "../../data/projects";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

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
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
            Featured Projects
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Selected Work &
            <span className="text-gradient">
              {" "}
              Case Studies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            A collection of frontend and full-stack projects built
            using modern technologies and real-world development
            practices.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-28 space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className={`
                grid
                items-center
                gap-14
                lg:grid-cols-2
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* Image */}
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-cyan)]">
                  {project.category}
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  {project.title}
                </h3>

                <p className="mt-6 leading-relaxed text-[var(--text-secondary)]">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((item, idx) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={idx}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-2
                          backdrop-blur-xl
                        "
                      >
                        <Icon className="text-lg" />

                        <span className="text-sm">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Features */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.features.map(
                    (feature, idx) => (
                      <span
                        key={idx}
                        className="
                          rounded-full
                          border
                          border-white/10
                          px-4
                          py-2
                          text-sm
                          text-[var(--text-secondary)]
                        "
                      >
                        {feature}
                      </span>
                    )
                  )}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      px-6
                      py-3
                      font-medium
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-cyan),var(--accent-blue))",
                    }}
                  >
                    View Project

                    <ArrowUpRight size={18} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      px-6
                      py-3
                      backdrop-blur-xl
                    "
                  >
                    GitHub

                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;