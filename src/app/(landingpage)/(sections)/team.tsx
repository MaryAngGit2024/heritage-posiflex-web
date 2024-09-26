import React from "react";
import Image from "next/image";

export const Team = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#3d2c7c]">
              Meet Our Team
            </h2>
            <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our diverse team of experts is passionate about innovation and
              committed to excellence.
            </p>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-16">
          {[
            {
              name: "Mary Ang",
              role: "CEO",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Bob Smith",
              role: "CTO",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "Carol Williams",
              role: "Head of Design",
              image: "/placeholder.svg?height=100&width=100",
            },
            {
              name: "David Brown",
              role: "Lead Developer",
              image: "/placeholder.svg?height=100&width=100",
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
  );
};
