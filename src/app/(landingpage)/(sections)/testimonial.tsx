"use client";

import { motion, useScroll } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { useRef } from "react";
// import Image from "next/image";

interface Props {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const testimonials = [
  {
    quote:
      "This product has completely transformed the way I work. It's intuitive, powerful, and has saved me countless hours.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "I've tried many similar tools, but this one stands out for its ease of use and robust feature set. Highly recommended!",
    author: "Michael Chen",
    position: "Senior Developer, InnoSoft",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "The customer support is exceptional. They've been incredibly responsive and helpful throughout our onboarding process.",
    author: "Emily Rodriguez",
    position: "Operations Manager, GlobalTech",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    quote:
      "This solution has streamlined our workflow and improved team collaboration. It's been a game-changer for our projects.",
    author: "David Patel",
    position: "Project Lead, CreativeCo",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

function TestimonialCard({ quote, author, position }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-16 h-16 bg-indigo-100 rounded-br-full"></div>
      <QuoteIcon className="w-6 h-6 text-indigo-500 mb-4 relative z-10" />
      <p className="text-gray-600 mb-4 relative z-10 text-sm">{quote}</p>
      <div className="flex items-center">
        {/* <Image
          src={avatar}
          alt={author}
          className="w-10 h-10 rounded-full mr-3"
        /> */}
        <div>
          <h3 className="font-semibold text-gray-800 text-sm">{author}</h3>
          <p className="text-gray-500 text-xs">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
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
      className="min-h-screen flex justify-center items-center "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            What Our Client Say
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering businesses with innovative solutions that drive growth
            and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
