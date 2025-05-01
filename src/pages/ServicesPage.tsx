
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

const ServicesPage = () => {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive construction and development solutions"
        imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <SectionTitle 
            title="Comprehensive Construction & Development Services" 
            subtitle="From initial concept to final delivery, we provide complete solutions for all your construction needs."
            center={true}
          />
          
          <div className="mt-16">
            {/* General Contracting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">General Contracting</h3>
                <p className="text-gray-600 mb-6">
                  As a full-service general contractor, FADCO handles all aspects of construction projects, 
                  from pre-construction planning to final delivery. We manage every detail with precision 
                  and care, ensuring that your project is completed on time, within budget, and to the highest 
                  standards of quality.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Residential and commercial construction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Project scheduling and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Subcontractor management</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Budget and cost control</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80"
                  alt="General Contracting"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </div>
            
            {/* Plumbing & Electrical */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80"
                  alt="Plumbing & Electrical"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Plumbing & Electrical</h3>
                <p className="text-gray-600 mb-6">
                  Drawing on our origins in specialized trade work, FADCO offers expert plumbing and electrical 
                  services for both residential and commercial properties. Our licensed professionals ensure that 
                  all installations and repairs are completed safely and to code.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>New construction plumbing and electrical systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Repairs and upgrades to existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Smart home electrical solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Water conservation and energy-efficient solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Full Renovations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Full Renovations</h3>
                <p className="text-gray-600 mb-6">
                  Transform your existing space with FADCO's comprehensive renovation services. Whether you're 
                  looking to update a single room or completely reimagine your entire property, our team brings 
                  creativity and craftsmanship to every project.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Kitchen and bathroom renovations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Whole home remodeling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commercial space renovations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Historic property restoration</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80"
                  alt="Full Renovations"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
            </div>
            
            {/* Project Management */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=800&q=80"
                  alt="Project Management"
                  className="rounded-lg w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Project Management</h3>
                <p className="text-gray-600 mb-6">
                  FADCO's experienced project managers oversee every aspect of your construction project, ensuring 
                  efficient communication, quality control, and timely completion. We serve as your advocate throughout 
                  the building process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Construction planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cost management and budgeting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Quality control and inspections</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stakeholder coordination and communication</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Real Estate Development */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-fadco-navy mb-4">Real Estate Development</h3>
                <p className="text-gray-600 mb-6">
                  As a full-service real estate developer, FADCO identifies opportunities, acquires land, 
                  and creates residential and commercial properties that add value to communities. Our team 
                  handles everything from concept to completion.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Residential development projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Commercial property development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Land acquisition and site analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 mr-2 text-fadco-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Project feasibility and market analysis</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80"
                  alt="Real Estate Development"
                  className="rounded-lg w-full h-96 object-cover"
                />
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
