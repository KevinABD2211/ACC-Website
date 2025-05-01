
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";

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
                subtitle="From humble beginnings to industry leadership"
              />
              <p className="text-gray-600 mb-6">
                Founded in 1996 by Fadi Abdallah, FADCO began as a specialized plumbing and electrical contractor 
                serving the local community in Lebanon. Through dedication to quality and customer satisfaction, 
                the company quickly built a reputation for excellence and reliability.
              </p>
              <p className="text-gray-600 mb-6">
                As the years passed, FADCO expanded its services to include full renovations, general contracting, 
                and eventually complete real estate development projects. Today, with over 28 years of experience, 
                FADCO stands as a leader in the Lebanese construction industry, known for delivering outstanding 
                results that combine traditional craftsmanship with modern techniques.
              </p>
              <p className="text-gray-600">
                Despite our growth, we remain true to our founding principles: integrity, quality, and a personal 
                commitment to exceeding client expectations. The family's dedication to excellence has been passed 
                down through generations, ensuring that every project bearing the FADCO name represents the highest 
                standards of quality.
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

      {/* Our Vision & Mission Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
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
      <section className="py-20 px-4 md:px-6">
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

      {/* Leadership Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Leadership" 
            subtitle="Meet the team behind FADCO's success"
            center={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Fadi Abdallah" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-1">Fadi Abdallah</h3>
              <p className="text-fadco-gold mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 30 years of experience in construction, Fadi's vision and leadership have guided FADCO 
                from its humble beginnings to its current position as an industry leader.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Sarah Abdallah" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-1">Sarah Abdallah</h3>
              <p className="text-fadco-gold mb-4">Operations Director</p>
              <p className="text-gray-600">
                Bringing expertise in project management and operations, Sarah ensures that every FADCO project runs 
                smoothly and meets our high standards of quality and efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                  <img 
                    src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=200&h=200&q=80" 
                    alt="Karim Hayek" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-fadco-navy mb-1">Karim Hayek</h3>
              <p className="text-fadco-gold mb-4">Head Architect</p>
              <p className="text-gray-600">
                With a keen eye for design and a deep understanding of Lebanese architectural traditions, Karim 
                creates spaces that are both beautiful and functional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
