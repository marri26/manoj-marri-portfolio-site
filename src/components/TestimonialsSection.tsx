
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
    <section className="py-20 px-6 bg-muted/30" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-12 animate-on-scroll">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-sm border animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl text-primary mb-4">"</div>
              <blockquote className="text-lg text-muted-foreground mb-6 italic">
                {testimonial.quote}
              </blockquote>
              <cite className="text-foreground font-medium not-italic">
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
