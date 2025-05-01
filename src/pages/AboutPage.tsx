
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey and values"
        imageUrl="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="From vision to industry leadership"
              />
              <p className="text-gray-600 mb-6">
                FADCO was born from a vision to transform the Lebanese construction industry by offering unparalleled 
                quality and service. What began as a specialized trade service has evolved into a comprehensive 
                construction and development company.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been defined by our commitment to excellence, traditional craftsmanship, and embracing 
                modern techniques. We established FADCO to create not just buildings, but lasting legacies that enhance 
                the communities we serve.
              </p>
              <p className="text-gray-600">
                Despite our growth, we remain true to our founding principles: integrity, quality, and a personal 
                commitment to exceeding client expectations. FADCO represents the highest standards of Lebanese 
                craftsmanship and attention to detail.
              </p>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=800&q=80"
                alt="FADCO Building"
                className="rounded-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Team" 
            subtitle="The experts behind every successful project"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-6">
                <AvatarImage src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80" alt="Fadi Abdallah" />
                <AvatarFallback>FA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-fadco-navy mb-1">Fadi Abdallah</h3>
              <p className="text-fadco-gold mb-4">Founder & Master Craftsman</p>
              <p className="text-gray-600 text-center">
                A master craftsman with 28 years of experience in the construction industry. Fadi's expertise spans across plumbing systems, 
                electrical installations, and comprehensive renovations. His hands-on approach and meticulous attention to detail have 
                established him as a trusted name in Lebanon's building sector, where his work stands as a testament to his 
                unwavering commitment to quality.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center">
              <Avatar className="w-32 h-32 mb-6">
                <AvatarImage src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80" alt="Kevin Abdallah" />
                <AvatarFallback>KA</AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-fadco-navy mb-1">Kevin Abdallah</h3>
              <p className="text-fadco-gold mb-4">Construction Coordinator</p>
              <p className="text-gray-600 text-center">
                As FADCO's dedicated on-site construction coordinator, Kevin brings a unique blend of practical knowledge and 
                academic excellence to every project. With his finance background from LAU (GPA 3.98) and specialized 
                certifications in real estate economics, he expertly manages resources, timelines, and budgets while maintaining 
                seamless communication between clients, architects, and trade specialists. Kevin's analytical approach ensures 
                that each project delivers maximum value without compromising on FADCO's quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-fadco-navy mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Lebanon's most trusted construction and development company, known for innovative building 
                solutions that enhance lives and communities while honoring the legacy of craftsmanship that defines 
                Lebanese architecture.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-fadco-navy mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-fadco-navy mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction and development services by combining time-honored craftsmanship with 
                modern techniques, ensuring each project reflects our commitment to quality, sustainability, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-fadco-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical standards that build trust with clients and partners.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-fadco-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-2">Excellence</h3>
              <p className="text-gray-600">
                We pursue excellence in every aspect of our work, from planning and design to execution and follow-up.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-fadco-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-2">Community</h3>
              <p className="text-gray-600">
                We value our role in the community and strive to create buildings and spaces that enhance lives and neighborhoods.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-fadco-navy rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and methods while respecting traditional craftsmanship to deliver superior results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
