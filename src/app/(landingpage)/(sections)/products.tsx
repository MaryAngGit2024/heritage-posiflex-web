"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   category: string;
// }

const products = [
  {
    id: 1,
    name: "Flooring Strand-Woven",
    image: "/header_photo.avif",
  },
  {
    id: 2,
    name: "Window Blinds",
    image: "/header_photo.avif",
  },
  {
    id: 3,
    name: "Furnitures",
    image: "/header_photo.avif",
  },
  { id: 4, name: "Stationery", image: "/header_photo.avif" },
];

export default function Products() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.90 1"],
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="h-screen flex items-center justify-center mx-auto"
    >
      <div className="py-8 container w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Featured Products
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering businesses with innovative solutions that drive growth
            and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-4">{product.name}</h2>
                <Button className="w-full bg-[#6366F1]">View Product</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
