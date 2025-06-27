
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Advanced SQL Techniques for Data Analysis",
      description: "Deep dive into window functions, CTEs, and optimization strategies for BigQuery.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "SQL",
      link: "#"
    },
    {
      id: 2,
      title: "Building ML Models for User Retention",
      description: "How we improved user engagement by 20% using predictive modeling and cohort analysis.",
      date: "February 28, 2024",
      readTime: "12 min read",
      category: "Machine Learning",
      link: "#"
    },
    {
      id: 3,
      title: "Data Visualization Best Practices",
      description: "Creating impactful dashboards with Looker Studio that drive business decisions.",
      date: "January 20, 2024",
      readTime: "6 min read",
      category: "Visualization",
      link: "#"
    },
    {
      id: 4,
      title: "ETL Pipeline Design with DBT",
      description: "Modern data transformation strategies for scalable analytics infrastructure.",
      date: "December 10, 2023",
      readTime: "10 min read",
      category: "Data Engineering",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6" id="blogs">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-16 animate-on-scroll">
          Blogs & Videos
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-on-scroll">
          {/* Featured Video Section - Reduced size */}
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

          {/* Blog Articles Section - Takes remaining space */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">
              Latest Articles
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-0 shadow-md bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 text-sm leading-relaxed line-clamp-3">
                      {blog.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border/50">
                      <span className="font-medium">{blog.date}</span>
                      <span className="bg-muted/50 px-2 py-1 rounded-full">{blog.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-on-scroll">
          <Button variant="default" size="lg" className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Articles
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
