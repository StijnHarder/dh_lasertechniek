import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const HeroSection = () => {
  return (
    <div className="flex gap-x-4 pt-[100px] w-full h-[350px] px-20 bg-[url('/placeholder_background.jpg')] bg-cover">
      <div className="flex-1 flex flex-col gap-6 h-fit bg-white text-[#454A63] border-[1px] border-[#E8E8E8] p-8 rounded-lg">
        <h1 className="text-4xl font-bold">
          Lasertechniek op alle soorten natuursteen
        </h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div>
              <IoIosCheckmarkCircle size={20} />
            </div>
            <span>Al 100 jaar actief in de natuursteen</span>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <IoIosCheckmarkCircle size={20} />
            </div>
            <span>Verfijnde lasertechniek</span>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <IoIosCheckmarkCircle size={20} />
            </div>
            <span>Volgende werkdag een offerte op maat</span>
          </div>
        </div>
        <div className="flex gap-8 items-center justify-between px-5 py-2 bg-[#FFD157] rounded-lg cursor-pointer w-max font-light">
          Producten
        </div>
      </div>
      <div className="flex-2 flex flex-col gap-5 p-6 text-[#454A63] bg-[#FFFFFF] border-[1px] border-[#E8E8E8] h-fit rounded-lg">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-semibold">Vragen? Bel gerust!</h2>
            <span className="font-extralight">Wij staan voor je klaar!</span>
          </div>
          <div className="rounded-full bg-[#FFD157] p-3">
            <Image
              src={"/avatar.svg"}
              width={50}
              height={50}
              alt="avatar image"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-8 items-center justify-between px-5 py-2 bg-[#FFD157] rounded-lg cursor-pointer w-fit font-light">
            Bel: 06-53549588
          </div>
          <div className="flex gap-8 text-white items-center justify-between px-5 py-2 bg-[#454A63] rounded-lg cursor-pointer w-fit font-light">
            Offerte aanvragen
          </div>
        </div>
        <div className="flex gap-[2px] items-center underline font-extralight">
          <FaArrowRight />
          <span>Neem contact op</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
