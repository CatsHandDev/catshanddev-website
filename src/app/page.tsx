/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import styles from './styles.module.scss';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ProjectSection } from '@/components/project/ProjectSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/Header/Header';

function App() {
  return (
    <div className={styles.mainWrapper}>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;