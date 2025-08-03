import youthImage from "@/assets/youth-association.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 gradient-blessing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-festival font-bold text-gradient mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6 font-elegant text-lg leading-relaxed">
              <p className="text-foreground/90">
                <span className="text-primary font-semibold">Established in 2023</span> by passionate youth 
                to unify our beloved Seethanagaram village in grand festive celebrations that honor our 
                traditions and bring our community together.
              </p>
              
              <p className="text-foreground/80">
                Our association organizes <span className="text-accent font-semibold">eco-friendly idol installations</span>, 
                sacred poojas, community meals, and vibrant cultural events that showcase the rich heritage 
                of our village.
              </p>
              
              <p className="text-foreground/80">
                We foster <span className="text-secondary font-semibold">unity, tradition, and celebration</span> among 
                all villagers, creating memories that last a lifetime and strengthening the bonds that make 
                our community special.
              </p>
            </div>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <img 
                src={youthImage} 
                alt="Youth Association Members" 
                className="rounded-2xl shadow-divine w-full h-80 object-cover transition-transform transform hover:scale-105"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-maroon/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-festival text-lg font-semibold text-center bg-maroon/70 py-2 px-4 rounded-lg">
                  Building Community Through Devotion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: "🙏", title: "Sacred Traditions", desc: "Preserving ancient customs with modern celebrations" },
            { icon: "🤝", title: "Community Unity", desc: "Bringing together hearts and souls in harmony" },
            { icon: "🌱", title: "Eco-Friendly", desc: "Celebrating responsibly for future generations" }
          ].map((item, index) => (
            <div 
              key={index}
              className="text-center animate-scale-in bg-card rounded-2xl p-6 shadow-blessing hover:shadow-divine transition-divine"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-festival text-xl font-semibold text-primary mb-3">{item.title}</h3>
              <p className="font-elegant text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;