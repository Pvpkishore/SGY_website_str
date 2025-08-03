const Footer = () => {
  return (
    <footer className="gradient-devotion py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Association Info */}
          <div className="text-center md:text-left animate-fade-up">
            <h3 className="font-festival text-2xl font-bold text-maroon-foreground mb-4">
              🕉️ Swagath Ganesha Youth Association
            </h3>
            <p className="font-elegant text-maroon-foreground/80 mb-4">
              Seethanagaram Village<br />
              Celebrating traditions since 2023
            </p>
            <p className="font-elegant text-maroon-foreground/70 italic">
              "Unity in Devotion, Joy in Celebration"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-festival text-xl font-semibold text-maroon-foreground mb-4">
              Our Celebrations
            </h4>
            <div className="space-y-2 font-elegant text-maroon-foreground/80">
              <div>🎉 Vinayaka Chavithi 2023</div>
              <div>🎊 Vinayaka Chavithi 2024</div>
              <div>🙏 Community Prayers</div>
              <div>🎭 Cultural Events</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-festival text-xl font-semibold text-maroon-foreground mb-4">
              Connect With Us
            </h4>
            <div className="space-y-3 font-elegant text-maroon-foreground/80">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span>📞</span>
                <span>Contact: Kishore</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span>📧</span>
                <span>Email: swagathganesha@gmail.com</span>
              </div>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <div className="w-10 h-10 bg-maroon-foreground/20 rounded-full flex items-center justify-center hover:bg-maroon-foreground/30 transition-divine cursor-pointer">
                  <span>📱</span>
                </div>
                <div className="w-10 h-10 bg-maroon-foreground/20 rounded-full flex items-center justify-center hover:bg-maroon-foreground/30 transition-divine cursor-pointer">
                  <span>📺</span>
                </div>
                <div className="w-10 h-10 bg-maroon-foreground/20 rounded-full flex items-center justify-center hover:bg-maroon-foreground/30 transition-divine cursor-pointer">
                  <span>📸</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-maroon-foreground/20"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-maroon px-6 py-2 rounded-full">
              <div className="flex space-x-4 text-xl animate-float">
                <span>🪔</span>
                <span>🙏</span>
                <span>🪔</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <p className="font-elegant text-maroon-foreground/70 mb-4">
            Made with ❤️ by Swagath Ganesha Youth Association – Seethanagaram
          </p>
          <p className="font-festival text-sm text-maroon-foreground/60">
            © 2024 All rights reserved | Blessed be our celebrations 🕉️
          </p>
        </div>

        {/* Floating Diya Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-secondary rounded-full animate-float glow-diya opacity-30"
              style={{
                left: `${10 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.8}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;