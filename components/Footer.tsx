import React from "react";
import Logo from "@/images/hmopi-logo-scaled.gif";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-gradient-to-br from-purple-100 to-indigo-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a href="#" className="flex justify-center lg:justify-start">
              <Image src={Logo} alt="logo" width={600} height={600} />
            </a>
            <p className="py-8 text-sm text-black lg:max-w-xs text-center lg:text-left">
              Philippine-exclusive distributor of award-winning and most trusted
              POSIFLEX POS machines, kiosks, and peripherals
            </p>
            <a
              href="javascript:;"
              className="py-2.5 px-5 h-9 block w-fit bg-[#3d2c7c] rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-[#e50110] lg:mx-0"
            >
              Contact us
            </a>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Pages</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Products
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className=" text-gray-600 hover:text-gray-900">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" text-gray-600 hover:text-gray-900">
                  Where to Buy
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  POS
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Mobile POS
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Kiosk
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Peripherals (Standalone)
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Peripherals (Attachment )
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
