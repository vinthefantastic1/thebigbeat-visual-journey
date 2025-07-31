import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Camera, Car, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={heroImage}
          alt="Hero landscape"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="relative">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-glow-pulse">
              The Big Beat
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-primary-glow/30 to-primary/20 blur-xl opacity-30 animate-pulse" />
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-gray-200 max-w-3xl mx-auto">
            Capturing life through the lens, the road, and the journey
          </p>
          
          {/* Feature Icons */}
          <div className="flex justify-center items-center gap-8 mb-12 animate-slide-up">
            <div className="flex flex-col items-center">
              <Camera className="w-8 h-8 mb-2 text-primary-glow" />
              <span className="text-sm text-gray-300">Photography</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2 text-primary-glow" />
              <span className="text-sm text-gray-300">Travel</span>
            </div>
            <div className="flex flex-col items-center">
              <Car className="w-8 h-8 mb-2 text-primary-glow" />
              <span className="text-sm text-gray-300">Cars</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-glow transition-smooth text-lg px-8 py-3"
            >
              Explore Gallery
            </Button>
            {/* <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-3"
            >
              Read Stories
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;