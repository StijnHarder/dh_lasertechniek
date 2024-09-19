import { IoIosCheckmarkCircle } from "react-icons/io";
import GlobalWidth from "./ui/GlobalWidth";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-col text-primary-dark relative">
      <div className="bg-primary-dark">
        <GlobalWidth>
          <div className="flex gap-4 py-4 w-full items-center justify-between md:pl-[200px]">
            <Image
              className="md:absolute md:left-10 lg:left-20 md:bottom-7"
              src="/logo.jpg"
              width={150}
              height={150}
              alt="logo dnh lasertechniek"
            />
            <div className="hidden md:flex md:gap-10 text-white">
              <div className="cursor-pointer">
                <Link href="/">Home</Link>
              </div>
              <div className="cursor-pointer">Diensten</div>
              <div className="cursor-pointer">Contact</div>
              <div className="cursor-pointer">
                <Link href="/blog">Blog</Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/projecten">Projecten</Link>
              </div>
            </div>
            <button className="bg-button_yellow text-white flex gap-6 items-center justify-between font-extralight px-5 py-2 rounded-lg">
              06-53549588
              <FaPhoneAlt />
            </button>
          </div>
        </GlobalWidth>
      </div>
      <div className="bg-neutral-light border-b-[1px] border-border_gray md:pl-[200px]">
        <GlobalWidth>
          <div className="flex gap-4 md:gap-10 py-2 md:py-3 w-full items-center">
            <div className="flex gap-1 items-center">
              <IoIosCheckmarkCircle size={20} />
              Al 100 jaar actief in de natuursteen
            </div>
            <div className="md:flex md:gap-1 md:items-center hidden">
              <IoIosCheckmarkCircle size={20} />
              Verfijnde lasertechniek
            </div>
            <div className="lg:flex lg:gap-1 lg:items-center hidden">
              <IoIosCheckmarkCircle size={20} />
              Altijd een offerte op maat
            </div>
          </div>
        </GlobalWidth>
      </div>
    </nav>
  );
};

export default Navbar;
