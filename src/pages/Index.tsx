import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      {/* <BlogSection /> */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-display font-bold text-2xl mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">The Big Beat</div>
          <p className="text-muted-foreground mb-6">
            Capturing life through the lens, the road, and the journey
          </p>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 The Big Beat. All rights reserved.</p>
            <p className="mt-2 text-xs opacity-70">
              Version {__APP_VERSION__} | Built on {new Date(__BUILD_DATE__).toLocaleDateString()}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;