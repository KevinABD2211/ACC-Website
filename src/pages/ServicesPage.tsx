
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { Droplet, Plug, Hammer, Trees } from "lucide-react";

const ServicesPage = () => {
  const serviceCards = [
    {
      title: "Plumbing, Heating & Drainage",
      description: "Fit-outs, sewer tie-ins, hydronic & under-floor heating, preventive maintenance.",
      icon: <Droplet className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Electrical & Automation",
      description: "Wiring, fixtures, LED lighting, full-home smart controls (lights, curtains, shades, AC), panel work.",
      icon: <Plug className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1633111245062-8933671fa07c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Construction & Renovation",
      description: "Project management, targeted upgrades (any room/façade), full renovations, ground-up builds—all trades supervised by Kevin.",
      icon: <Hammer className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Outdoor & Landscape Systems",
      description: "Pools & water features, irrigation & drainage, hardscape & lighting, waterproofing.",
      icon: <Trees className="h-10 w-10" />,
      imageUrl: "https://images.unsplash.com/photo-1551241484-e58d2cfacd63?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and development solutions"
        imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services Cards */}
      <section className="py-16 px-4 md:px-6 bg-fadco-lightgray">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Services" 
            subtitle="From initial concept to final delivery, we provide complete solutions for all your construction needs."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {serviceCards.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Comprehensive Construction & Development Services" 
            subtitle="From initial concept to final delivery, we provide complete solutions for all your construction needs."
            center={true}
          />
          
          <div className="mt-16">
            {/* Plumbing, Heating & Drainage */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Plumbing, Heating & Drainage</h3>
                <p className="text-gray-600 mb-6">
                  Drawing on our expertise in specialized trade work, FADCO offers expert plumbing, heating, and drainage 
                  services for both residential and commercial properties. Our licensed professionals ensure that 
                  all installations and repairs are completed safely and to code.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete fit-outs for new construction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sewer tie-ins and drainage solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hydronic and under-floor heating systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Preventive maintenance programs</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                  alt="Plumbing, Heating & Drainage"
                  className="rounded-lg w-full h-96 object-cover shadow-lg"
                />
              </div>
            </div>
            
            {/* Electrical & Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1633111245062-8933671fa07c?auto=format&fit=crop&w=800&q=80"
                  alt="Electrical & Automation"
                  className="rounded-lg w-full h-96 object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Electrical & Automation</h3>
                <p className="text-gray-600 mb-6">
                  FADCO offers comprehensive electrical and automation solutions that combine safety, efficiency, 
                  and cutting-edge technology. From basic wiring to sophisticated smart home systems, our team 
                  delivers reliable electrical installations for modern living.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wiring and fixtures installation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>LED and accent lighting systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full-home smart controls (lights, curtains, shades, AC)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Electrical panel work and upgrades</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Construction & Renovation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Construction & Renovation</h3>
                <p className="text-gray-600 mb-6">
                  Transform your space with FADCO's comprehensive construction and renovation services. Whether you're 
                  looking to update a single room or completely reimagine your entire property, our team brings 
                  creativity and craftsmanship to every project—all under Kevin's direct supervision.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Project management and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Targeted upgrades (any room/façade)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Full renovations of existing structures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ground-up builds with complete trade supervision</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  alt="Construction & Renovation"
                  className="rounded-lg w-full h-96 object-cover shadow-lg"
                />
              </div>
            </div>
            
            {/* Outdoor & Landscape Systems */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551241484-e58d2cfacd63?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor & Landscape Systems"
                  className="rounded-lg w-full h-96 object-cover shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Outdoor & Landscape Systems</h3>
                <p className="text-gray-600 mb-6">
                  Extend your living space outdoors with FADCO's landscape system solutions. Our integrated approach 
                  ensures that your outdoor areas are both beautiful and functional, with carefully designed systems 
                  that work seamlessly together.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pools and water features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Irrigation and drainage systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Hardscape and outdoor lighting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Waterproofing solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 px-4 md:px-6 bg-fadco-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can bring your construction vision to life.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-fadco-navy px-8 py-3 rounded font-semibold hover:bg-fadco-gold hover:text-white transition-colors inline-block"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
