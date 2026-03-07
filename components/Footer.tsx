export default function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 text-sm py-6 px-8 mt-10 w-full text-center border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} kubonne portfolio — Built with{" "}
        <span className="text-primary">Next.js</span> &{" "}
        <span className="text-accent">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
