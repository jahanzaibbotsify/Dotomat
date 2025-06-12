const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-darker py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="mb-4">
              <img src="/logo.png" alt="Vocallify Logo" className="h-8" />
            </div>
            <p className="text-gray-400">
              Business automation till the last dot
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">n8n Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">MCP Agents</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">AI Agents</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors duration-300">Custom Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">A-08-11 Renai Jelutong,<br />Shah Alam, 40150</li>
              <li><a href="tel:+601123656152" className="text-gray-400 hover:text-accent transition-colors duration-300">+601123656152</a></li>
              <li><a href="mailto:usama@dotomat.com" className="text-gray-400 hover:text-accent transition-colors duration-300">usama@dotomat.com</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-accent transition-colors duration-300">Schedule a Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Dotomat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;