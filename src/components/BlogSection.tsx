import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Automotive Photography",
      excerpt: "Discover the techniques and equipment I use to capture stunning car photographs, from composition to lighting setups.",
      category: "Photography Tips",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Road Trip Through the Scottish Highlands",
      excerpt: "An epic journey through Scotland's most scenic routes, featuring breathtaking landscapes and hidden gems off the beaten path.",
      category: "Travel Stories",
      readTime: "12 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Classic Car Show: A Photographer's Paradise",
      excerpt: "Behind the scenes at one of Europe's premier classic car events, capturing the stories behind these automotive masterpieces.",
      category: "Car Culture",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-4" id="blog">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Latest Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Adventures, insights, and behind-the-scenes stories from the road
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="overflow-hidden group hover:shadow-card transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-smooth">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;