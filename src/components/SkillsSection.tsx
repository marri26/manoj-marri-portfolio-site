
import { Database, BarChart3, Code, Zap, Brain, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: <Code className="w-6 h-6" />,
      skills: ["SQL (BigQuery, DBT)", "Python", "Git", "GSheets", "Excel"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Dashboards & BI",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Looker Studio", "Power BI", "Metabase"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Python Packages",
      icon: <Database className="w-6 h-6" />,
      skills: ["Numpy", "Pandas", "Matplotlib", "Streamlit", "Scikitlearn"],
      color: "from-green-400 to-green-600"
    },
    {
      title: "Analytics & Automation",
      icon: <Zap className="w-6 h-6" />,
      skills: ["ETL", "KPI Reporting", "Retention Analysis", "GA4", "Mixpanel"],
      color: "from-orange-400 to-orange-600"
    },
    {
      title: "Generative AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["OpenAI (Assistants API, Whisper)", "Gemini", "RAG", "Langchain", "No Code/Low Code Tools", "Conversational Agents"],
      color: "from-pink-400 to-pink-600"
    },
    {
      title: "Collaboration",
      icon: <Users className="w-6 h-6" />,
      skills: ["Stakeholder Communication", "Cross-functional Coordination", "Mentoring", "Analytics roadmap planning"],
      color: "from-teal-400 to-teal-600"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="skills">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll text-white">Skills Snapshot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="animate-on-scroll group"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {category.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-6 text-center text-white">{category.title}</h3>
                <div className="space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-200 border border-white/20 hover:scale-105 hover:shadow-lg cursor-default"
                      style={{ animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
