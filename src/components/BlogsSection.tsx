
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

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
    <section className="py-16 px-6" id="blogs">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-10 animate-on-scroll">
          Blogs & Articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-on-scroll">
          {blogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="mb-4 text-sm leading-relaxed">
                  {blog.description}
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="group">
            View All Articles
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
