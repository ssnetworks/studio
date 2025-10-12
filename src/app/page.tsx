import Header from '@/components/layout/header';
import Hero from '@/components/home/hero';
import WhyStrike from '@/components/home/why-strike';
import Courses from '@/components/home/courses';
import CommunityEvents from '@/components/home/community-events';
import Contact from '@/components/home/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="pt-[110px] max-w-[1200px] mx-auto px-5 w-full">
        <Hero />
        <WhyStrike />
        <Courses />
        <CommunityEvents />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
