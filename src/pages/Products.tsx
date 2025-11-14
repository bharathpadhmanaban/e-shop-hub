import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productEarbuds from "@/assets/product-earbuds.jpg";

const Products = () => {
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, image: productHeadphones, rating: 5, category: "Audio" },
    { id: 2, name: "Latest Smartphone Pro", price: 899.99, image: productPhone, rating: 5, category: "Electronics" },
    { id: 3, name: "Ultra-Thin Laptop", price: 1299.99, image: productLaptop, rating: 4, category: "Computers" },
    { id: 4, name: "Smart Watch Series X", price: 399.99, image: productWatch, rating: 4, category: "Wearables" },
    { id: 5, name: "Professional DSLR Camera", price: 1499.99, image: productCamera, rating: 5, category: "Photography" },
    { id: 6, name: "Wireless Earbuds Pro", price: 149.99, image: productEarbuds, rating: 4, category: "Audio" },
    { id: 7, name: "Gaming Laptop Ultra", price: 1799.99, image: productLaptop, rating: 5, category: "Computers" },
    { id: 8, name: "Fitness Smart Watch", price: 299.99, image: productWatch, rating: 4, category: "Wearables" },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Products</h1>
          <p className="text-muted-foreground">
            Browse our complete collection of premium products
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Showing {sortedProducts.length} products
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Featured" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
