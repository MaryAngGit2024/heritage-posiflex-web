import React from "react";
import Image from "next/image";
import HeaderPhoto from "@/images/header-img.jpg";

export const HeadersLanding = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 bg-cover bg-center bg-blend-colors">
      <div className="flex justify-center px-[8rem] py-[5rem] gap-[4rem]">
        <div className="w-full p-none mt-8">
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

          <div className=" mt-9 w-[10rem]">
            <a
              className="rounded-[10rem] border-none shadow-white py-2 flex items-center justify-center p-auto text-base leading-6  text-white bg-[#3d2c7c] hover:bg-[#4c359d] hover:text-white shadow-lg transition duration-150 ease-in-out font-semibold"
              href=""
            >
              CONTACT US
            </a>
          </div>
        </div>
        <Image
          src={HeaderPhoto}
          alt={""}
          width={350}
          height={250}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};
