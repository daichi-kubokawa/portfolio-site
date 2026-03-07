export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">kubonne portfolio</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-gray-300">
          Home
        </a>
        <a href="/about" className="hover:text-gray-300">
          About
        </a>
      </nav>
    </header>
  );
}
