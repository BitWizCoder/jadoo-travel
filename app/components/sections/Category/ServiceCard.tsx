interface Props {
  title: string;
  description: string;
  icon: string;
  isActive?: boolean;
}

export const ServiceCard = ({ title, description, icon, isActive }: Props) => {
  return (
    <div
      className={`flex flex-col items-center p-8 transition-all ${
        isActive ? "bg-white shadow-xl rounded-3xl" : ""
      }`}
    >
      <img src={icon} alt={title} className="mb-6 h-16 w-auto" />
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-center text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};
