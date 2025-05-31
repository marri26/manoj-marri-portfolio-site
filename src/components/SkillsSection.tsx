
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      skills: ["Python", "SQL (BigQuery, DBT)", "Git", "Google Data Studio", "Looker Studio"]
    },
    {
      title: "Analytics & Data",
      skills: ["EDA", "Machine Learning", "Dashboards", "KPIs", "ETL", "Reporting"]
    },
    {
      title: "Collaboration",
      skills: ["Stakeholder Communication", "Strategic Thinking", "Team Leadership"]
    }
  ];

  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll">Skills Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-on-scroll">
              <h3 className="text-xl font-medium mb-4 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
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
