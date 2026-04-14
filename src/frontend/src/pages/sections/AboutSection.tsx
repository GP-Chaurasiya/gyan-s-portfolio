import { CheckCircle } from "lucide-react";

const highlights = [
  "Proficient in HTML, CSS, JavaScript, Python & C",
  "2-month internship at Assetplus Consulting",
  "Knowledge of SQL, WordPress & Digital Marketing",
  "Passionate about building real-world projects",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-background"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="w-64 h-64 rounded-2xl gradient-primary opacity-10 absolute inset-0 blur-xl scale-110"
                aria-hidden="true"
              />
              <div className="relative w-64 h-64 rounded-2xl bg-card card-elevated card-accent-bar overflow-hidden">
                <img
                  src="/assets/images/profile-photo.jpeg"
                  alt="Gyan Prakash Chaurasiya"
                  className="w-full h-full object-cover object-top"
                  data-ocid="about.profile_photo"
                />
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl gradient-primary opacity-20 rotate-12"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Me
              </span>
            </div>
            <h2 className="section-heading mb-4">
              Motivated Developer &amp; Lifelong Learner
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">
              I am a motivated BCA (Hons.) student currently pursuing my degree
              from Dev Sanskriti Vishwavidyalaya. I have foundational knowledge
              in programming languages such as Python, C, and JavaScript, along
              with skills in HTML, CSS, SQL, and Digital Marketing. I completed
              a 2-month internship at Assetplus Consulting, where I gained
              practical experience in office and digital tasks. I am passionate
              about learning new technologies and building real-world projects
              to enhance my technical skills.
            </p>

            <ul className="space-y-2" data-ocid="about.highlights_list">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
