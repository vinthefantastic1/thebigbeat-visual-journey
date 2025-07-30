import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, Youtube, Mail, MapPin, Camera } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-card" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow my adventures, get in touch, or collaborate on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Instagram */}
          <Card className="p-8 group hover:shadow-card transition-smooth cursor-pointer border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instagram</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Daily photos and behind-the-scenes content
            </p>
            <div className="text-primary font-medium">@thebigbeat</div>
          </Card>

          {/* YouTube */}
          <Card className="p-8 group hover:shadow-card transition-smooth cursor-pointer border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
              <Youtube className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">YouTube</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Travel vlogs and photography tutorials
            </p>
            <div className="text-primary font-medium">The Big Beat</div>
          </Card>

          {/* Email */}
          <Card className="p-8 group hover:shadow-card transition-smooth cursor-pointer border-border/50">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-smooth">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-4">
              For collaborations and inquiries
            </p>
            <div className="text-primary font-medium">hello@thebigbeat.com</div>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Ready for an Adventure?</h3>
              <p className="text-muted-foreground">
                Let's create something amazing together. Whether it's a photo shoot, 
                travel collaboration, or automotive feature.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="shadow-glow">
                <Camera className="w-4 h-4 mr-2" />
                Book a Shoot
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="w-4 h-4 mr-2" />
                Plan a Trip
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;