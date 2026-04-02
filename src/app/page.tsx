import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Festiartes from '@/components/Festiartes';
import Archive from '@/components/Archive';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Partners />
        <Festiartes />
        <Archive />
      </main>
      <Footer />
    </>
  );
}
