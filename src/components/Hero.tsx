import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse-slow absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="animate-pulse-slow absolute -bottom-32 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#00ff88 1px, transparent 1px), linear-gradient(to right, #00ff88 1px, transparent 1px)',
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10 reveal-element">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Automate Your Business with <span className="text-accent">Dotomat</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Business automation till the last dot
          </p>
          <div className="reveal-element">
            <a 
              href="https://calendly.com/usama_noman/30min-1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent text-primary px-6 py-3 rounded hover:bg-accent/90 transition-all duration-300 group text-lg font-semibold"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;