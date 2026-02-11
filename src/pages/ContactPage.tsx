
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEO from "@/components/SEO";
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@acg-lb.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: "New inquiry from ACC website",
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

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
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your message. Please try again or call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Contact Abdallah Contracting Company"
        description="Get in touch with ACC's team in Beirut to discuss your construction, renovation, or development project, or request a consultation."
      />
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
                  <div className="bg-acg-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-acg-navy mb-1">Office Location</h3>
                    <p className="text-gray-600">Beirut, Lebanon</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-acg-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-acg-navy mb-1">Email</h3>
                    <a href="mailto:info@acg-lb.com" className="text-gray-600 hover:text-acg-gold">
                      info@acg-lb.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-acg-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-acg-navy mb-1">Phone</h3>
                    <a href="tel:+9613255206" className="text-gray-600 hover:text-acg-gold">
                      +961 3 255 206
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-acg-navy rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-acg-navy mb-1">Office Hours</h3>
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
              <h3 className="text-2xl font-bold text-acg-navy mb-6">Send Us a Message</h3>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acg-navy focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acg-navy focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acg-navy focus:border-transparent"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acg-navy focus:border-transparent"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Plumbing, Heating & Drainage">Plumbing, Heating & Drainage</option>
                      <option value="Electrical & Automation">Electrical & Automation</option>
                      <option value="Renovation">Renovation</option>
                      <option value="General Contracting">General Contracting</option>
                      <option value="Pools & Landscape Systems">Pools & Landscape Systems</option>
                      <option value="Supervision">Supervision</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Maintenance">Maintenance</option>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-acg-navy focus:border-transparent"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-acg-navy text-white py-3 rounded-md font-medium hover:bg-acg-gold transition-colors flex items-center justify-center"
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
            <iframe
              title="ACC Beirut Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6672.009912451387!2d35.485!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172158f1e3e3%3A0x4f9c8e8f3c6c31e1!2sBeirut%2C%20Lebanon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
