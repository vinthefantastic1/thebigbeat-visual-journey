import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <Card className="overflow-hidden shadow-card">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground">TB</span>
              </div>
            </div>
          </Card>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-foreground">
              Behind the Lens
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
          </div>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to my world of visual storytelling. I'm passionate about capturing 
              the perfect moments where adventure meets artistry – whether it's through 
              the viewfinder of my camera, behind the wheel of a classic car, or 
              discovering hidden gems around the globe.
            </p>
            
            <p>
              Every photograph tells a story, every journey creates memories, and every 
              road leads to new discoveries. Through The Big Beat, I share these 
              experiences with fellow enthusiasts who understand that life's greatest 
              moments happen when we dare to explore.
            </p>
            
            <p>
              Join me as I document the intersection of automotive culture, travel 
              adventures, and the art of photography – three passions that drive 
              my creative vision and fuel my wanderlust.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Countries Visited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Car Features</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;