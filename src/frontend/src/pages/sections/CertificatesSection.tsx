import { Badge } from "@/components/ui/badge";
import {
  Award,
  Calendar,
  ExternalLink,
  FileText,
  Trophy,
  University,
} from "lucide-react";
import { useState } from "react";

interface Certificate {
  title: string;
  event: string;
  institution: string;
  date: string;
  category: string;
  badge: string;
  badgeVariant: "gold" | "silver" | "default";
  image: string;
  signedBy: string;
  isPdf?: boolean;
}

const certificates: Certificate[] = [
  {
    title: "Certificate of Participation",
    event: '"AI for Sanskriti" International Conference',
    institution: "Dev Sanskriti Vishwavidyalaya, Haridwar",
    date: "21st February 2026",
    category: "Website Designing & Digital Poster",
    badge: "Participation",
    badgeVariant: "default",
    image: "/assets/images/cert-participation.jpeg",
    signedBy: "Dr. Chinmay Pandya, Pro-Vice Chancellor",
  },
  {
    title: "Certificate of Appreciation",
    event: '"AI for Sanskriti" International Conference',
    institution: "Dev Sanskriti Vishwavidyalaya, Haridwar",
    date: "21st February 2026",
    category: "Infographics Competition",
    badge: "2nd Position",
    badgeVariant: "silver",
    image: "/assets/images/cert-infographics.jpeg",
    signedBy: "Dr. Chinmay Pandya, Pro-Vice Chancellor",
  },
  {
    title: "Certificate of Appreciation",
    event: '"AI for Sanskriti" International Conference',
    institution: "Dev Sanskriti Vishwavidyalaya, Haridwar",
    date: "21st February 2026",
    category: "Hackathon",
    badge: "1st Position",
    badgeVariant: "gold",
    image: "/assets/images/cert-hackathon.jpeg",
    signedBy: "Dr. Chinmay Pandya, Pro-Vice Chancellor",
  },
  {
    title: "Certificate of Participation",
    event: "Hack4Delhi — Unstop Holiday Fest 2025",
    institution: "Netaji Subhas University of Technology (NSUT), Delhi",
    date: "2025",
    category: "Hackathon",
    badge: "Participant",
    badgeVariant: "default",
    image: "/assets/images/cert-hack4delhi.jpg",
    signedBy: "Issued via Unstop Platform",
  },
  {
    title: "Certificate of Participation",
    event: "Graph-E-Thon 3.0",
    institution: "Graphic Era (Deemed to be University) (GEU), Dehradun",
    date: "2025",
    category: "Hackathon",
    badge: "Participant",
    badgeVariant: "default",
    image: "/assets/images/cert-graph-e-thon.jpg",
    signedBy: "Issued via Unstop Platform",
  },
  {
    title: "Internship Completion Certificate",
    event: "Web Development Internship",
    institution: "Assetplus Consulting",
    date: "3rd June – 31st July, 2025 (Issued: 06.09.2025)",
    category: "Internship",
    badge: "Completed",
    badgeVariant: "gold",
    image: "/assets/images/cert-assetsplus.pdf",
    signedBy: "Meenakshi, HR Executive",
    isPdf: true,
  },
  {
    title: "Certificate of Participation",
    event: "Emotion-Aware Encryption Hackathon",
    institution: "UnsaidTalks Education Pvt. Ltd.",
    date: "07/03/2026",
    category: "Hackathon",
    badge: "Participated",
    badgeVariant: "default",
    image: "/assets/images/cert-unsaid-talks.png",
    signedBy: "Raghav Chopra, Founder & CEO",
  },
];

function badgeClass(variant: Certificate["badgeVariant"]) {
  switch (variant) {
    case "gold":
      return "bg-amber-500/15 text-amber-700 border-amber-400/40 dark:text-amber-400";
    case "silver":
      return "bg-slate-400/15 text-slate-600 border-slate-400/40 dark:text-slate-300";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
}

function CertCard({
  cert,
  index,
}: {
  cert: Certificate;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-card rounded-2xl card-elevated overflow-hidden flex flex-col animate-slide-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
      data-ocid={`certificates.item.${index + 1}`}
    >
      {/* Certificate image / PDF preview */}
      {cert.isPdf ? (
        <div className="relative overflow-hidden bg-muted/50 aspect-video flex flex-col items-center justify-center gap-3 border-b border-border/40">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <FileText className="w-7 h-7 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            PDF Certificate
          </p>
          <a
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold hover:underline transition-colors"
            data-ocid={`certificates.view_pdf.${index + 1}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View Certificate
          </a>
          {expanded && (
            <div className="absolute inset-0 bg-card p-2">
              <object
                data={cert.image}
                type="application/pdf"
                className="w-full h-full rounded-lg"
                aria-label={cert.title}
              >
                <p className="text-xs text-muted-foreground text-center py-4">
                  PDF preview not supported.{" "}
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Open PDF
                  </a>
                </p>
              </object>
            </div>
          )}
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="absolute bottom-2 right-2 text-[10px] text-primary-foreground bg-primary/80 px-2 py-0.5 rounded-full font-medium backdrop-blur-sm hover:bg-primary transition-colors"
            aria-label={
              expanded ? "Collapse PDF preview" : "Preview PDF inline"
            }
            data-ocid={`certificates.image_toggle.${index + 1}`}
          >
            {expanded ? "Collapse" : "Preview PDF"}
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setExpanded((v) => !v)}
          aria-label={
            expanded ? "Collapse certificate image" : "Expand certificate image"
          }
          data-ocid={`certificates.image_toggle.${index + 1}`}
        >
          <img
            src={cert.image}
            alt={cert.title}
            className={`w-full object-cover transition-all duration-500 group-hover:scale-105 ${
              expanded ? "aspect-auto max-h-96" : "aspect-video"
            }`}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-200" />
          <span className="absolute bottom-2 right-2 text-[10px] text-primary-foreground bg-primary/80 px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
            {expanded ? "Click to collapse" : "Click to expand"}
          </span>
        </button>
      )}

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Badges row */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeClass(cert.badgeVariant)}`}
          >
            {cert.badgeVariant === "gold" && <Trophy className="w-3 h-3" />}
            {cert.badgeVariant === "silver" && <Award className="w-3 h-3" />}
            {cert.badge}
          </span>
          <Badge variant="secondary" className="text-xs text-muted-foreground">
            {cert.category}
          </Badge>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-bold text-foreground text-lg leading-snug mb-1">
            {cert.title}
          </h3>
          <p className="text-primary text-sm font-medium leading-snug">
            {cert.event}
          </p>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-1.5 text-sm text-muted-foreground mt-auto">
          <span className="flex items-center gap-1.5">
            <University className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{cert.institution}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
            {cert.date}
          </span>
        </div>

        {/* Signed by */}
        <p className="text-xs text-muted-foreground border-t border-border/60 pt-3 mt-1">
          Signed by:{" "}
          <span className="text-foreground font-medium">{cert.signedBy}</span>
        </p>
      </div>
    </div>
  );
}

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="py-20 bg-muted/30"
      data-ocid="certificates.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Recognition
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading mb-3">
            Certificates &amp; Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Recognized for web design, infographics, hackathon performance, and
            internship completion across national conferences, competitions, and
            organizations.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="certificates.list"
        >
          {certificates.map((cert, i) => (
            <CertCard key={cert.event} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
