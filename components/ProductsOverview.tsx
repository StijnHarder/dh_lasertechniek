import Image from "next/image";
import { GiLaserBurst } from "react-icons/gi";

const ProductsOverview = () => {
  return (
    <div className="px-20 font-extralight">
      <div className="flex flex-col gap-4 text-[#454A63] border-[1px] border-[#E8E8E8] p-8 rounded-lg mt-[125px] bg-white">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Welke services leveren wij?</h2>
          <span>
            Bekijk en kies welke vervaardiging van laseren van natuursteen jij
            nodig hebt! <span className="font-bold">Vragen?</span> Neem gerust
            contact met ons op.
          </span>
        </div>
        <div className="flex gap-x-4 mt-10">
          <div className="border-[1px] border-[#E8E8E8] flex-1 flex flex-col justify-between items-start rounded-md p-8 gap-2">
            <div className="rounded-full p-2 bg-[#C113EB] mb-5">
              <GiLaserBurst size={25} color="#FFFFFF" />
            </div>
            <div className="flex-1 rounded-md font-semibold text-xl">
              Natuursteen laseren
            </div>
            <div className="">
              Laseren van natuursteen biedt precisie, unieke gravures en
              duurzame afwerkingen voor diverse toepassingen, van monumenten tot
              maatwerk interieurdesign.
            </div>
            <div className="p-2 border-[1px] border-[#E8E8E8] bg-[#E8E8E8] hover:bg-white rounded-sm mt-5 cursor-pointer">
              Zie projecten
            </div>
          </div>
          <div className="border-[1px] border-[#E8E8E8] flex-1 flex flex-col justify-between items-start rounded-md p-8 gap-2">
            <div className="rounded-full p-2 bg-[#137BEB] mb-5">
              <GiLaserBurst size={25} color="#FFFFFF" />
            </div>
            <div className="flex-1 rounded-md font-semibold text-xl">
              RVS laseren
            </div>
            <div className="">
              Laseren van RVS zorgt voor nauwkeurige markeringen, duurzame gravures en hoogwaardige afwerkingen, ideaal voor industriële en decoratieve toepassingen.
            </div>
            <div className="p-2 border-[1px] border-[#E8E8E8] bg-[#E8E8E8] hover:bg-white rounded-sm mt-5 cursor-pointer">
              Zie projecten
            </div>
          </div>
          <div className="border-[1px] border-[#E8E8E8] flex-1 flex flex-col justify-between items-start rounded-md p-8 gap-2">
            <div className="rounded-full p-2 bg-[#3413EB] mb-5">
              <GiLaserBurst size={25} color="#FFFFFF" />
            </div>
            <div className="flex-1 rounded-md font-semibold text-xl">
              Hout laseren
            </div>
            <div className="">
              Laseren van hout creëert gedetailleerde gravures, op maat gemaakte designs en scherpe snijlijnen voor uiteenlopende projecten.
            </div>
            <div className="p-2 border-[1px] border-[#E8E8E8] bg-[#E8E8E8] hover:bg-white rounded-sm mt-5 cursor-pointer">
              Zie projecten
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsOverview;
