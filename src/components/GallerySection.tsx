import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Alaska Mountains",
      category: "Travel",
      image: "images/gallery/mountains_alaska_7e7636dab3464c397ede6be2ab592f0c1.jpg",
      description: "Capturing the majestic beauty of the Alaskan wilderness"
    },
    {
      id: 2,
      title: "BMW i5",
      category: "Automotive",
      image: "images/gallery/bmw_amcc9ddc83966ccfd056ff33ba94bb5ae601.jpg",
      description: "Automotive beauty"
    },
    {
      id: 3,
      title: "Antarctica",
      category: "Travel",
      image: "images/gallery/antartica_IMG_8133.jpg",
      description: "Penguins in Antarctica, a glimpse into the icy wilderness"
    },
    {
      id: 4,
      title: "Classic International Scout",
      category: "Automotive",
      image: "images/gallery/international_scout_bf509b6322ee80c3ff0b622f751379901.jpg",
      description: "A tribute to vintage off-road vehicles and their timeless appeal"
    },
    {
      id: 5,
      title: "Classic Ford Bronco",
      category: "Automotive",
      image: "images/gallery/Bronco_sc754c3b6f00fd8c215d027d366009ea9e1.jpg",
      description: "Exploring the rugged beauty of classic off-road vehicles"
    },
    {
      id: 6,
      title: "Classic VW Bus",
      category: "Automotive",
      image: "images/gallery/vw_733c824cd0cf734b2f99412470eebb651.jpg",
      description: "A nostalgic journey with the iconic VW Bus, perfect for road trips"
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
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden group hover:shadow-card transition-smooth cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-smooth"
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
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-2">
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
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