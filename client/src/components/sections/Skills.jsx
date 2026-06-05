import { motion } from "framer-motion";
import { techStack } from "../../data/techStack";

const Skills = () => {
  const duplicatedTechs = [...techStack, ...techStack];

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="px-5 text-center">
          <div
            className="
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
            <span className="mr-3 h-2 w-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(34,211,238,.8)]" />

            <span className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              Tech Stack
            </span>
          </div>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Technologies &
            <span className="text-gradient">
              {" "}Tools
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Modern technologies and tools I use to build
            scalable, performant and production-ready web
            applications.
          </p>
        </div>

        {/* Row 1 */}
        <div className="mt-20 overflow-hidden">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="
                  group
                  flex
                  min-w-[220px]
                  items-center
                  gap-4

                  rounded-3xl
                  border
                  border-white/10

                  bg-white/[0.03]

                  px-6
                  py-5

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-cyan-500/20
                  hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]
                "
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="
                    h-12
                    w-12
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                />

                <span className="font-medium text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="mt-8 overflow-hidden">
          <motion.div
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 70,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-6"
          >
            {duplicatedTechs.map((tech, index) => (
              <div
                key={`reverse-${tech.name}-${index}`}
                className="
                  group
                  flex
                  min-w-[220px]
                  items-center
                  gap-4

                  rounded-3xl
                  border
                  border-white/10

                  bg-white/[0.03]

                  px-6
                  py-5

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-2
                  hover:border-purple-500/20
                  hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)]
                "
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="
                    h-12
                    w-12
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-110
                    group-hover:-rotate-6
                  "
                />

                <span className="font-medium text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;