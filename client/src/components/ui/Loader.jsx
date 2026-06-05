import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const percentRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      {
        y: 80,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      lineRef.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 2.5,
        ease: "power3.inOut",
      },
      "-=0.5"
    );

    let count = 0;

    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 8) + 1;

      if (count >= 100) {
        count = 100;
        clearInterval(interval);

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          ease: "power4.out",
          onComplete: () => {
            onComplete?.();
          },
        });
      }

      setProgress(count);
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] overflow-hidden style={{
  background: `
  radial-gradient(circle at top left,
  rgba(34,211,238,.12),
  transparent 35%),

  radial-gradient(circle at top right,
  rgba(59,130,246,.12),
  transparent 35%),

  radial-gradient(circle at bottom center,
  rgba(139,92,246,.12),
  transparent 40%),

  var(--bg-primary)
  `
}} flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div
          ref={textRef}
          className="relative text-center"
        >
          <h1 className="text-6xl md:text-8xl font-black">
            {"<"}
            <span className="text-gradient">
              JS
            </span>
            {" />"}
          </h1>

          {/* Glow */}
          <div className="absolute inset-0 blur-3xl opacity-50 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
        </div>

        {/* Loading Text */}
        <p className="mt-8 text-sm md:text-base tracking-[0.35em] uppercase text-slate-400">
          Loading Creative Universe
        </p>

        {/* Progress Bar */}
        <div className="mt-8 w-[280px] md:w-[360px] h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div
            ref={lineRef}
            className="h-full w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />
        </div>

        {/* Percentage */}
        <div
          ref={percentRef}
          className="mt-5 text-white text-lg font-medium tracking-widest"
        >
          {progress}%
        </div>
      </div>

      {/* Floating Blur Orbs */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default Loader;