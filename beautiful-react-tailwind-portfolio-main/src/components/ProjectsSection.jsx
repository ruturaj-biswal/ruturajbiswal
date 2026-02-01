import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "Full-Stack Web App",
    subtitle: "Production-ready application with backend integration.(This is Cool Big Project)",
    image: "/projects/app.png",
    githubUrl: "https://github.com/ruturaj-biswal/Medical_maj",
    description:
      "End-to-end full-stack application focusing on performance and scalability.",
    points: [
      "Secure authentication",
      "REST API integration",
      "Database modeling",
      "15 Cool Feature",
      "Responsive UI",
    ],
  },
    {
    id: 2,
    title: "Developer Portfolio",
    subtitle: "Personal developer portfolio with animations.",
    image: "/projects/portfolio.png",
    githubUrl: "https://github.com/your-username/portfolio",
    description:
      "A modern animated portfolio built with React, Tailwind and Flask.",
    points: [
      "Animated hero & sections",
      "Tech stack showcase",
      "Projects & GitHub integration",
      "Dark mode support",
      "Optimized performance",
    ],
  },
  // {
  //   id: 3,
  //   title: "Hayat Interiors",
  //   subtitle: "Premium home interiors design studio based in Bangalore.",
  //   image: "/projects/hayat.png",
  //   githubUrl: "https://github.com/ruturaj-biswal/pvma",
  //   description:
  //     "Designed and developed a luxury portfolio website for a home interiors business.",
  //   points: [
  //     "Luxury portfolio with high-quality imagery",
  //     "Project filtering & category browsing",
  //     "Design process timeline",
  //     "Client testimonials & case studies",
  //     "Fully responsive across devices",
  //     "Inquiry & contact management system",
  //   ],
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-32 animate-fade-up">
          <p className="text-xs tracking-[0.35em] text-muted-foreground mb-4">
            CODE MEETS CREATIVITY
          </p>

          <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Crafted{" "}
            <span
              className="
                bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
                bg-clip-text text-transparent
                drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]
              "
            >
              Projects
            </span>
          </h2>
        </div>

        {/* PROJECTS */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
                grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                animate-project
                ${index % 2 === 0 ? "slide-left" : "slide-right"}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* IMAGE */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative group rounded-3xl overflow-hidden
                  border border-white/10 shadow-xl
                  transition-transform duration-700
                  hover:scale-[1.03]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                {/* HOVER OVERLAY */}
                <div className="
                  absolute inset-0 bg-black/50 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  flex items-center justify-center
                ">
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-black/70 text-white text-sm">
                    <Github size={18} />
                    View on GitHub
                  </div>
                </div>
              </a>

              {/* CONTENT */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold text-lg">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3">
                  {project.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start gap-3 text-lg"
                    >
                      <span className="text-primary mt-1 text-xl">+</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="
                    inline-flex items-center gap-2 text-primary text-lg
                    hover:underline pt-4
                  "
                >
                  View Repository <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 BOTTOM CTA */}
        <div className="mt-40 text-center animate-fade-up">
          <p className="
            text-4xl md:text-5xl lg:text-6xl
            font-extrabold
            mb-12
            leading-tight
          ">
            I’ve built{" "}
            <span
              className="
                bg-gradient-to-r from-purple-400 to-blue-400
                bg-clip-text text-transparent
                drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]
              "
            >
              20+
            </span>{" "}
            full-stack projects
          </p>

          <a
            href="https://github.com/ruturaj-biswal"
            target="_blank"
            className="
              inline-flex items-center gap-3
              px-14 py-5
              rounded-full
              border border-primary
              text-primary
              text-xl font-semibold
              transition-all duration-300
              hover:bg-primary hover:text-black
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
            "
          >
            View My GitHub <Github size={22} />
          </a>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out both;
        }
        .animate-project {
          opacity: 0;
          animation: fadeUp 1s ease-out forwards;
        }
        .slide-left { animation-name: slideLeft; }
        .slide-right { animation-name: slideRight; }
      `}</style>
    </section>
  );
};
