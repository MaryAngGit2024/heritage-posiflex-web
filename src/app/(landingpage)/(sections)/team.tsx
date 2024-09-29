"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export const Team = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "1.0 1"],
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
    >
      <section className="w-full h-screen flex justify-center items-center max-md:mb-[20rem]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                Meet Our Team
              </h2>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Empowering businesses with innovative solutions that drive
                growth and success.
              </p>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
            {[
              {
                name: "Mary Ang",
                role: "CEO",
                image: "/services-bg.png",
              },
              {
                name: "Bob Smith",
                role: "CTO",
                image: "/services-bg.png",
              },
              {
                name: "Carol Williams",
                role: "Head of Design",
                image: "/services-bg.png",
              },
              {
                name: "David Brown",
                role: "Lead Developer",
                image: "/services-bg.png",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center space-y-2"
              >
                <Image
                  alt={member.name}
                  className="rounded-full"
                  height="100"
                  src={member.image}
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
