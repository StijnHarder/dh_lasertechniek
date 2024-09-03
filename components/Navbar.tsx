import { FaPhoneAlt } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="position: absolute left-0 px-20">
        <Image src="/logo.jpg" width={150} height={150} alt="logo dnh lasertechniek"/>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex bg-[#454A63] justify-between text-white items-center gap-8 p-5 pl-[300px] pr-20">
          <div className="flex gap-10">
            <div className="cursor-pointer"><Link href="/">Home</Link></div>
            <div className="cursor-pointer">Diensten</div>
            <div className="cursor-pointer">Contact</div>
            <div className="cursor-pointer"><Link href="/blog">Blog</Link></div>
          </div>
          <div className="flex gap-6 items-center justify-between font-extralight px-5 py-2 bg-[#FFD157] rounded-lg cursor-pointer">
            <div>06-53549588</div>
            <FaPhoneAlt />
          </div>
        </div>
        <div className="flex gap-20 bg-white border-b-[1px] border-[#E8E8E8] text-[#454A63] py-5 pl-[300px] pr-20">
          <div className="flex gap-1 items-center">
            <div className="font-bold"><IoIosCheckmarkCircle size={20} /></div>
            <div>Al 100 jaar actief in de natuursteen</div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="font-bold"><IoIosCheckmarkCircle size={20} /></div>
            <div>Verfijnde lasertechniek</div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="font-bold"><IoIosCheckmarkCircle size={20} /></div>
            <div>Volgende werkdag een offerte op maat</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
