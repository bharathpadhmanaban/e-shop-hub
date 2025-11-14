import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Trash2, Heart } from "lucide-react";
import { toast } from "sonner";
import productHeadphones from "@/assets/product-headphones.jpg";
import productWatch from "@/assets/product-watch.jpg";
import productCamera from "@/assets/product-camera.jpg";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, image: productHeadphones, rating: 5 },
    { id: 4, name: "Smart Watch Series X", price: 399.99, image: productWatch, rating: 4 },
    { id: 5, name: "Professional DSLR Camera", price: 1499.99, image: productCamera, rating: 5 },
  ]);

  const handleRemoveFromWishlist = (id: number, name: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    toast.success("Removed from wishlist", {
      description: `${name} has been removed from your wishlist.`,
    });
  };

  const handleAddToCart = (name: string) => {
    toast.success("Added to cart!", {
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"} in your wishlist
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover-lift">
                <CardContent className="p-0 relative">
                  <div className="relative overflow-hidden bg-secondary aspect-square">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute top-4 right-4 shadow-lg"
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>

                  <div className="p-4 space-y-3">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleAddToCart(item.name)}
                      className="w-full"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-4">
              Start adding products you love to your wishlist
            </p>
            <Button>Start Shopping</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
