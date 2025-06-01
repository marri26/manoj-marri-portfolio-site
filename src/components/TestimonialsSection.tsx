
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Manoj consistently brings clarity and structure to complex problems. His data sense is impressive.",
      author: "Team Lead, NxtWave"
    },
    {
      quote: "He's not just a number cruncher. He understands business and communicates insights beautifully.",
      author: "Product Manager"
    }
  ];

  return (
    <section className="py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white/20 animate-on-scroll hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl text-blue-200 mb-4">"</div>
              <blockquote className="text-lg text-white/90 mb-6 italic">
                {testimonial.quote}
              </blockquote>
              <cite className="text-white font-medium not-italic">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
