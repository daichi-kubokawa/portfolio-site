export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <h1 className="text-5xl font-extrabold mb-6">
        Hello, I’m <span className="text-blue-400">kubonne</span>
      </h1>
      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        UI/UXデザインとフロントエンド開発を学びながら、
        自分らしいプロダクトを作っています。
      </p>
      <a
        href="/about"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
      >
        About Me →
      </a>
    </section>
  );
}
