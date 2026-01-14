import Image from "next/image";
import { Nav } from "./Nav";

function Header() {
  return (
    <div className="flex justify-between mt-6">
      <Image src="/logo.svg" width={100} height={100} alt="Site Logo" />
      <Nav />
    </div>
  );
}

export default Header;
