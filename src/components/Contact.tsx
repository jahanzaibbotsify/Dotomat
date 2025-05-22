import { ArrowRight, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'radial-gradient(#00ff88 1px, transparent 1px)',
          backgroundSize: '50px 50px' 
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Schedule a consultation with our automation experts to discover how Dotomat can
            streamline your operations and boost productivity.
          </p>
          
          <div className="bg-primary-light p-8 rounded-lg mb-10 reveal-element" style={{ transitionDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Calendar size={48} className="text-accent" />
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
                <p className="text-gray-300">30-minute session with our automation experts</p>
              </div>
              <a 
                href="https://calendly.com/usama_noman/30min-1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-accent text-primary px-6 py-3 rounded hover:bg-accent/90 transition-all duration-300 group text-lg font-semibold"
              >
                Book Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </a>
            </div>
          </div>
          
          <div className="reveal-element" style={{ transitionDelay: '300ms' }}>
            <p className="text-gray-300">
              Not ready for a call? Email us at <a href="mailto:info@dotomat.com" className="text-accent hover:underline">info@dotomat.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;