import { Link } from "react-router-dom";
import { ShoppingBag, Truck, Shield, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.jpg";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";
import productWatch from "@/assets/product-watch.jpg";

const Home = () => {
  const featuredProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, image: productHeadphones, rating: 5 },
    { id: 2, name: "Latest Smartphone Pro", price: 899.99, image: productPhone, rating: 5 },
    { id: 3, name: "Ultra-Thin Laptop", price: 1299.99, image: productLaptop, rating: 4 },
    { id: 4, name: "Smart Watch Series X", price: 399.99, image: productWatch, rating: 4 },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% secure payment",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Dedicated support",
    },
    {
      icon: ShoppingBag,
      title: "Easy Returns",
      description: "30-day return policy",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Hero Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                ShopHub
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
              Discover amazing products at unbeatable prices. Shop the latest trends in electronics, fashion, and more!
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in">
              <Link to="/products">
                <Button size="lg" className="shadow-lg hover:shadow-xl">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Check out our hand-picked selection of premium products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Sign up today and get exclusive access to deals, new arrivals, and special offers!
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary" className="shadow-xl">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
