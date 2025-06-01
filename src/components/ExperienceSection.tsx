
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "NxtWave Disruptive Technologies Ltd.",
      period: "Oct 2023 – Present",
      location: "Hyderabad",
      achievements: [
        "Partnered with sales leaders to define KPIs and improve conversions through analytics",
        "Developed dashboards and reports for tracking key performance metrics",
        "Created lead prioritization logic, improving targeting across segments",
        "Managed CRM data pipelines and ETL workflows into BigQuery",
        "Designed DBT data models to enhance accessibility and cost-efficiency",
        "Mentored a team of data analysts and led adoption of automation tools",
        "Streamlined CRM workflows, improving data reliability and business efficiency"
      ]
    },
    {
      title: "Data Analyst",
      company: "NxtWave Disruptive Technologies Ltd.",
      period: "Apr 2022 – Oct 2023",
      location: "Hyderabad",
      achievements: [
        "Built dashboards for daily user engagement and retention tracking",
        "Developed retention buckets that boosted DAU by 20%",
        "Liaised with the founder's office for data needs around investor updates",
        "Delivered key metrics: MoM retention, NPS, time spent, feedback loops",
        "Conducted data literacy workshops to enable self-serve analytics"
      ]
    },
    {
      title: "Business Development Associate",
      company: "NxtWave Disruptive Technologies Ltd.",
      period: "Jun 2021 – Apr 2022",
      location: "Hyderabad",
      achievements: [
        "Handled customer interactions and business development activities",
        "Analyzed customer data to improve conversion strategies"
      ]
    },
    {
      title: "Architectural Intern",
      company: "Various Projects",
      period: "2017",
      location: "Hyderabad",
      achievements: [
        "Handled basic design tasks, concept visualization, and project documentation"
      ]
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll">Experience Timeline</h2>
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
                      <span className="text-primary mr-3 mt-[2px] text-lg leading-none">•</span>
                      <span className="flex-1">{achievement}</span>
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
