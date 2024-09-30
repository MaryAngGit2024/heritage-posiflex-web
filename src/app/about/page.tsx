import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Users,
  Globe,
  Award,
  Zap,
  Eye,
  PenTool,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            Heritage Multi-Office Products Inc.
          </h1>
          <p className="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto">
            We craft digital experiences that inspire, engage, and deliver
            results.
          </p>
        </div>
      </header>

      <main>
        {/* Mission Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
              At Pixel Perfect, we believe in the power of design to transform
              businesses and elevate brands. Our mission is to create
              innovative, user-centric designs that not only look stunning but
              also drive meaningful results for our clients.
            </p>
          </div>
        </section>

        {/* Company Profile Section */}
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Company Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                <p className="text-gray-600 mb-6">
                  Heritage Multi-Office Products Inc. is a forward-thinking
                  digital design agency founded in 2010. We're a team of
                  passionate designers, developers, and strategists dedicated to
                  creating exceptional digital experiences that drive business
                  growth and user engagement.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-6">
                  We believe in a collaborative, iterative approach to design.
                  By working closely with our clients and end-users, we ensure
                  that every project we undertake is not just visually stunning,
                  but also functional, intuitive, and aligned with business
                  objectives.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
                <p className="text-gray-600 mb-6">
                  Our design process is rooted in research, creativity, and
                  continuous improvement. We start by deeply understanding our
                  clients' needs and their users' behaviors. From there, we
                  ideate, prototype, and refine our designs through multiple
                  iterations, always keeping the end-user in mind.
                </p>
              </div>
              <div>
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Company Facts
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        <span>50+ talented professionals</span>
                      </li>
                      <li className="flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-primary" />
                        <span>Offices in New York, London, and Tokyo</span>
                      </li>
                      <li className="flex items-center">
                        <Award className="w-5 h-5 mr-2 text-primary" />
                        <span>20+ industry awards</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-primary" />
                        <span>Innovation in every pixel</span>
                      </li>
                      <li className="flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-primary" />
                        <span>User-centric approach</span>
                      </li>
                      <li className="flex items-center">
                        <PenTool className="w-5 h-5 mr-2 text-primary" />
                        <span>Attention to detail</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-gray-600">
                    We create intuitive and visually appealing user interfaces
                    that enhance user experience and drive engagement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Web Development
                  </h3>
                  <p className="text-gray-600">
                    Our team builds responsive, high-performance websites that
                    look great on any device and deliver results.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
                  <p className="text-gray-600">
                    We help businesses establish a strong, cohesive brand
                    identity that resonates with their target audience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to try our brand </h2>
            <p className="text-xl mb-8">
              Let's create something amazing together.
            </p>
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
