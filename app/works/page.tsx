import Header from "../../components/Header";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function WorksPage() {
  const works = [
    {
      title: "Portfolio Site",
      description: "Next.jsとTailwindで構築した個人ポートフォリオ。",
    },
    {
      title: "Illustrator's Gallery",
      description: "友人の作品をTumblr連携で表示する予定。",
    },
    {
      title: "UI Design Practice",
      description: "UI/UXスクールでの課題デザインまとめ。",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
        <h1 className="text-4xl font-bold mb-8">My Works</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {works.map((work, index) => (
            <Card
              key={index}
              title={work.title}
              description={work.description}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button label="Back to Home" href="/" />
        </div>
      </main>
      <Footer />
    </>
  );
}
