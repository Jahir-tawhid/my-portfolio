const Hero = ({ setActiveTab, onOpenContact }) => {
  // Dynamically resolve base URL to ensure asset paths work seamlessly on GitHub Pages subpaths
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section
      id="home"
      className="max-h-screen flex items-center justify-center py-12 px-6 relative bg-contain bg-center bg-no-repeat overflow-hidden -mt-[73px] pt-[73px]"
      style={{
        backgroundColor: "#0d1117",
        backgroundImage: `linear-gradient(to bottom, rgba(13, 17, 23, 0.65), rgba(13, 17, 23, 0.85)), url('${baseUrl}assets/heroPic1.PNG')`,
      }}
    >
      {}
      <div className="text-center max-w-3xl z-10">
        {/* Profile Image with Dynamic Asset URL */}
        <div className="relative w-40 h-40 md:w-44 md:h-44 mx-auto mb-6 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-xl shadow-cyan-500/20">
          <img
            src={`${baseUrl}assets/profile.png`}
            alt="Md. Jahirul Islam"
            className="w-full h-full object-cover rounded-full bg-slate-900"
          />
        </div>

        {}
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-red-500">
          Hi, I'm{" "}
          <span className="text-red-500 bg-clip-text bg-gradient-to-r from-cyan-400 to-red-500">
            Md. Jahirul Islam
          </span>
        </h1>

        {/* Subtitle */}
        <h3 className="text-lg md:text-2xl font-semibold text-green-500 mb-6 leading-relaxed max-w-3xl mx-auto">
          Full-Stack Web Developer | AI-Enhanced Next.js & React Specialist |
          SaaS Solutions Expert
        </h3>

        <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
          I build clean, responsive, and scalable web applications designed for
          seamless user experiences.
        </p>

        {}
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("projects")}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-gray-950 font-bold px-7 py-3 rounded-xl shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
          </button>
          <button
            onClick={onOpenContact}
            className="bg-gray-800/80 hover:bg-gray-800 text-gray-200 border border-gray-700 font-semibold px-7 py-3 rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
