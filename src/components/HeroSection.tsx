import { Button } from "@/components/ui/button";
import ganeshaHero from "@/assets/ganesha-hero.jpg";
import ganeshalogo from "@/assets/logo.png";
const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ganeshaHero})` }}
      >
        <div className="absolute inset-0 gradient-blessing"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-secondary rounded-full animate-float glow-diya`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
<div className="relative z-10 text-center px-4 animate-fade-up">
  <div className="mb-8 animate-blessing">
    {/* Logo + Name */}
    <div className="flex justify-center items-center gap-4 flex-wrap">
      {/* Logo image */}
      <img 
        src={ganeshalogo} 
        alt="Swagath Ganesha Logo" 
        className="w-12 h-12 md:w-16 md:h-16 lg:w-32 lg:h-32 object-contain"
      />
      {/* Association Name */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-festival font-bold text-gradient">
        🙏 Swagath Ganesha Youth Association 🙏
      </h1>
    </div>

    {/* Location */}
    <div className="text-xl md:text-2xl font-elegant text-slate-200 font-bold mb-2">
      📍 Seethanagaram Village
    </div>

    {/* Tagline */}
    <div className="text-lg md:text-xl font-elegant text-primary italic">
      "Celebrating Faith, Unity & Joy – Every Vinayaka Chavithi"
    </div>
  </div>

  {/* CTA Button */}
  <div className="space-y-4 animate-scale-in" style={{ animationDelay: '0.6s' }}>
    <Button 
      variant="festival" 
      size="lg"
      onClick={scrollToAbout}
      className="text-lg px-8 py-6 rounded-2xl"
    >
      Enter Celebration →
    </Button>
  </div>
</div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;