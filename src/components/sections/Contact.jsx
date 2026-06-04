import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl">
                <span className="mr-2 h-2 w-2 rounded-full bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(34,211,238,.8)]" />

                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                  Contact
                </p>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-8 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Let's Build
              <br />
              <span className="text-gradient">Something Amazing</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg"
            >
              Whether you need a modern website, a full-stack application, or
              just want to discuss a project, I’m always open to meaningful
              conversations and exciting opportunities.
            </motion.p>

            <motion.div variants={itemVariants}>
              {/* Availability */}
              <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
                <span className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,.8)]" />
                <span className="text-white">Available for New Opportunities</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/50">
                Connect With Me
              </p>

              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className="
                        group flex h-14 w-14 items-center justify-center rounded-2xl
                        border border-white/10 bg-white/5 text-xl text-white/90
                        backdrop-blur-xl transition-all duration-300
                        hover:-translate-y-1 hover:border-cyan-500/20
                        hover:bg-white/10 hover:text-white
                      "
                    >
                      <Icon className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
            className="
              relative overflow-hidden rounded-[32px] border border-white/10
              bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl
            "
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(34,211,238,.12), transparent 50%)",
              }}
            />

            {/* top highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

            <div className="relative z-10">
              <motion.div variants={itemVariants}>
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                  Send Message
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  Start a Conversation
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Fill out the form below and I’ll get back to you as soon as
                  possible.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="mt-8 space-y-5"
              >
                <motion.div
                  variants={itemVariants}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-white/70">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      className="
                        w-full rounded-2xl border border-white/10 bg-white/5
                        px-5 py-4 text-white outline-none transition-all
                        placeholder:text-white/35
                        focus:border-cyan-500/30 focus:bg-white/[0.07]
                      "
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-white/70">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="
                        w-full rounded-2xl border border-white/10 bg-white/5
                        px-5 py-4 text-white outline-none transition-all
                        placeholder:text-white/35
                        focus:border-cyan-500/30 focus:bg-white/[0.07]
                      "
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="mb-2 block text-sm text-white/70">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project inquiry / collaboration"
                    className="
                      w-full rounded-2xl border border-white/10 bg-white/5
                      px-5 py-4 text-white outline-none transition-all
                      placeholder:text-white/35
                      focus:border-cyan-500/30 focus:bg-white/[0.07]
                    "
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="mb-2 block text-sm text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="
                      w-full resize-none rounded-2xl border border-white/10
                      bg-white/5 px-5 py-4 text-white outline-none transition-all
                      placeholder:text-white/35
                      focus:border-cyan-500/30 focus:bg-white/[0.07]
                    "
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="
                      group flex w-full items-center justify-center gap-3
                      rounded-2xl px-6 py-4 font-semibold text-white
                      transition-all duration-300 hover:-translate-y-1
                      hover:shadow-[0_18px_45px_rgba(6,182,212,0.25)]
                    "
                    style={{
                      background:
                        "linear-gradient(135deg,var(--accent-cyan),var(--accent-blue))",
                    }}
                  >
                    <Send
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                    Send Message
                  </button>

                  <p className="mt-4 text-center text-sm text-white/45">
                    Usually replies within 24 hours.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;