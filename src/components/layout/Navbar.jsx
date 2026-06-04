import {
  Home,
  User,
  Code2,
  Briefcase,
  FolderKanban,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Code2,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 z-50 w-full px-4 md:px-8 pt-5"
      >
        <div className="mx-auto max-w-7xl">
          <div
            className={clsx(
              "relative overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300",
              scrolled
                ? "border-[var(--border)] bg-[rgba(3,7,18,.75)] shadow-[var(--shadow-soft)]"
                : "border-[var(--border)] bg-[var(--surface)]"
            )}
          >
            {/* Glow Effects */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(34,211,238,.08), rgba(139,92,246,.08), rgba(59,130,246,.08))",
              }}
            />

            <div className="relative flex items-center justify-between px-5 py-4">
              {/* Logo */}
              <motion.a
                href="#home"
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center"
              >
                <span className="text-3xl font-black text-white">
                  J
                </span>

                <span className="text-gradient text-3xl font-black">
                  S
                </span>

                <div
                  className="absolute inset-0 opacity-30 blur-2xl"
                  style={{
                    background: "var(--accent-blue)",
                  }}
                />
              </motion.a>

              {/* Desktop Nav */}
              <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:flex items-center gap-8
              before:absolute
before:inset-0
before:bg-gradient-to-r
before:from-transparent
before:via-white/5
before:to-transparent
before:translate-x-[-100%]
hover:before:translate-x-[100%]
before:transition-all
before:duration-1000
              ">
                {navLinks.map((link) => {
                  const Icon = link.icon;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setActive(link.name)}
                      className="group relative flex items-center gap-2 text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                    >
                      <Icon size={16} />

                      <span>{link.name}</span>

                      <span
                        className={clsx(
                          "absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300",
                          active === link.name
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        )}
                      />
                    </a>
                  );
                })}
              </nav>

              {/* Right Side */}
              <div className="hidden lg:flex items-center gap-4">
                {/* Hire Me Button */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href="#contact"
                  className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.45)] transition"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me

                    <ArrowUpRight
                      size={18}
                      className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  {/* Shine */}
                  <span className="absolute inset-0 translate-x-[-120%] bg-white/20 skew-x-12 transition duration-700 group-hover:translate-x-[120%]" />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative h-12 w-12 lg:hidden"
              >
                <span
                  className={clsx(
                    "absolute left-2 top-3 h-[2px] w-8 bg-white transition-all duration-300",
                    menuOpen && "top-5 rotate-45"
                  )}
                />

                <span
                  className={clsx(
                    "absolute left-2 top-5 h-[2px] w-8 bg-white transition-all duration-300",
                    menuOpen && "opacity-0"
                  )}
                />

                <span
                  className={clsx(
                    "absolute left-2 top-7 h-[2px] w-8 bg-white transition-all duration-300",
                    menuOpen && "top-5 -rotate-45"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#050816]/95 backdrop-blur-2xl lg:hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setActive(link.name);
                  }}
                  className="group relative text-3xl font-bold text-white"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_35px_rgba(59,130,246,0.45)]"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;