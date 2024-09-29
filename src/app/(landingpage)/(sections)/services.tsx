"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll } from "framer-motion";
import { Lightbulb, Rocket, Shield, Zap } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: <Lightbulb className="h-10 w-10 text-white " />,
    title: "Innovative Solutions",
    description:
      "Cutting-edge answers to complex problems, leveraging the latest technologies.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-white" />,
    title: "Fast Delivery",
    description:
      "Agile approach ensuring rapid development and deployment of your projects.",
  },
  {
    icon: <Shield className="h-10 w-10 text-white" />,
    title: "Secure & Reliable",
    description:
      "Prioritizing the security and reliability of our services for your peace of mind.",
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "High Performance",
    description:
      "Optimized solutions delivering scalability for your growing business needs.",
  },
];

export default function Services() {
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
      <section className="py-24 text-white min-h-screen flex items-center justify-center max-md:mt-[30rem]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Services
            </h2>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering businesses with innovative solutions that drive growth
              and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-[#6366F1] border-transparent overflow-hidden group shadow-black shadow-md"
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 bg-transparent rounded-full transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl text-white font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
