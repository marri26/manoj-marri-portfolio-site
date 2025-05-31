
const AboutSection = () => {
  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border animate-on-scroll">
          <h2 className="text-3xl font-light mb-8 text-center">About</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-6">
              I'm a Senior Data Analyst with nearly 3 years of experience solving real business problems through data. 
              I specialize in SQL, Python, Looker Studio, and ML to drive insights and build scalable solutions.
            </p>
            <p className="mb-6">
              I've worked cross-functionally with founders, marketers, and product teams — translating raw data into decisions that matter.
            </p>
            <p className="text-center font-medium text-foreground">
              Always learning. Always building. Always analyzing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
