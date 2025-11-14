import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

const ProductCard = ({ id, name, price, image, rating }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      toast.success("Added to cart!", {
        description: `${name} has been added to your cart.`,
      });
    }, 600);
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist!",
      {
        description: isWishlisted
          ? `${name} has been removed from your wishlist.`
          : `${name} has been added to your wishlist.`,
      }
    );
  };

  return (
    <Card className="group overflow-hidden hover-lift hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0 relative">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-secondary aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Wishlist Button */}
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? "fill-red-500 text-red-500" : ""
              }`}
            />
          </Button>

          {/* Quick View Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              onClick={handleAddToCart}
              className={`w-full ${isAddingToCart ? "animate-cart" : ""}`}
              disabled={isAddingToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-2 p-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({rating}/5)
          </span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-bold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Mobile Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={`w-full md:hidden ${isAddingToCart ? "animate-cart" : ""}`}
          disabled={isAddingToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
