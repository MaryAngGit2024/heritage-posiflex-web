"use client";

import React from "react";
import Image from "next/image";
import PosiflexPhoto from "@/images/Posiflex-with-screen-final.gif";
import { Building } from "lucide-react";
import { Card } from "@/components/ui/card";
// import { motion, useScroll } from "framer-motion";

export const Posiflex = () => {
  // const targetRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["0 1", "1.0 1"],
  // });

  return (
    <div className="flex justify-center items-center w-full px-4 h-screen container mx-auto ">
      <Card className="flex justify-center items-center gap-[4rem] p-[7rem] max-md:p-[2rem] bg-transparent border-none shadow-none">
        <Image
          src={PosiflexPhoto}
          alt={""}
          width={350}
          height={250}
          className="rounded-xl max-md:hidden block"
        />
        <div className="w-full p-none mt-[1rem]">
          <h1
            className="xl:text-[3rem] lg:text-[2rem] md:text-[2rem] font-bold text-[#ED1B22]"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          >
            POSIFLEX {""}
          </h1>
          {/* <span className="xl:text-[2rem] lg:text-[1rem] md:text-[1rem]">
            High Quality and Passion
          </span> */}
          <p className="xl:text-xl lg:text-lg md:text-md text-base mb-2 text-black font-semibold text-justify">
            POSIFLEX, a symbol of quality in the POS industry for its very
            durable cash drawers has brought the same passion for the birth of a
            wide range of quality POS hardware products. This includes
            integrated Touch-base POS terminals with biometric sensors &
            magnetic stripe readers and related peripherals: touch monitors,
            cash drawers, customer displays, programmable keyboards, bar-code
            scanners, thermal receipt printers and readers.
          </p>
          <div className=" mt-7 w-[9rem]">
            <a
              className="hover:underline underline-offset-4 font-semibold rounded-full bg-[#ED1B22] hover:bg-[#de4348] text-white px-4 py-3 justify-between flex items-center"
              href="#"
            >
              <Building />
              ABOUT US
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};
