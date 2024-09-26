import React from "react";
import Image from "next/image";
import HeaderPhoto from "@/images/header-img-hd.png";
import { Building } from "lucide-react";

export const HeadersLanding = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 bg-cover bg-center bg-blend-colors">
      <div className="flex justify-center px-[8rem] py-[6rem] gap-[4rem]">
        <div className="w-full p-none mt-[9rem]">
          <p className="text-xl mb-2 text-[#563abb] font-semibold">
            Be A Part Of The Heritage and Posiflex Family
          </p>
          <h1
            className="text-[2rem] font-bold"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            BECAUSE WITH US,{" "}
            <span className="text-[3rem]">Your Success is Our Vision</span>
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
        <Image
          src={HeaderPhoto}
          alt={""}
          width={350}
          height={350}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};
