import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
