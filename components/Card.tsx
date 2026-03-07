type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <div
      className="border border-gray-700 rounded-xl p-6 
                    hover:bg-gray-800 hover:scale-[1.02] transform 
                    transition-transform duration-200 ease-out"
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
