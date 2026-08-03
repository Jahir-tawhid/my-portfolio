const About = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-6 relative bg-cover bg-[left_center] bg-no-repeat overflow-hidden"
      style={{
        backgroundColor: "#0d1117",
        backgroundImage: `linear-gradient(to bottom, rgba(13, 17, 23, 0.25), rgba(13, 17, 23, 0.45)), url('${baseUrl}assets/heroPic.PNG')`,
      }}
    >
      <div className="max-w-5xl mx-auto w-full z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl md:text-8xl font-black text-center mb-8 text-blue-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] tracking-wider uppercase">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="bg-slate-950/85 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-red-500/40 shadow-2xl leading-relaxed text-red-500 text-xl md:text-2xl w-full font-bold">
          <p className="mb-6 text-2xl md:text-3xl text-green-500 font-extrabold leading-snug">
            Full-Stack Web Developer | AI-Enhanced Next.js & React Specialist |
            SaaS Solutions Expert
          </p>

          <p className="mb-6 leading-relaxed text-red-500">
            I am a dedicated Full-Stack Web Developer from June 2024 with a
            passion for building high-performance, scalable, and AI-driven SaaS
            applications. My core expertise lies in Next.js (App Router) and
            React.js, where I transform complex business requirements into
            seamless, user-centric digital experiences.
          </p>

          <p className="leading-relaxed text-red-500">
            With a strong focus on Functional Logic and Workflow Automation, I
            create intuitive designs that solve real-world problems. I am
            currently enhancing my solutions with AI integrations (OpenAI/Gemini
            APIs) to build the next generation of smart, automated software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
