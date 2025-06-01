
const ProjectsSection = () => {
  const projects = [
    {
      title: "User Engagement Dashboard",
      description: "A Looker Studio dashboard visualizing daily user segments",
      tech: "BigQuery, Looker Studio",
      icon: "📊",
      link: "#"
    },
    {
      title: "NPS Prediction Model",
      description: "ML model to identify churn-risk users based on platform activity",
      tech: "Python, Scikit-learn",
      icon: "🤖",
      link: "#"
    },
    {
      title: "Sales Funnel Analyzer",
      description: "ETL + dashboard to visualize drop-offs in the sales pipeline",
      tech: "BigQuery, DBT, Looker",
      icon: "📈",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-on-scroll group cursor-pointer hover:bg-white/15"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-blue-200 transition-colors text-white">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
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
