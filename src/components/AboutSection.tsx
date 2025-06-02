
const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6" id="about">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light mb-16 text-center text-white animate-on-scroll">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Container */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-700">
                  <img
                    src="/lovable-uploads/76e0a162-f9e3-4446-a7aa-b87c208e9def.png"
                    alt="Manoj Kumar Marri"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-2 ring-white/20 rounded-2xl group-hover:ring-white/40 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500">
              <div className="space-y-6 text-white/90 leading-relaxed">
                <p className="text-lg hover:text-white transition-colors duration-300">
                  I'm Manoj Kumar Marri, a Data Lead-II with above 3 years of experience driving decisions through data.
                </p>
                <p className="text-lg hover:text-white transition-colors duration-300">
                  Currently at NxtWave, I lead sales analytics initiatives — from KPI definition to data architecture and reporting — while mentoring a team of analysts.
                </p>
                <p className="text-lg hover:text-white transition-colors duration-300">
                  Previously, I enhanced user engagement and retention with insights-driven strategy, and helped shape investor reporting directly from the founder's office.
                </p>
                <p className="text-lg font-medium text-white hover:scale-105 transition-transform duration-300">
                  Skilled in SQL, Python, Looker Studio, and modern data tools, I bring structure, clarity, and impact to every problem I solve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
