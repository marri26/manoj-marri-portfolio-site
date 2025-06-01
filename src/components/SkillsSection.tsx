
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["SQL (BigQuery, DBT)", "Python", "Git", "GSheets", "Excel"]
    },
    {
      title: "Dashboards & BI",
      skills: ["Looker Studio", "Power BI", "Metabase"]
    },
    {
      title: "Python Packages",
      skills: ["Numpy", "Pandas", "Matplotlib", "Streamlit"]
    },
    {
      title: "Analytics & Automation",
      skills: ["ETL", "KPI Reporting", "Retention Analysis", "GA4", "Mixpanel"]
    },
    {
      title: "Generative AI",
      skills: ["OpenAI (Assistants API, Whisper)", "Gemini"]
    },
    {
      title: "Collaboration",
      skills: ["Stakeholder Communication", "Cross-functional Coordination", "Mentoring"]
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll text-white">Skills Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <h3 className="text-xl font-medium mb-6 text-center text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors duration-200 border border-white/20"
                  >
                    {skill}
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

export default SkillsSection;
