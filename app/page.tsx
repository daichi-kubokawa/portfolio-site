import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import FeaturedWorks from "@/components/sections/FeaturedWorks/FeaturedWorks";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWorks />
      </main>
      <Footer />
    </>
  );
}
