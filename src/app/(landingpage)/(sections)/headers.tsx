"use client";

import React from "react";
// import Image from "next/image";
// import HeaderPhoto from "@/images/header-img-furniture.jpg";
import { Building } from "lucide-react";

export const HeadersLanding = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 h-screen">
      <div className="flex justify-center px-[8rem] pb-[20rem] gap-[5rem]">
        <div className="w-full p-none">
          <p
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            className="xl:text-4xl lg:text-2xl md:text-2xl mb-2 text-[#563abb] font-semibold italic"
          >
            Heritage Multi-Office Products Inc.
          </p>
          <h1
            className="font-bold"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            <span className="text-2xl font-extrabold text-white sm:text-5xl md:text-4xl lg:text-3xl">
              A Pacesetter in Business Automation
            </span>
          </h1>

          <div className=" mt-7 w-[9rem]">
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
