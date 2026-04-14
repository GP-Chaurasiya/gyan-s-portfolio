import { BookOpen } from "lucide-react";

const technicalSkills = [
  { name: "HTML", level: 85 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 70 },
  { name: "Python", level: 65 },
  { name: "C Programming", level: 60 },
  { name: "SQL", level: 55 },
  { name: "WordPress", level: 70 },
  { name: "Microsoft Office", level: 80 },
  { name: "Digital Marketing", level: 65 },
  { name: "Photo & Video Editing", level: 60 },
];

const learningSkills = [
  "Data Structures & Algorithms (DSA)",
  "Lithuanian Language",
  "Advanced JavaScript",
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 bg-background"
      data-ocid="skills.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Skills
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="section-subheading">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Technical Skills — Progress bars */}
          <div
            className="bg-card card-elevated card-accent-bar rounded-2xl p-6"
            data-ocid="skills.technical_card"
          >
            <h3 className="font-display font-bold text-foreground mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md gradient-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">
                  T
                </span>
              </span>
              Technical Skills
            </h3>
            <div className="space-y-4" data-ocid="skills.technical_list">
              {technicalSkills.map((skill, i) => (
                <div
                  key={skill.name}
                  data-ocid={`skills.technical.item.${i + 1}`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full gradient-primary rounded-full transition-smooth"
                      style={{ width: `${skill.level}%` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <div
              className="bg-card card-elevated card-accent-bar rounded-2xl p-6 mb-6"
              data-ocid="skills.learning_card"
            >
              <h3 className="font-display font-bold text-foreground mb-5 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Currently Learning
              </h3>
              <div className="space-y-3" data-ocid="skills.learning_list">
                {learningSkills.map((skill, i) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/15"
                    data-ocid={`skills.learning.item.${i + 1}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                    <span className="ml-auto text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full font-medium">
                      Learning
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill pills grid */}
            <div
              className="bg-card card-elevated rounded-2xl p-6"
              data-ocid="skills.pills_card"
            >
              <h3 className="font-display font-bold text-foreground mb-4">
                Quick Overview
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, i) => (
                  <span
                    key={skill.name}
                    className="skill-pill"
                    data-ocid={`skills.pill.${i + 1}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
