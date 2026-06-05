import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-32"
    >
      {/* Glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="text-center">
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
            <span
              className="
                mr-2
                h-2
                w-2
                rounded-full
                bg-[var(--accent-cyan)]
                shadow-[0_0_12px_var(--accent-cyan)]
              "
            />

            <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
              Experience
            </p>
          </div>

          <h2 className="mt-6 text-5xl font-black md:text-6xl">
            Professional
            <span className="text-gradient">
              {" "}
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-[var(--text-secondary)]">
            My professional experience building production-ready
            websites and modern web applications.
          </p>
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            mx-auto
            mt-20
            max-w-5xl
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-xl
          "
        >
          {/* Hover Glow */}
          <div
            className="
              absolute
              inset-0
              opacity-50
            "
            style={{
              background:
                "radial-gradient(circle at top right, rgba(34,211,238,.08), transparent 50%)",
            }}
          />

          <div className="relative z-10">
            {/* Top */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness
                    size={22}
                    className="text-[var(--accent-cyan)]"
                  />

                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                    Current Role
                  </p>
                </div>

                <h3 className="mt-3 text-3xl font-black">
                  Frontend Developer
                </h3>

                <p className="mt-2 text-lg text-slate-400">
                  RightAds Digital
                </p>
              </div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                "
              >
                <CalendarDays size={18} />

               <span className="text-sm text-slate-300">
  Nov 2026 – Present · 6+ Months
</span>
              </div>
            </div>

            {/* Description */}
            <p className="mt-8 max-w-3xl leading-relaxed text-[var(--text-secondary)]">
              Building responsive websites, creating modern user
              interfaces, integrating APIs, implementing contact
              forms, and deploying production-ready projects.
              Focused on delivering fast, scalable, and user-friendly
              web experiences.
            </p>

            {/* Responsibilities */}
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                "React Website Development",
                "Responsive UI Implementation",
                "API Integration",
                "Contact Form Setup",
                "Domain & Hosting Configuration",
                "Website Deployment",
                "Performance Optimization",
                "Modern Frontend Development",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-4
                  "
                >
                  <div
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[var(--accent-cyan)]
                    "
                  />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Learning */}
            <div className="mt-12">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent-cyan)]">
                Currently Exploring
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Advanced React",
                  "Full Stack Architecture",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;