import { useEffect, useRef, useState } from "react";
import { Triangle } from "lucide-react";

const techStack = [
  // Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Tailwind CSS",

  // Backend
  "Java",
  "Spring Boot",
  "Python",
  "Django",

  // Databases
  "MongoDB",
  "MySQL",

  // DevOps & Cloud
  "Linux",
  "Docker",
  "CI/CD",
  "Cloud",

  // Tools & Platforms
  "Git",
  "GitHub",
  "npm",
  "REST API",

  // Design & 3D
  "Figma",
  "Blender",
];

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTech, setActiveTech] = useState(null);

  /* SCROLL-TRIGGER (RUN ONCE) */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 px-4 relative"
    >
      <div className="container mx-auto max-w-6xl text-center">

        {/* FLOATING TRIANGLE */}
        <div className="flex justify-center mb-8">
          <div className="p-6 rounded-full border border-primary/40
                          animate-float shadow-[0_0_35px_rgba(168,85,247,0.45)]">
            <Triangle className="h-10 w-10 text-primary" />
          </div>
        </div>

        {/* LABEL (BIGGER) */}
        <p
          className={`
            text-sm md:text-base
            tracking-[0.35em]
            text-muted-foreground mb-4
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          BETTER THAN YESTERDAY
        </p>

        {/* TITLE (MUCH BIGGER) */}
        <h2
          className={`
            text-5xl md:text-6xl lg:text-7xl
            font-extrabold mb-20
            transition-all duration-700 delay-150
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          My <span className="text-primary">Tech Stack</span>
        </h2>

        {/* TECH PILLS */}
        <div className="flex flex-wrap justify-center gap-5 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={index}
              onClick={() => setActiveTech(tech)}
              style={{ animationDelay: `${index * 50}ms` }}
              className={`
                px-6 py-3
                rounded-full
                border
                text-base md:text-lg
                font-semibold
                cursor-pointer
                backdrop-blur-sm
                transition-all duration-300
                animate-pill
                ${visible ? "opacity-100" : "opacity-0"}
                ${
                  activeTech === tech
                    ? "border-primary text-primary shadow-[0_0_25px_rgba(168,85,247,0.6)] scale-110"
                    : "border-white/10 text-white/70 hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-[0_0_22px_rgba(168,85,247,0.45)]"
                }
              `}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-24 flex justify-center">
          <div className="w-52 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-70 animate-pulse" />
        </div>

      </div>

      {/* LOCAL ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pill {
          from {
            opacity: 0;
            transform: translateY(14px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pill {
          animation: pill 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};
