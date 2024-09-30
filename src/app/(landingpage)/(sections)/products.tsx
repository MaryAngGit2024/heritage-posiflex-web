"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowRightIcon, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const categories = [
  {
    name: "Flooring Strand-Woven",
    image: "/flooring.avif?height=400&width=600",
    description: "Durable and eco-friendly flooring solutions",
  },
  {
    name: "Window Blinds",
    image: "/window-blinds.avif?height=400&width=600",
    description: "Stylish window treatments for any room",
  },
  {
    name: "Furniture",
    image: "/furnitures.avif?height=400&width=600",
    description: "Modern and comfortable home furnishings",
  },
  {
    name: "Stationery",
    image: "/stationery.avif?height=400&width=600",
    description: "High-quality office and writing supplies",
    link: "/products",
  },
];

export default function OurProducts() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.90 1"],
  });
  const router = useRouter();
  return (
    <div className="h-screen  flex justify-center items-center max-md:mt-[30rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Our Products
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering businesses with innovative solutions that drive growth
            and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              ref={targetRef}
              style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button
                  className="w-full group"
                  variant="outline"
                  onClick={() => {
                    router.push("/products");
                  }}
                >
                  {category.name}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
