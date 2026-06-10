import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/jasvindersingh01",
      hover:
        "hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]",
    },

    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/jasvindersingh01",
      hover:
        "hover:text-[#0A66C2] hover:shadow-[0_0_30px_rgba(10,102,194,0.45)]",
    },

    {
      icon: <HiOutlineMail />,
      href: "mailto:jasvindersingh0901@gmail.com",
      hover:
        "hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]",
    },

    {
      icon: <HiOutlinePhone />,
      href: "tel:+919057238468",
      hover:
        "hover:text-green-400 hover:shadow-[0_0_30px_rgba(74,222,128,0.45)]",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        {/* Brand */}
        <div className="text-center">
          <h2
            className="
              text-2xl
              font-black
              md:text-3xl
              lg:text-4xl
              leading-none
            "
          >
            <span className="text-gradient">
              Jasvinder Singh
            </span>
          </h2>

          <p className="mt-5 text-lg text-[var(--text-secondary)]">
            Frontend & MERN Stack Developer
          </p>
        </div>

        {/* Socials */}
        <div className="mt-12 flex justify-center gap-5">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`
                group
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-white/10
                bg-white/5
                text-xl
                text-slate-400
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/20
                ${social.hover}
              `}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="mailto:jasvindersingh0901@gmail.com"
            className="
      group flex items-center gap-3
      rounded-full border border-white/10
      bg-white/5 px-5 py-3
      text-slate-300 backdrop-blur-xl
      transition-all duration-300
      hover:border-cyan-400/30
      hover:text-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
    "
          >
            <HiOutlineMail className="text-xl" />
            <span>jasvindersingh0901@gmail.com</span>
          </a>

          <a
            href="tel:+919057238468"
            className="
      group flex items-center gap-3
      rounded-full border border-white/10
      bg-white/5 px-5 py-3
      text-slate-300 backdrop-blur-xl
      transition-all duration-300
      hover:border-green-400/30
      hover:text-green-400
      hover:shadow-[0_0_30px_rgba(74,222,128,0.25)]
    "
          >
            <HiOutlinePhone className="text-xl" />
            <span>+91 90572 38468</span>
          </a>

          <div
            className="
      flex items-center gap-3
      rounded-full border border-white/10
      bg-white/5 px-5 py-3
      text-slate-300 backdrop-blur-xl
      transition-all duration-300
      hover:border-orange-400/30
      hover:text-orange-400
      hover:shadow-[0_0_30px_rgba(251,146,60,0.25)]
    "
          >
            <HiOutlineLocationMarker className="text-xl" />
            <span>Kota, Rajasthan, India</span>
          </div>
          <p className="mt-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Available For Freelance & Full Stack Opportunities
          </p>
        </div>



        {/* Nav Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                flex
                items-center
                gap-1
                text-sm
                uppercase
                tracking-[0.25em]
                text-slate-400
                transition-all
                duration-300
                hover:text-white
              "
            >
              {link.name}

              <ArrowUpRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Jasvinder Singh.
            All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-slate-500">
            Developed with

            <FaHeart
              className="
                text-red-500
                animate-pulse
              "
            />

            by Me
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;