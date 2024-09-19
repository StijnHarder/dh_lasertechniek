import { IoIosCheckmarkCircle } from "react-icons/io";
import GlobalWidth from "./ui/GlobalWidth";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Container from "./ui/Container";

const HeroSection = () => {
  return (
    <div className="bg-[url('/placeholder_background.jpg')] bg-cover h-[350px] w-full">
      <GlobalWidth>
        <div className="flex flex-wrap gap-4 w-full text-primary-dark pt-[100px]">
          <Container className="flex-1 flex-col gap-6">
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
          </Container>
          <Container className="md:flex-2 w-full md:w-fit flex-col gap-6">
            <div className="flex gap-4 items-center justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">Vragen? Bel gerust!</h2>
                <span className="font-extralight">
                  Wij staan voor je klaar!
                </span>
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
              <div className="flex gap-8 items-center px-5 py-2 bg-[#FFD157] rounded-lg cursor-pointer w-full md:w-fit font-light">
                Bel: 06-53549588
              </div>
              <div className="flex gap-8 text-white items-center justify-between px-5 py-2 bg-[#454A63] rounded-lg cursor-pointer w-full md:w-fit font-light">
                Offerte aanvragen
              </div>
            </div>
            <div className="flex gap-[2px] items-center underline font-extralight">
              <FaArrowRight />
              <span>Neem contact op</span>
            </div>
          </Container>
        </div>
      </GlobalWidth>
    </div>
  );
};

export default HeroSection;
