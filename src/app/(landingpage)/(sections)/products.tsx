import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Sofa",
    price: 1299.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Living Room",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 299.99,
    image: "/placeholder.svg?height=600&width=400",
    category: "Office",
  },
  {
    id: 3,
    name: "Rustic Dining Table",
    price: 899.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Dining Room",
  },
  {
    id: 4,
    name: "Modern Bed Frame",
    price: 799.99,
    image: "/placeholder.svg?height=400&width=600",
    category: "Bedroom",
  },
  {
    id: 5,
    name: "Sleek Coffee Table",
    price: 349.99,
    image: "/placeholder.svg?height=400&width=400",
    category: "Living Room",
  },
  {
    id: 6,
    name: "Scandinavian Bookshelf",
    price: 599.99,
    image: "/placeholder.svg?height=600&width=400",
    category: "Storage",
  },
];

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-50">
      <h1 className="text-4xl font-light mb-12 text-center text-gray-800">
        Top Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative overflow-hidden mb-6">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover rounded-md transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{product.category}</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
              <Button variant="outline" className="text-sm">
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
