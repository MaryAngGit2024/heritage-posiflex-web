"use client";

// import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useState } from "react";

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
  },
];

const products = [
  { name: "Bamboo Flooring", category: "Flooring Strand-Woven", price: 39.99 },
  { name: "Vertical Blinds", category: "Window Blinds", price: 59.99 },
  { name: "Office Chair", category: "Furniture", price: 129.99 },
  { name: "Notebook Set", category: "Stationery", price: 12.99 },
  {
    name: "Hardwood Flooring",
    category: "Flooring Strand-Woven",
    price: 49.99,
  },
  { name: "Roller Blinds", category: "Window Blinds", price: 39.99 },
  { name: "Dining Table", category: "Furniture", price: 299.99 },
  { name: "Pen Set", category: "Stationery", price: 9.99 },
  { name: "Cork Flooring", category: "Flooring Strand-Woven", price: 29.99 },
  { name: "Roman Shades", category: "Window Blinds", price: 79.99 },
  { name: "Bookshelf", category: "Furniture", price: 159.99 },
  { name: "Desk Organizer", category: "Stationery", price: 19.99 },
  {
    name: "Laminate Flooring",
    category: "Flooring Strand-Woven",
    price: 34.99,
  },
  { name: "Cellular Shades", category: "Window Blinds", price: 89.99 },
  { name: "Coffee Table", category: "Furniture", price: 199.99 },
  { name: "Planner", category: "Stationery", price: 14.99 },
];

export default function OurProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  // const [animatedCategories, setAnimatedCategories] = useState<string[]>([]);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory)
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 bg-header-img-fur bg-cover bg-center h-[50vh] flex flex-col justify-center items-center rounded-md">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-300 font-extrabold">
            Our Products
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering businesses with innovative solutions that drive growth
            and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
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
                  onClick={() => setSelectedCategory(category.name)}
                >
                  Explore {category.name}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-2xl font-bold">All Products</h3>
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.name} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentProducts.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <p className="font-bold">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
