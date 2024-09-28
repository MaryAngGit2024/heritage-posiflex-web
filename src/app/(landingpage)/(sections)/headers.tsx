"use client";

import React from "react";
// import Image from "next/image";
// import HeaderPhoto from "@/images/header-img-furniture.jpg";
import { Building } from "lucide-react";

export const HeadersLanding = () => {
  return (
    <div className="flex items-center justify-start w-full h-screen">
      <div className="px-[1rem] p-[3rem] mb-[10rem] mr-auto ml-[1rem] border-gray-400 backdrop-blur-sm bg-white/10: rounded-2xl">
        <div className="w-full p-none">
          <p className="xl:text-4xl lg:text-4xl md:text-2xl mb-2 text-[#563abb] font-extrabold ">
            Heritage Multi-Office Products Inc.
          </p>
          <h1 className="font-bold">
            <span className="text-2xl font-extrabold text-white sm:text-5xl md:text-4xl lg:text-3xl">
              A Pacesetter in Business Automation
            </span>
          </h1>

          <div className="  w-[9rem]">
            <a
              className="hover:underline underline-offset-4 font-semibold rounded-full bg-[#3d2c7c] hover:bg-[#4c359d] text-white px-4 py-3 justify-between flex items-center"
              href="/about"
            >
              <Building />
              ABOUT US
            </a>
          </div>
        </div>
        {/* <Image
          src={HeaderPhoto}
          alt={""}
          className="rounded-md max-md:hidden block xl:w-[400px] xl:h-[400px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] shadow-xl"
        /> */}
      </div>
    </div>
  );
};
