
const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Assessment Data Extraction",
      description: "Used LLMs (OpenAI + Gemini) to extract text from assessment screenshots with 97% accuracy, reducing manual work by 95%",
      tech: "OpenAI, Gemini, Python, Streamlit",
      icon: "📊",
      date: "Jan 2024",
      link: "#"
    },
    {
      title: "Sales Call Auditing Tool",
      description: "Built a tool to analyze sales call quality using Whisper and OpenAI, identifying deviations from scripts and defining quality metrics",
      tech: "Whisper, OpenAI, Python, Dashboards",
      icon: "📞",
      date: "Jun 2024 – Present",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-on-scroll group cursor-pointer hover:bg-white/15"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="text-5xl mb-6">{project.icon}</div>
              <div className="mb-4">
                <h3 className="text-xl font-medium mb-2 group-hover:text-blue-200 transition-colors text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-3">{project.date}</p>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.split(', ').map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
