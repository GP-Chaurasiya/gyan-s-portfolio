import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const tasks = [
  "Assisted in office and digital tasks",
  "Worked on data handling and basic digital operations",
  "Gained professional workplace experience",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-background"
      data-ocid="experience.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Experience
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subheading">
            Professional background and internship
          </p>
        </div>

        <div className="max-w-2xl mx-auto" data-ocid="experience.list">
          <div
            className="bg-card card-elevated card-accent-bar rounded-2xl p-6 md:p-8"
            data-ocid="experience.item.1"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-elevated shrink-0">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-xl">
                    Intern
                  </h3>
                  <p className="text-primary font-semibold text-base">
                    Assetplus Consulting
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border">
                <Calendar className="w-4 h-4 text-primary" />
                <span>2 Months</span>
              </div>
            </div>

            <div className="bg-muted/40 rounded-xl p-4 border border-border/50">
              <p className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-3">
                Responsibilities
              </p>
              <ul className="space-y-2.5">
                {tasks.map((task, i) => (
                  <li
                    key={task}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                    data-ocid={`experience.task.${i + 1}`}
                  >
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Office Operations
              </span>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Digital Tasks
              </span>
              <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Data Handling
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
