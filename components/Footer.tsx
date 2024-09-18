import { BiConversation } from "react-icons/bi";
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import GlobalWidth from "./ui/GlobalWidth";

const Footer = () => {
  return (
    <GlobalWidth>
      <div className="flex flex-col mt-[100px] mb-2 bg-white w-full">
        <div className="bg-white flex flex-col gap-4 h-fit border-[1px] border-border_gray rounded-lg p-6 font-extralight text-primary-dark">
          <div className="flex flex-col gap-1 ">
            <h2 className="text-2xl font-bold">Klantenservice</h2>
            <span>
              Hulp nodig bij een offerte of een vraag over een product? We
              helpen je graag op weg.
            </span>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <div className="flex gap-5 items-center bg-border_gray p-4 rounded-md border-[1px] border-border_gray hover:bg-white hover:text-primary-dark cursor-pointer">
              <div>
                <BiConversation size={25} />
              </div>
              <div className="flex flex-col gap-[0px]">
                <span className="font-bold">Veelgestelde vragen</span>
                <span className="text-sm">Bekijk ze hier</span>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-border_gray p-4 rounded-md border-[1px] border-border_gray hover:bg-white hover:text-primary-dark cursor-pointer">
              <div>
                <FaPhoneAlt size={25} />
              </div>
              <div className="flex flex-col gap-[0px]">
                <span className="font-bold">Bel ons</span>
                <span className="text-sm">06-31206675</span>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-border_gray p-4 rounded-md border-[1px] border-border_gray hover:bg-white hover:text-primary-dark cursor-pointer">
              <div>
                <MdOutlineAlternateEmail size={25} />
              </div>
              <div className="flex flex-col gap-[0px]">
                <span className="font-bold">Neem contact op</span>
                <span className="text-sm">info@dhlasertechniek.nl</span>
              </div>
            </div>
            <div className="flex gap-5 items-center bg-border_gray p-4 rounded-md border-[1px] border-border_gray hover:bg-white hover:text-primary-dark cursor-pointer">
              <div>
                <TbMapSearch size={25} />
              </div>
              <div className="flex flex-col gap-[0px]">
                <span className="font-bold">Kom gezellig langs!</span>
                <span className="text-sm">Open google maps</span>
              </div>
            </div>
          </div>
          <div className="flex gap-[1px] pt-10 items-center cursor-pointer">
            <FaArrowUp />
            <span className="underline">Terug naar boven</span>
          </div>
        </div>
        <div className="flex justify-between pt-2">
          <p>Copyright © 2024</p>
          <div className="flex gap-4">
            <p className="hidden md:block">Algemene Voorwaarden</p>
            <p className="hidden md:block">Cookies</p>
            <p className="hidden md:block">Privacy Policy</p>
            <p className="hidden md:block">Sitemap</p>
          </div>
        </div>
      </div>
    </GlobalWidth>
  );
};

export default Footer;
