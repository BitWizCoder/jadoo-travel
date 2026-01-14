import Image from "next/image";

function Category() {
  return (
    <div className="flex items-center flex-col">
      <h2>Category</h2>
      <h1>We Offer Best Services</h1>
      <div>
        <div>
          <Image src="/weather.png" width={100} height={100} alt="Site Logo" />
          <h2>Calculated Weather</h2>
          <p>Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
