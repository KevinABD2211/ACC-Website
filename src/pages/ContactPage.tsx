
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent!",
        description: "We've received your inquiry and will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
        imageUrl="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Information & Form */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <SectionTitle 
                title="Get in Touch" 
                subtitle="We're here to answer any questions about our services and how we can help with your construction needs."
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-fadco-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fadco-navy mb-1">Office Location</h3>
                    <p className="text-gray-600">Beirut, Lebanon</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-fadco-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fadco-navy mb-1">Email</h3>
                    <a href="mailto:fadcosarl@hotmail.com" className="text-gray-600 hover:text-fadco-gold">fadcosarl@hotmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-fadco-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fadco-navy mb-1">Phone</h3>
                    <a href="tel:+96132552063" className="text-gray-600 hover:text-fadco-gold">+961 3 255 206</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-fadco-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-fadco-navy mb-1">Office Hours</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                      </div>
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-gray-600">9:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-fadco-navy mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fadco-navy focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fadco-navy focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fadco-navy focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interest *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fadco-navy focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Plumbing, Heating & Drainage">Plumbing, Heating & Drainage</option>
                      <option value="Electrical & Automation">Electrical & Automation</option>
                      <option value="Construction & Renovation">Construction & Renovation</option>
                      <option value="Outdoor & Landscape Systems">Outdoor & Landscape Systems</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fadco-navy focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-fadco-navy text-white py-3 rounded-md font-medium hover:bg-fadco-gold transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Our Location" 
            subtitle="Visit our office in Beirut"
            center={true}
          />
          <div className="mt-8 h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* Google Map placeholder */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-fadco-navy mx-auto mb-2" />
                <p className="text-gray-600">Google Map showing our Beirut office location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
