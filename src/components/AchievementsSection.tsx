
const AchievementsSection = () => {
  const achievements = [
    {
      icon: "🏅",
      title: "Master Collaborator",
      description: "Recognized for cross-functional collaboration in setting up analytics for the engagement and retention pod",
      date: "Jun–Jul 2023",
      award: "Awarded by NxtWave · Aug 14, 2023"
    },
    {
      icon: "🥇",
      title: "Man of Hackathon",
      description: "Won best project in internal Data Analytics hackathon for building a high-impact tool",
      date: "Jan 26, 2024",
      award: "₹30,000 prize"
    },
    {
      icon: "📈",
      title: "20% DAU Boost",
      description: "Developed retention buckets that increased daily active users by 20% through data-driven insights",
      date: "2023",
      award: "Business Impact Achievement"
    }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 px-6" id="achievements">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll">Achievements & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center shadow-sm border card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300">{achievement.icon}</div>
              <h3 className="text-xl font-medium mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>
              <div className="text-sm text-primary font-medium mb-2">{achievement.date}</div>
              <div className="text-xs text-muted-foreground">{achievement.award}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
