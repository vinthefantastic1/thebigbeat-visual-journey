import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Mountain Road Photography",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e426?w=800&h=600&fit=crop",
      description: "Capturing the essence of winding mountain roads at golden hour"
    },
    {
      id: 2,
      title: "Classic Car Portrait",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      description: "Vintage automotive beauty meets modern photography techniques"
    },
    {
      id: 3,
      title: "Desert Landscapes",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      description: "The raw beauty of desert terrain and endless horizons"
    },
    {
      id: 4,
      title: "Urban Car Culture",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop",
      description: "Street photography meets automotive passion in the city"
    },
    {
      id: 5,
      title: "Coastal Adventures",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop",
      description: "Where the ocean meets the open road - coastal photography"
    },
    {
      id: 6,
      title: "Racing Heritage",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      description: "Celebrating the history and culture of motorsport"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="gallery">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my favorite captures from adventures around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden group hover:shadow-card transition-smooth cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="default" size="lg" className="shadow-glow">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;