"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We love to hear from you. Drop us a line and well get back to you as
            soon as possible.
          </p>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="p-6 sm:p-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Send us a message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 gap-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div className="p-6 sm:p-12 bg-gray-50">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Contact Information
              </h3>
              <dl className="mt-8 text-base text-gray-500">
                <div className="mt-6 flex">
                  <MapPin
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <dt className="sr-only">Address</dt>
                    <dd>
                      13 Linaw, Santa Mesa Heights, Quezon City, 1114 Metro
                      Manila
                    </dd>
                  </div>
                </div>
                <div className="mt-3 flex">
                  <Phone
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <dt className="sr-only">Contact Number</dt>
                    <dd>(632) 562-9280</dd>
                  </div>
                </div>
                <div className="mt-3 flex">
                  <Mail
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <div className="ml-3">
                    <dt className="sr-only">Emails</dt>
                    <dd>
                      posiflex@hmopi.net | pfsales@hmopi.net |
                      statio_sales1@hmopi.net
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
            <div className="mt-8 aspect-w-5 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace this div with an actual map component */}
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center text-gray-500">
                Map Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
