import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          現在、UI/UXデザインとフロントエンド開発を学びながら、
          自分の世界観を表現できるアプリを制作しています。
        </p>
      </main>
      <Footer />
    </>
  );
}
