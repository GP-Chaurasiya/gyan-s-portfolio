import { Award, Calendar, GraduationCap } from "lucide-react";

const education = [
  {
    degree: "BCA (Hons.)",
    institution: "Dev Sanskriti Vishwavidyalaya",
    year: "Currently Pursuing",
    grade: null,
    status: "current",
  },
  {
    degree: "12th — Science Stream",
    institution: "Senior Secondary School",
    year: "2024",
    grade: "72%",
    status: "completed",
  },
  {
    degree: "10th — Secondary",
    institution: "Secondary School",
    year: "2022",
    grade: "74.2%",
    status: "completed",
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 section-alt"
      data-ocid="education.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Education
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">Academic Background</h2>
          <p className="section-subheading">My educational journey</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative" data-ocid="education.timeline">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"
              aria-hidden="true"
            />
            <div className="space-y-6">
              {education.map((item, i) => (
                <div
                  key={item.degree}
                  className="relative flex gap-6"
                  data-ocid={`education.item.${i + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        item.status === "current"
                          ? "border-primary bg-primary text-primary-foreground shadow-elevated"
                          : "border-border bg-card text-muted-foreground"
                      }`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                  {/* Card */}
                  <div
                    className={`flex-1 bg-card rounded-xl p-5 border card-accent-bar shadow-xs hover:shadow-elevated transition-smooth ${
                      item.status === "current"
                        ? "border-primary/30"
                        : "border-border"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display font-bold text-foreground text-base">
                          {item.degree}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-0.5">
                          {item.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        {item.grade && (
                          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                            <Award className="w-3 h-3" />
                            {item.grade}
                          </span>
                        )}
                        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5 justify-end">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </div>
                      </div>
                    </div>
                    {item.status === "current" && (
                      <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        ● Active
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
