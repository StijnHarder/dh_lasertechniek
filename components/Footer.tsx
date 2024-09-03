import { BiConversation } from "react-icons/bi"
import { FaArrowUp, FaPhoneAlt } from "react-icons/fa"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { TbMapSearch } from "react-icons/tb"

const Footer = () => {
  return (
    <div className="flex flex-col mt-[100px] px-20 mb-2 bg-white w-full">
        <div className="bg-white flex flex-col gap-4 h-fit border-[1px] border-[#E8E8E8] rounded-lg p-6 font-extralight text-[#454A63]">
            <div className="flex flex-col gap-1 ">
                <h2 className="text-2xl font-bold">Klantenservice</h2>
                <span>Hulp nodig bij een offerte of een vraag over een product? We helpen je graag op weg.</span>
            </div>
            <div className="w-full grid grid-cols-4 gap-x-4 mt-10">
                <div className="flex gap-5 items-center bg-[#E8E8E8] p-4 rounded-md border-[1px] border-[#E8E8E8] hover:bg-white hover:text-[#454A63] cursor-pointer">
                    <div><BiConversation size={25}/></div>
                    <div className="flex flex-col gap-[0px]">
                        <span className="font-bold">Veelgestelde vragen</span>
                        <span className="text-sm">Bekijk ze hier</span>
                    </div>
                </div>
                <div className="flex gap-5 items-center bg-[#E8E8E8] p-4 rounded-md border-[1px] border-[#E8E8E8] hover:bg-white hover:text-[#454A63] cursor-pointer">
                    <div><FaPhoneAlt size={25}/></div>
                    <div className="flex flex-col gap-[0px]">
                        <span className="font-bold">Bel ons</span>
                        <span className="text-sm">06-31206675</span>
                    </div>
                </div>
                <div className="flex gap-5 items-center bg-[#E8E8E8] p-4 rounded-md border-[1px] border-[#E8E8E8] hover:bg-white hover:text-[#454A63] cursor-pointer">
                    <div><MdOutlineAlternateEmail size={25}/></div>
                    <div className="flex flex-col gap-[0px]">
                        <span className="font-bold">Neem contact op</span>
                        <span className="text-sm">info@dhlasertechniek.nl</span>
                    </div>
                </div>
                <div className="flex gap-5 items-center bg-[#E8E8E8] p-4 rounded-md border-[1px] border-[#E8E8E8] hover:bg-white hover:text-[#454A63] cursor-pointer">
                    <div><TbMapSearch size={25}/></div>
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
            <span>Copyright © 2024</span>
            <div className="flex gap-4">
                <span>Algemene Voorwaarden</span>
                <span>Cookies</span>
                <span>Privacy Policy</span>
                <span>Sitemap</span>
            </div>
        </div>
    </div>
  )
}

export default Footer