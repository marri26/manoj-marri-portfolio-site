
const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6" id="about">
      <div className="max-w-4xl mx-auto w-full">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-sm border border-white/20 animate-on-scroll card-hover">
          <h2 className="text-4xl font-light mb-12 text-center text-white">About</h2>
          <div className="prose prose-lg max-w-none text-white/90 leading-relaxed text-center">
            <p className="mb-8 text-lg animate-on-scroll">
              I'm Manoj Kumar Marri, a Senior Data Analyst with nearly 3 years of experience driving decisions through data.
            </p>
            <p className="mb-8 text-lg animate-on-scroll">
              Currently at NxtWave, I lead sales analytics initiatives — from KPI definition to data architecture and reporting — while mentoring a team of analysts.
            </p>
            <p className="mb-8 text-lg animate-on-scroll">
              Previously, I enhanced user engagement and retention with insights-driven strategy, and helped shape investor reporting directly from the founder's office.
            </p>
            <p className="text-lg font-medium text-white animate-on-scroll">
              Skilled in SQL, Python, Looker Studio, and modern data tools, I bring structure, clarity, and impact to every problem I solve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
