import Image from "next/image";

function DestinationsCard() {
  return (
    <div className="border">
      <Image src="/rome.png" width={500} height={500} alt="city image" />
      <div>
        <h2>Rome, Italty</h2>
        <h2>$5,42k</h2>
      </div>
      <p>10 Days Trip</p>
    </div>
  );
}

export default DestinationsCard;
