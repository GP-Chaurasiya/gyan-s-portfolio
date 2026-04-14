import { Heart } from "lucide-react";

const hobbies = [
  {
    emoji: "⚽",
    name: "Playing Football",
    description: "Enjoy team sports and staying active on the field.",
  },
  {
    emoji: "🏐",
    name: "Playing Volleyball",
    description: "Love the teamwork and energy of volleyball matches.",
  },
  {
    emoji: "🥁",
    name: "Playing Tabla",
    description: "Passionate about Indian classical percussion music.",
  },
];

const languages = [
  { name: "English", level: "Professional", flag: "🇬🇧" },
  { name: "Hindi", level: "Native", flag: "🇮🇳" },
];

export function HobbiesSection() {
  return (
    <section
      id="hobbies"
      className="py-20 section-alt"
      data-ocid="hobbies.section"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Personal
            </span>
            <div className="w-8 h-0.5 bg-primary rounded-full" />
          </div>
          <h2 className="section-heading">Hobbies &amp; Languages</h2>
          <p className="section-subheading">
            Beyond the screen — what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hobbies */}
          <div>
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              My Interests
            </h3>
            <div className="space-y-4" data-ocid="hobbies.list">
              {hobbies.map((hobby, i) => (
                <div
                  key={hobby.name}
                  className="bg-card rounded-xl p-4 border border-border card-elevated hover:shadow-card-hover transition-smooth flex items-start gap-4"
                  data-ocid={`hobbies.item.${i + 1}`}
                >
                  <div className="text-3xl">{hobby.emoji}</div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {hobby.name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-display font-semibold text-foreground flex items-center gap-2 mb-4">
              <span className="text-xl">🌐</span>
              Languages
            </h3>
            <div className="space-y-4" data-ocid="hobbies.languages_list">
              {languages.map((lang, i) => (
                <div
                  key={lang.name}
                  className="bg-card rounded-xl p-4 border border-border card-elevated flex items-center gap-4"
                  data-ocid={`hobbies.language.${i + 1}`}
                >
                  <div className="text-3xl">{lang.flag}</div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-foreground">
                      {lang.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lang.level}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Fun fact card */}
            <div className="mt-4 bg-primary/5 border border-primary/15 rounded-xl p-4">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-primary">Fun fact:</span>{" "}
                I'm currently learning Lithuanian as part of my love for
                exploring new cultures and languages! 🇱🇹
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
