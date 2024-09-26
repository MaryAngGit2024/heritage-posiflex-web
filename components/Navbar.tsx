import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/images/hmopi-logo.gif";
import Text from "@/images/hmopi-text.gif";

export const Navbar = () => {
  return (
    <header className="flex item-center justify-between shadow-sm shadow-gray-200 dark:shadow-none dark:bg-[#020817] bg-white  ">
      <div className="space-x-2 flex items-center justify-center py-1 mb-2 gap-[5rem]  text-center ml-5">
        <Link className="mt-3 flex justify-between gap-2" href="#">
          <Image src={Logo} alt="logo" width={50} height={50} />
          <Image src={Text} alt="text" width={300} height={200} />
        </Link>
      </div>

      <div className="flex items-center justify-center space-x-8 mr-5">
        <div className="text-xs hidden md:block">
          <ul className="flex items-center space-x-4 gap-2 ">
            <Link
              className="hover:underline underline-offset-4  font-semibold"
              href="#home"
            >
              HOME
            </Link>
            <Link
              className="hover:underline underline-offset-4 font-semibold"
              href="#"
            >
              PRODUCTS
            </Link>
            <Link
              className="hover:underline underline-offset-4 font-semibold"
              href="#"
            >
              ABOUT US
            </Link>
            <Link
              className="hover:underline underline-offset-4 font-semibold rounded-full bg-[#3d2c7c] hover:bg-[#4c359d] text-white px-4 py-3"
              href="#"
            >
              CONTACT US
            </Link>
          </ul>
        </div>
        {/* <div className="rounded-md">
          <a
            className="w-full rounded-full shadow-black flex items-center justify-center px-4 py-4 text-md text-base leading-6 font-medium  text-white bg-[#3d2c7c] hover:bg-[#4c359d] hover:text-white focus:ring ring-offset-2  focus:outline-none transition duration-150 ease-in-out italic"
            href=""
          >
            CONTACT US
          </a>
        </div> */}
      </div>
    </header>
  );
};
