import DestinationsCard from "./DestinationCard";

const DestinationsData = [
  {
    location: "Rome, Italty",
    price: "$5.42k",
    trip: "10 Days Trip",
    image: "rome.png",
  },
  {
    location: "London, UK",
    price: "$10.42k",
    trip: "10 Days Trip",
    image: "london.jpg",
  },
  {
    location: "Full Europe",
    price: "$7.42k",
    trip: "10 Days Trip",
    image: "europe.png",
  },
];

function Destinations() {
  return (
    <div className="flex justify-center gap-10">
      <DestinationsCard />
      <DestinationsCard />
      <DestinationsCard />
    </div>
  );
}

export default Destinations;
