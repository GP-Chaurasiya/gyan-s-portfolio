import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="hero-gradient-accent min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden"
      data-ocid="home.section"
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none hero-blob-primary"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-[0.05] blur-3xl pointer-events-none hero-blob-secondary"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assets/images/profile-photo.jpeg"
                alt="Gyan Prakash Chaurasiya"
                className="w-20 h-20 rounded-full object-cover object-top ring-2 ring-primary/40 shadow-elevated shrink-0"
                data-ocid="home.profile_avatar"
              />
              <Badge
                variant="secondary"
                className="text-primary bg-primary/10 border-primary/20"
                data-ocid="home.status_badge"
              >
                Open to Internships &amp; Fresher Roles
              </Badge>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-4">
              Hi, I'm <span className="text-primary">Gyan Prakash</span>{" "}
              <span className="text-muted-foreground font-medium text-3xl sm:text-4xl xl:text-5xl block mt-1">
                Chaurasiya
              </span>
            </h1>

            <p className="text-lg text-muted-foreground font-medium mb-2">
              BCA (Hons.) Student · Web Developer · Digital Marketing Learner
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-primary" />
                Ghaziabad, Uttar Pradesh
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-primary" />
                Gyanpc1656@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-primary" />
                +91 8527858309
              </span>
            </div>

            <div className="flex flex-wrap gap-3" data-ocid="home.cta_buttons">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-elevated hover:shadow-card-hover transition-smooth font-semibold"
                onClick={scrollToContact}
                data-ocid="home.contact_button"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 transition-smooth font-semibold"
                onClick={scrollToProjects}
                data-ocid="home.projects_button"
              >
                View Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-3 mt-5"
              data-ocid="home.social_links"
            >
              <a
                href="https://www.linkedin.com/in/gyan-prakash-chaurasiya-244521346"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-smooth text-sm font-medium shadow-sm"
                data-ocid="home.linkedin_link"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground bg-card hover:bg-muted hover:border-primary/30 hover:text-primary transition-smooth text-sm font-medium shadow-sm"
                data-ocid="home.github_link"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-md">
              <div
                className="absolute inset-0 gradient-primary opacity-10 rounded-2xl blur-xl scale-105"
                aria-hidden="true"
              />
              <img
                src="/assets/generated/hero-portfolio.dim_800x600.png"
                alt="Web developer portfolio illustration"
                className="relative w-full rounded-2xl shadow-elevated border border-border/40 object-cover"
                width={800}
                height={600}
              />
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-elevated animate-scale-in">
                <p className="text-xs text-muted-foreground">
                  Projects Completed
                </p>
                <p className="text-2xl font-display font-bold text-primary">
                  4+
                </p>
              </div>
              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-elevated animate-scale-in">
                <p className="text-xs text-muted-foreground">Internship</p>
                <p className="text-2xl font-display font-bold text-primary">
                  4 mo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-fade-in">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth group"
            aria-label="Scroll to About"
            data-ocid="home.scroll_indicator"
          >
            <span className="text-xs uppercase tracking-widest font-medium">
              Scroll down
            </span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-smooth" />
          </button>
        </div>
      </div>
    </section>
  );
}
