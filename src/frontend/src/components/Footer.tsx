import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-card border-t border-border"
      data-ocid="footer.section"
    >
      <div className="container mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              Gyan Prakash Chaurasiya
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              BCA (Hons.) Student · Web Developer · Digital Marketing Learner
            </p>
            <div
              className="flex items-center gap-2"
              data-ocid="footer.social_links"
            >
              <a
                href="https://www.linkedin.com/in/gyan-prakash-chaurasiya-244521346"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-primary/30 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary/50 transition-smooth text-xs font-medium"
                data-ocid="footer.linkedin_link"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border text-muted-foreground bg-muted/50 hover:bg-muted hover:text-foreground hover:border-primary/30 transition-smooth text-xs font-medium"
                data-ocid="footer.github_link"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {["#about", "#skills", "#projects", "#contact"].map((href) => {
                const label = href.slice(1);
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth capitalize"
                    data-ocid={`footer.${label}_link`}
                  >
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:Gyanpc1656@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth group"
                  data-ocid="footer.email_link"
                >
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Gyanpc1656@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918527858309"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid="footer.phone_link"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  +91 8527858309
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Indrapuri, Loni, Ghaziabad, UP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year}. Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
