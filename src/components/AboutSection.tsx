
const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden" id="about">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-32 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-30" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-35" style={{ animationDelay: '5s' }}></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white animate-on-scroll">About</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Container */}
          <div className="animate-on-scroll flex justify-center">
            <div className="relative group">
              <img
                src="/lovable-uploads/fc16c2da-cca4-4812-934f-acae35a542b2.png"
                alt="Manoj Kumar Marri"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105"
              />
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              
              {/* Corner accent elements */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Content Container */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-xl"></div>
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:bg-white/15 transition-all duration-500 hover:shadow-xl">
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
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-tl from-purple-400/15 to-blue-600/15 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
