
const AboutSection = () => {
  return (
    <section className="py-16 px-6" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-sm border border-white/20 animate-on-scroll card-hover">
          <h2 className="text-3xl font-light mb-8 text-center text-white">About</h2>
          <div className="prose prose-lg max-w-none text-white/90 leading-relaxed">
            <p className="mb-6 animate-on-scroll">
              I'm a Senior Data Analyst with nearly 3 years of experience solving real business problems through data. 
              I specialize in SQL, Python, Looker Studio, and ML to drive insights and build scalable solutions.
            </p>
            <p className="mb-6 animate-on-scroll">
              I've worked cross-functionally with founders, marketers, and product teams — translating raw data into decisions that matter.
            </p>
            <p className="text-center font-medium text-white animate-on-scroll">
              Always learning. Always building. Always analyzing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
