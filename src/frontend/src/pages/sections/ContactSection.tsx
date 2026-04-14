import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Gyanpc1656@gmail.com",
    href: "mailto:Gyanpc1656@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8527858309",
    href: "tel:+918527858309",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Indrapuri, Loni, Ghaziabad, Uttar Pradesh",
    href: null,
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens the default mail client as a simple contact mechanism
    const mailto = `mailto:Gyanpc1656@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-background"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contact
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have an opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-foreground text-lg mb-6">
              Contact Details
            </h3>
            <div className="space-y-4 mb-8" data-ocid="contact.info_list">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border card-elevated"
                    data-ocid={`contact.info.${i + 1}`}
                  >
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shrink-0 shadow-elevated">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground hover:text-primary transition-smooth break-all"
                          data-ocid={`contact.${item.label.toLowerCase()}_link`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-primary/5 border border-primary/15 rounded-xl p-5">
              <p className="text-sm text-foreground font-medium mb-1">
                Open to opportunities
              </p>
              <p className="text-sm text-muted-foreground">
                I'm actively looking for internships and entry-level positions
                in web development and digital marketing.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-card card-elevated card-accent-bar rounded-2xl p-6 md:p-8"
            data-ocid="contact.form_card"
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center gap-4 h-64 text-center"
                data-ocid="contact.success_state"
              >
                <CheckCircle className="w-14 h-14 text-primary" />
                <h3 className="font-display font-bold text-foreground text-lg">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your mail client should open with the pre-filled message.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                      data-ocid="contact.name_input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-input"
                      data-ocid="contact.email_input"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Internship Opportunity / Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-background border-input"
                    data-ocid="contact.subject_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hi Gyan, I'd like to discuss..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="bg-background border-input resize-none"
                    data-ocid="contact.message_textarea"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground shadow-elevated hover:shadow-card-hover transition-smooth font-semibold"
                  data-ocid="contact.submit_button"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
