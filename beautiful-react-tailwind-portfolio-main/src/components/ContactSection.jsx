import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ⚠️ Backend/API logic stays same
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "I’ll get back to you shortly.",
      });
      e.target.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Feel free to reach out — I&apos;m always open to collaboration and new ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT — CONTACT LINKS */}
          <div className="space-y-6">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/919692544587?text=Hello%20Ruturaj,%20I%20want%20to%20connect"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg bg-background hover:border hover:border-primary transition"
            >
              <Phone className="text-primary" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-muted-foreground">+91 7656003621</p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:ruturajbiswal18@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg bg-background hover:border hover:border-primary transition"
            >
              <Mail className="text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">ruturajbiswal18@gmail.com</p>
              </div>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
              <MapPin className="text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">India</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="pt-6">
              <p className="font-medium mb-4">Follow Me</p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ruturajbiswal1/"
                  target="_blank"
                  className="p-3 rounded-full bg-background hover:text-primary transition"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://www.instagram.com/code.snacks_/?hl=en"
                  target="_blank"
                  className="p-3 rounded-full bg-background hover:text-primary transition"
                >
                  <Instagram />
                </a>

                <a
                  href="https://x.com/ruturajbiswal18"
                  target="_blank"
                  className="p-3 rounded-full bg-background hover:text-primary transition"
                >
                  <Twitter />
                </a>

                <a
                  href="https://www.youtube.com/@ruturaj_biswal"
                  target="_blank"
                  className="p-3 rounded-full bg-background hover:text-primary transition"
                >
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                required
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md border bg-background"
              />

              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md border bg-background"
              />

              <textarea
                required
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md border bg-background resize-none"
                rows={4}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
