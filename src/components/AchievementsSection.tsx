
const AchievementsSection = () => {
  const achievements = [
    {
      icon: "🎯",
      title: "20% Engagement Boost",
      description: "Increased user engagement by 20% via retention modeling"
    },
    {
      icon: "📈",
      title: "Sales Optimization",
      description: "Optimized sales conversion funnels across teams"
    },
    {
      icon: "🧠",
      title: "ML-Powered Insights",
      description: "Delivered ML-powered insights to founder's office for investor reporting"
    }
  ];

  return (
    <section className="py-16 px-6" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll">Achievements & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-sm border card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 transform hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
              <h3 className="text-xl font-medium mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
