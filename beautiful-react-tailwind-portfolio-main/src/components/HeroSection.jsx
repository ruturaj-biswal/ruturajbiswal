export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Ruturaj
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Biswal
            </span>
          </h1>

          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white opacity-0 animate-fade-in-delay-3">
            Turning thoughts into
            <br />
            <span className="italic font-light bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
              beautiful web stories
            </span>
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* SCROLL IMAGE (LARGER SIZE) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <img
          src="/scrool2.jpeg"
          alt="Scroll indicator"
          className="
            w-20 h-20       
            md:w-24 md:h-24     
            opacity-90
            drop-shadow-[0_0_16px_rgba(168,85,247,0.7)]
          "
        />
      </div>
    </section>
  );
};
