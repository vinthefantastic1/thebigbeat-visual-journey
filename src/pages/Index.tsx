import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-display font-bold text-2xl mb-4">The Big Beat</div>
          <p className="text-muted-foreground mb-6">
            Capturing life through the lens, the road, and the journey
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 The Big Beat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
