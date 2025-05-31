
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "NxtWave",
      period: "Oct 2023 – Present",
      location: "Hyderabad",
      achievements: [
        "Led analytics for sales KPIs, improving conversion & cost metrics",
        "Managed BigQuery data pipelines and ETL from CRM systems",
        "Mentored and directed team of analysts"
      ]
    },
    {
      title: "Data Analyst",
      company: "NxtWave",
      period: "Apr 2022 – Sep 2023",
      location: "Hyderabad",
      achievements: [
        "Owned Retention/Engagement pod, improved daily user activity by 20%",
        "Delivered founder-level reports: MoM retention, NPS, usage insights",
        "Built dynamic cohort dashboards with Looker Studio"
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll">Experience Timeline</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-on-scroll">
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-sm border">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-muted-foreground mt-2 lg:mt-0 lg:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-full w-0.5 h-8 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
