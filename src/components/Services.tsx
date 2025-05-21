import { Workflow, Network, Brain } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  return (
    <div 
      className="bg-primary-light p-8 rounded-lg transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-1 reveal-element"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "n8n Automation",
      description: "Streamline your workflows with powerful n8n automation. Connect your apps and systems to create efficient, automated processes.",
      icon: <Workflow size={48} />,
      delay: 100
    },
    {
      title: "MCP Agents",
      description: "Deploy intelligent Multi-Channel Protocol agents to manage communications across various platforms, ensuring seamless integration.",
      icon: <Network size={48} />,
      delay: 200
    },
    {
      title: "AI Agents",
      description: "Leverage cutting-edge artificial intelligence to analyze data, predict trends, and make intelligent decisions for your business.",
      icon: <Brain size={48} />,
      delay: 300
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal-element">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive automation solutions to transform your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;