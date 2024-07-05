import Image from 'next/image';
import styles from './page.module.css';
import { Nav } from '@/components/Nav/Nav';
import { HeroSection } from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
    </main>
  );
}
