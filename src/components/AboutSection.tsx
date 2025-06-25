
const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20" id="about">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl font-light mb-20 text-center text-white animate-on-scroll">About</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Container */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="relative group">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-6 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-700 hover:shadow-3xl">
                <div className="relative overflow-hidden rounded-full shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                  <img
                    src="/lovable-uploads/fc16c2da-cca4-4812-934f-acae35a542b2.png"
                    alt="Manoj Kumar Marri"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Ring effect */}
                  <div className="absolute inset-0 ring-4 ring-white/20 rounded-full group-hover:ring-white/40 group-hover:ring-8 transition-all duration-500"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-2xl hover:border-white/30">
                <div className="space-y-6 text-white/90 leading-relaxed">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full opacity-60"></div>
                    <p className="text-lg hover:text-white transition-colors duration-300 pl-4">
                      I'm Manoj Kumar Marri, a Data Lead-II with above 3 years of experience driving decisions through data.
                    </p>
                  </div>
                  
                  <p className="text-lg hover:text-white transition-colors duration-300 hover:pl-2 transition-all duration-300">
                    Currently at NxtWave, I lead sales analytics initiatives — from KPI definition to data architecture and reporting — while mentoring a team of analysts.
                  </p>
                  
                  <p className="text-lg hover:text-white transition-colors duration-300 hover:pl-2 transition-all duration-300">
                    Previously, I enhanced user engagement and retention with insights-driven strategy, and helped shape investor reporting directly from the founder's office.
                  </p>
                  
                  <div className="relative mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <p className="text-lg font-medium text-white hover:scale-105 transition-transform duration-300">
                      Skilled in SQL, Python, Looker Studio, and modern data tools, I bring structure, clarity, and impact to every problem I solve.
                    </p>
                    
                    {/* Highlight decoration */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom decoration */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-tl from-purple-400/20 to-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
