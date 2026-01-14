import { ServiceCard } from "./ServiceCard";

const SERVICES_DATA = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "weather.png",
  },
  {
    title: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "plane.png",
    isActive: true, // This triggers the special styling
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    icon: "mic.png",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    icon: "gear.png",
  },
];

export default function Category() {
  return (
    <section className="relative py-24 px-4 max-w-7xl mx-auto">
      {/* 2. Header Section */}
      <div className="text-center mb-16">
        <p className="text-gray-500 font-semibold tracking-widest uppercase mb-2">
          Category
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif">
          We Offer Best Services
        </h2>
      </div>

      {/* 3. Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            isActive={service.isActive}
          />
        ))}
      </div>
    </section>
  );
}
