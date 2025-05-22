const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-element">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Dotomat</h2>
            <p className="text-xl text-gray-300 mb-6">
              We're on a mission to make business automation accessible, efficient, and 
              reliable for companies of all sizes.
            </p>
            <p className="text-gray-300 mb-6">
              Our team of experts combines deep technical knowledge with business acumen to 
              deliver automation solutions that make a real difference to your bottom line.
            </p>
            <div className="border-l-4 border-accent pl-4 py-2">
              <p className="text-gray-300 italic">
                "Automation isn't just about technology; it's about freeing human potential
                for what matters most."
              </p>
            </div>
          </div>
          
          <div className="lg:pl-16 reveal-element" style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-primary-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent mb-2">Innovation</h3>
                <p className="text-gray-300">We continuously explore cutting-edge technologies to provide the best solutions.</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent mb-2">Precision</h3>
                <p className="text-gray-300">We pay attention to every detail, ensuring flawless execution of automation processes.</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent mb-2">Reliability</h3>
                <p className="text-gray-300">Our solutions are robust and dependable, built to perform consistently.</p>
              </div>
              <div className="bg-primary-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-accent mb-2">Scalability</h3>
                <p className="text-gray-300">We design solutions that grow with your business needs and adapt to changing demands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;