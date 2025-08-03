import { useState, useEffect } from "react";

const MembersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const members = [
    { name: "Satya", role: "Founding Member", color: "from-primary to-secondary" },
    { name: "Subbaiah", role: "Founding Member", color: "from-secondary to-accent" },
    { name: "Kishore", role: "Founding Member", color: "from-accent to-primary" },
    { name: "Suman", role: "Founding Member", color: "from-maroon to-primary" },
    { name: "Chinna", role: "Founding Member", color: "from-primary to-maroon" },
    { name: "Jana", role: "Founding Member", color: "from-secondary to-maroon" },
    { name: "Chandar", role: "Founding Member", color: "from-accent to-secondary" }
  ];

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-gradient mb-6">
            Meet the Heart of the Celebration
          </h2>
          <p className="text-xl font-elegant text-muted-foreground">
            The dedicated souls who brought our vision to life
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full mt-4"></div>
        </div>

        {/* Desktop: Enhanced Circular Layout */}
        <div className="hidden md:block relative h-[500px] animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full h-full">
            {members.map((member, index) => {
              const angle = (index / members.length) * 2 * Math.PI;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group transition-all duration-700 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transitionDelay: `${index * 150}ms`,
                    transform: isVisible 
                      ? `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) rotateY(0deg)` 
                      : `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg) rotateY(180deg)`
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-lg border-2 border-secondary/50 rounded-3xl p-8 text-center shadow-2xl group-hover:shadow-divine group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-festival font-bold text-white shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                      {member.name[0]}
                    </div>
                    <h3 className="font-festival text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="font-elegant text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {member.role}
                    </p>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
            
            {/* Enhanced Center Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-40 h-40 gradient-hero rounded-full flex items-center justify-center shadow-divine animate-glow relative overflow-hidden">
                {/* Rotating border */}
                <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full border-2 border-primary/20 animate-spin-reverse"></div>
                
                <div className="text-center text-primary-foreground relative z-10">
                  <div className="text-4xl mb-2 animate-bounce">🕉️</div>
                  <div className="font-festival text-base font-semibold leading-tight">United in</div>
                  <div className="font-festival text-base font-semibold leading-tight">Devotion</div>
                </div>
                
                {/* Floating particles around center */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Enhanced Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-sm border-2 border-secondary/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-blessing transition-all duration-500 transform hover:scale-105 hover:-rotate-1 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: `linear-gradient(135deg, hsl(var(--${member.color.split('-')[1]}) / 0.1), hsl(var(--${member.color.split('-')[3]}) / 0.1))`
              }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Floating elements */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-secondary rounded-full animate-ping"></div>
              
              <div className={`relative w-16 h-16 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-festival font-bold text-white shadow-lg hover:rotate-12 transition-transform duration-300`}>
                {member.name[0]}
              </div>
              
              <h3 className="font-festival text-lg font-semibold text-primary mb-2 hover:text-secondary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="font-elegant text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 leading-relaxed">
                {member.role}
              </p>
              
              {/* Hover shimmer effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-full hover:translate-x-[-100%] transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-blessing rounded-2xl p-8 border border-secondary">
            <h3 className="font-festival text-2xl font-semibold text-primary mb-4">
              Join Our Celebration Family
            </h3>
            <p className="font-elegant text-muted-foreground mb-6">
              Together we create magical moments that honor our traditions and strengthen our community bonds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembersSection;