import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section>
          <h2>Featured Works</h2>
          <div>
            <article>
              <h3>Graduation Project</h3>
              <p>Service Design / UI UX</p>
              <Link href="/works/graduation-project">View Case Study</Link>
            </article>

            <article>
              <h3>RESONOTE</h3>
              <p>App Design</p>
              <Link href="/works/resonote">View Case Study</Link>
            </article>

            <article>
              <h3>Naterra</h3>
              <p>Web Design</p>
              <Link href="/works/naterra">View Case Study</Link>
            </article>
          </div>
        </section>

        <section>
          <h2>About</h2>
          <p>
            UI/UXデザインとフロントエンドを学びながら、
            体験を形にする制作に取り組んでいます。
          </p>
          <Link href="/about">About Me</Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
