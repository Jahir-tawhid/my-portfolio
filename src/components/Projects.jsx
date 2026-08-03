import { projectsData } from "../data/projectsData";

const Projects = () => {
  const baseUrl = import.meta.env.BASE_URL || "/";

  const getImagePath = (imagePath) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
      return imagePath;
    }
    const cleanPath = imagePath.startsWith("/")
      ? imagePath.slice(1)
      : imagePath;

    // Ensure properly formatted path for base URL
    const formattedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return `${formattedBase}${cleanPath}`;
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Recent <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden bg-gray-800">
                <img
                  src={getImagePath(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.id}. {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors border border-gray-700"
                  >
                    <i className="fab fa-github mr-2"></i>GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-500 hover:bg-cyan-600 text-gray-900 text-sm font-semibold py-2 rounded-lg transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
