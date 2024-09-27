"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Rocket, Award } from "lucide-react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.60 1"],
  });

  return (
    <motion.div
      ref={targetRef}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-[20rem]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            About Our Mission
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering businesses with innovative solutions that drive growth
            and success.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Customer-Centric
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We put our customers first, ensuring their success is our top
                  priority.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Innovation-Driven
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We constantly push boundaries to deliver cutting-edge
                  solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  Excellence
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  We strive for excellence in every aspect of our work.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 relative">
          <Card className="bg-white shadow-xl rounded-lg overflow-hidden">
            <CardContent className="p-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div className="relative">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    Our Story
                  </h3>
                  <p className="mt-3 text-md text-gray-500 text-justify">
                    Heritage Multi-Office Products Inc. was conceived in May
                    1997 to be the source for modern office partition, imported
                    furniture and stationery lines of products, which carry a
                    registered trademark PRESTIGE by YORK. Customers can select
                    from a wide variety of styles and finishes with an equally
                    wide price range. The customer are assured that they are
                    getting the best prices, quality, service and of course
                    variety of uniqueness and up to date designs. Success did
                    not prevent HMOPI to explore ways of providing solutions to
                    its roster of satisfied customers and business partners.
                  </p>
                  <div className="mt-8 relative">
                    <Button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="group text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    {isHovered && (
                      <Card className="absolute top-full left-0 mt-2 w-full max-w-md z-10 shadow-lg">
                        <CardContent className="p-4">
                          <h4 className="text-lg font-semibold mb-2 text-gray-800">
                            Our Achievements
                          </h4>
                          <ul className="list-disc pl-5 text-gray-600 text-sm">
                            <li>
                              Helped 500+ businesses transform their operations
                            </li>
                            <li>
                              Awarded Best Tech Innovator 3 years in a row
                            </li>
                            <li>Expanded to 10 countries worldwide</li>
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 relative">
                  <Image
                    src="/about-img.gif"
                    alt="Team collaboration"
                    width={600}
                    height={600}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
