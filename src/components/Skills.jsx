const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
    { name: "React.js", icon: "fab fa-react", color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: "fas fa-code", color: "text-teal-400" },
  ];

  const backendSkills = [
    {
      name: "Next.js",
      icon: "fas fa-arrow-right-to-bracket",
      color: "text-white",
    },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-400" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" },
    { name: "Mongoose", icon: "fas fa-cubes", color: "text-red-500" },
    { name: "Firebase", icon: "fas fa-fire", color: "text-amber-500" },
  ];

  return (
    <section
      id="skills"
      className="py-16 px-6 relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(13, 17, 23, 0.92), rgba(13, 17, 23, 0.95)), url('/assets/ws-bg.png')",
      }}
    >
      <div className="max-w-6xl mx-auto z-10 w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            My <span className="text-cyan-400">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Full-Stack Web Developer | AI-Enhanced Next.js & React Specialist |
            SaaS Solutions Expert
          </p>
        </div>

        {/* Frontend Category */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-cyan-400 mb-6 pl-2 border-l-4 border-cyan-400">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/80 backdrop-blur-md border border-gray-800 rounded-xl p-5 text-center shadow-lg hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <i
                  className={`${skill.icon} text-4xl mb-3 ${skill.color} block`}
                ></i>
                <span className="text-sm font-semibold text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend & Database Category */}
        <div>
          <h3 className="text-xl font-bold text-cyan-400 mb-6 pl-2 border-l-4 border-cyan-400">
            Backend & Database
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-900/80 backdrop-blur-md border border-gray-800 rounded-xl p-5 text-center shadow-lg hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
              >
                <i
                  className={`${skill.icon} text-4xl mb-3 ${skill.color} block`}
                ></i>
                <span className="text-sm font-semibold text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
