import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string[];
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description: [
      "Developed a responsive personal portfolio website",
      "Designed using HTML, CSS, and JavaScript",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://extraordinary-muffin-02c724.netlify.app/",
  },
  {
    title: "Responsive Business Landing Page",
    description: [
      "Created a responsive business landing page",
      "Focused on layout and user interface design",
    ],
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://69dbc8cf205345beb554be21--keen-dasik-ba0d5a.netlify.app/",
  },
  {
    title: "Login System Web Application",
    description: [
      "Built a login page interface for authentication practice",
      "Demonstrates form validation and user input handling",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://69dbca7050f6aadfccb5a335--sparkling-kashata-3b906a.netlify.app/login",
  },
  {
    title: "Bindiya Jewellers Business Website",
    description: [
      "Developed a jewellery business website to showcase products",
      "Designed responsive layout for online business presence",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://bindiya-jewellers.netlify.app",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 section-alt"
      data-ocid="projects.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Projects
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">My Work</h2>
          <p className="section-subheading">Projects I've built and deployed</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          data-ocid="projects.list"
        >
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="bg-card card-accent-bar rounded-2xl p-6 border border-border hover:shadow-card-hover transition-smooth group flex flex-col"
              data-ocid={`projects.item.${i + 1}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-elevated">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-foreground text-lg mb-3 group-hover:text-primary transition-smooth leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <ul className="space-y-1 mb-4 flex-1">
                {project.description.map((desc) => (
                  <li
                    key={desc}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs bg-primary/10 text-primary border-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="sm"
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 transition-smooth font-semibold"
                asChild
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid={`projects.view_button.${i + 1}`}
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
