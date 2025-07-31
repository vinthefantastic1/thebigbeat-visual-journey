import { Card } from '@/components/ui/card';
const AboutSection = () => {
  return <section className="py-20 px-4 max-w-6xl mx-auto" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative">
          <Card className="overflow-hidden shadow-card">
            
          </Card>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            
            
            
            
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Photos Captured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">39+</div>
              <div className="text-sm text-muted-foreground">Countries/Regions Visited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Car Features</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;