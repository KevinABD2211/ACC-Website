import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PageHeader from "@/components/PageHeader";
import SectionTitle from "@/components/SectionTitle";
import SEO from "@/components/SEO";
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Plumbing",
  "Electrical",
  "Renovation",
  "General Contracting",
  "Pools",
  "Supervision",
  "Consulting",
  "Maintenance",
  "Property Care",
  "General Inquiry",
] as const;

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
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>(0.1);
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal<HTMLElement>(0.1);

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
        title: "Message Sent",
        description: "We've received your inquiry and will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
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
        subtitle="We respond within 24 hours"
        imageUrl="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1920&q=80"
      />

      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
            <div
              ref={infoRef}
              className={cn("lg:col-span-2 reveal", infoVisible && "visible")}
            >
              <SectionTitle
                title="Get in Touch"
                subtitle="Request a quote or schedule a consultation. We respond within 24 hours."
              />

              <div className="space-y-8 mt-10 stagger-children">
                <a
                  href="https://wa.me/961708080405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group transition-all duration-500"
                >
                  <div className="bg-acg-navy w-11 h-11 flex items-center justify-center flex-shrink-0 transition-colors duration-500 group-hover:bg-acg-gold">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-acg-navy mb-0.5">WhatsApp</h3>
                    <p className="text-slate-400 text-sm">Fastest way to reach us</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps?q=Beirut,+Lebanon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-5 group transition-all duration-500"
                >
                  <div className="bg-acg-navy w-11 h-11 flex items-center justify-center flex-shrink-0 transition-colors duration-500 group-hover:bg-acg-gold">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-acg-navy mb-0.5">Office Location</h3>
                    <p className="text-slate-400 text-sm">Beirut, Lebanon</p>
                  </div>
                </a>

                <a
                  href="mailto:info@acg-lb.com"
                  className="flex items-start gap-5 group transition-all duration-500"
                >
                  <div className="bg-acg-navy w-11 h-11 flex items-center justify-center flex-shrink-0 transition-colors duration-500 group-hover:bg-acg-gold">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-acg-navy mb-0.5">Email</h3>
                    <p className="text-slate-400 text-sm">info@acg-lb.com</p>
                  </div>
                </a>

                <a
                  href="tel:+9613255206"
                  className="flex items-start gap-5 group transition-all duration-500"
                >
                  <div className="bg-acg-navy w-11 h-11 flex items-center justify-center flex-shrink-0 transition-colors duration-500 group-hover:bg-acg-gold">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-acg-navy mb-0.5">Phone</h3>
                    <p className="text-slate-400 text-sm">+961 3 255 206</p>
                  </div>
                </a>

                <div className="flex items-start gap-5">
                  <div className="bg-acg-navy w-11 h-11 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-semibold text-acg-navy mb-2">Office Hours</h3>
                    <div className="space-y-1 text-sm text-slate-400">
                      <p>
                        <span className="text-slate-500">Mon – Fri</span>{" "}
                        &middot; 8:00 AM – 5:00 PM
                      </p>
                      <p>
                        <span className="text-slate-500">Saturday</span>{" "}
                        &middot; 9:00 AM – 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={formRef}
              className={cn("lg:col-span-3 reveal", formVisible && "visible")}
            >
              <div className="border border-slate-100 p-8 md:p-10">
                <h3 className="text-xl font-display font-semibold text-acg-navy mb-8">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[11px] tracking-[0.25em] uppercase text-acg-gold mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full py-3 px-4 border border-slate-200 bg-white focus:outline-none focus:border-acg-navy transition-colors duration-500 text-sm text-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] tracking-[0.25em] uppercase text-acg-gold mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-3 px-4 border border-slate-200 bg-white focus:outline-none focus:border-acg-navy transition-colors duration-500 text-sm text-slate-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] tracking-[0.25em] uppercase text-acg-gold mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-3 px-4 border border-slate-200 bg-white focus:outline-none focus:border-acg-navy transition-colors duration-500 text-sm text-slate-600"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[11px] tracking-[0.25em] uppercase text-acg-gold mb-2"
                      >
                        Service Interest
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full py-3 px-4 border border-slate-200 bg-white focus:outline-none focus:border-acg-navy transition-colors duration-500 text-sm text-slate-600"
                        required
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[11px] tracking-[0.25em] uppercase text-acg-gold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full py-3 px-4 border border-slate-200 bg-white focus:outline-none focus:border-acg-navy transition-colors duration-500 text-sm text-slate-600 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center justify-center gap-3 w-full border border-acg-navy text-acg-navy px-10 py-4 text-[12px] tracking-[0.15em] uppercase font-bold transition-all duration-500 hover:bg-acg-navy hover:text-white disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={mapRef}
        className={cn("py-28 md:py-36 bg-acg-navy reveal", mapVisible && "visible")}
      >
        <div className="max-w-[1200px] mx-auto px-8">
          <SectionTitle
            title="Our Location"
            subtitle="Visit our office in Beirut"
            center
            className="text-white [&_h2]:text-white [&_p]:text-white/35"
          />
          <div className="h-[28rem] mt-12 border border-white/10 overflow-hidden">
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
