import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Rocket, Shield, Zap } from "lucide-react";

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
  return (
    <section className="py-24 text-white h-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#3D2C7C] mb-4">
          Our Services
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Empowering your business with cutting-edge solutions
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[#3D2C7C] border-transparent overflow-hidden group shadow-black shadow-md"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-transparent rounded-full transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl text-white font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
