import { Button } from "@/components/ui/button";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-[#DF6951]">
          Best Destinations around the world
        </h2>
        <h1 className="text-6xl font-bold w-md mt-6">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="w-md leading-7 mt-6">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex items-center gap-6">
          <Button
            className="bg-[#F1A501] text-white cursor-pointer mt-6"
            variant="outline"
          >
            Find out more
          </Button>
          <Button className="cursor-pointer mt-6" variant="ghost">
            <span className="bg-[#DF6951] rounded-full p-2">
              <IconPlayerPlayFilled className="text-white" />
            </span>
            Play Demo
          </Button>
        </div>
      </div>
      <div>
        <Image src="/traveller.png" width={600} height={600} alt="Site Logo" />
      </div>
    </div>
  );
}

export default Hero;
