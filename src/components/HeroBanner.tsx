import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "New Divine Collection",
      subtitle: "Spiritual Jewelry for the Modern Soul",
      description: "Discover our handcrafted pieces that blend ancient wisdom with contemporary elegance",
      cta: "Explore Collection",
      badge: "New Launch",
      image: heroBanner,
    },
    {
      id: 2,
      title: "Festive Special Offers",
      subtitle: "Up to 40% Off on Selected Items",
      description: "Celebrate with our exclusive festive collection featuring traditional and modern designs",
      cta: "Shop Now",
      badge: "Limited Time",
      image: heroBanner,
    },
    {
      id: 3,
      title: "Loyalty Rewards Program",
      subtitle: "Earn Free Jewelry with Every Purchase",
      description: "Join thousands of satisfied customers and get rewarded for your loyalty",
      cta: "Join Now",
      badge: "Exclusive",
      image: heroBanner,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-gradient-warm">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6 fade-in">
          <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
            <Sparkles className="w-3 h-3 mr-1" />
            {slides[currentSlide].badge}
          </Badge>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span key={index} className={index === 0 ? 'text-gradient-primary' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              {slides[currentSlide].subtitle}
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="btn-luxury hover-glow">
              {slides[currentSlide].cta}
            </Button>
            <Button variant="outline" size="lg" className="backdrop-blur-sm bg-background/20 border-border/30 hover:bg-background/30">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary shadow-glow' 
                : 'bg-background/50 hover:bg-background/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;