import { Layout } from "./components/Layout";
import { AboutSection } from "./pages/sections/AboutSection";
import { CertificatesSection } from "./pages/sections/CertificatesSection";
import { ContactSection } from "./pages/sections/ContactSection";
import { EducationSection } from "./pages/sections/EducationSection";
import { ExperienceSection } from "./pages/sections/ExperienceSection";
import { HeroSection } from "./pages/sections/HeroSection";
import { HobbiesSection } from "./pages/sections/HobbiesSection";
import { ProjectsSection } from "./pages/sections/ProjectsSection";
import { SkillsSection } from "./pages/sections/SkillsSection";

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesSection />
      <HobbiesSection />
      <ContactSection />
    </Layout>
  );
}
