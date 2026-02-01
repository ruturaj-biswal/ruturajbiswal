import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 relative">
      <div className="container mx-auto max-w-7xl">

        {/* SECTION LABEL */}
        <p className="text-xs tracking-widest text-muted-foreground mb-10">
          MORE ABOUT ME
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500">
              <img
                src="/scrool.jpeg"
                alt="Profile"
                className="
                  w-80 md:w-80 lg:w-80
                  aspect-[3/4]
                  object-cover
                  rounded-2xl
                "
              />
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="space-y-5 text-center lg:text-left">

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi there! I&apos;m{" "}
              <span className="text-primary">Ruturaj</span>
            </h2>

            {/* ABOUT TEXT — SMALLER & CLEAN */}
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I’m a full-stack developer focused on building impactful and
              user-friendly applications using modern technologies. I enjoy
              solving DSA problems to sharpen my problem-solving skills.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              Currently learning DevOps to understand real-world systems and
              deployments, while sharing my journey through content creation.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I believe in consistency, continuous growth, and building
              something meaningful every day.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 justify-center lg:justify-start pt-2">
              <a href="https://www.linkedin.com/in/ruturajbiswal1/" className="text-muted-foreground hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ruturaj-biswal" className="text-muted-foreground hover:text-primary transition">
                <Github size={20} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" className="text-muted-foreground hover:text-primary transition">
                <Mail size={20} />
              </a>
            </div>

            {/* TAG PILLS */}
            <div className="flex gap-3 justify-center lg:justify-start pt-3 flex-wrap">
              <span className="px-5 py-1.5 rounded-full border border-primary text-primary text-sm">
                I Lift
              </span>
              <span className="px-5 py-1.5 rounded-full bg-primary text-black text-sm font-medium">
                I Code
              </span>
              <span className="px-5 py-1.5 rounded-full border border-primary text-primary text-sm">
                I Vibin&apos;
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
