
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";

const BlogsSection = () => {
  return (
    <section className="py-20 px-6" id="blogs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll">
          Blogs & Videos
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-on-scroll">
          {/* Featured Video Section */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border h-fit">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-full">
                    <Play className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Featured Video</h3>
                    <p className="text-sm text-muted-foreground">Latest insights</p>
                  </div>
                </div>
                
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/M_i_dl-mpZU"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium Article Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6">
              Latest Article
            </h3>
            
            <Card 
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-0 shadow-md bg-card/50 backdrop-blur-sm h-fit"
              onClick={() => window.open('https://medium.com/@manojkumar.marri26/thinking-like-an-analyst-structured-approach-to-real-world-data-problems-f2b1f8adfb95', '_blank')}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Data Analysis
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  Thinking Like an Analyst: Structured Approach to Real-World Data Problems
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  An example-driven walkthrough to develop analytical thinking and business-first problem solving using data.
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                  <span className="font-medium">Published on Medium</span>
                  <span className="bg-muted/50 px-2 py-1 rounded-full">Read Article</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
