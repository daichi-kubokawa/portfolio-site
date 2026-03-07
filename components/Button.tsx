type ButtonProps = {
  label: string;
  href?: string;
};

export default function Button({ label, href }: ButtonProps) {
  return (
    <a
      href={href || "#"}
      className="bg-primary text-white px-5 py-2 rounded-lg font-medium
                 hover:bg-blue-400 hover:scale-105 transform transition-transform duration-200 ease-out shadow-sm"
    >
      {label}
    </a>
  );
}
