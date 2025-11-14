import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do",
    },
    {
      icon: Target,
      title: "Quality Products",
      description: "Only the best products make it to our platform",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in service and delivery",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about making shopping easy and fun",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ShopHub</h1>
          <p className="text-lg text-muted-foreground">
            We're on a mission to revolutionize online shopping by providing the
            best products at the best prices with exceptional customer service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2024, ShopHub started with a simple idea: make online
              shopping easier, faster, and more enjoyable for everyone. What
              began as a small project has grown into a trusted platform serving
              thousands of satisfied customers.
            </p>
            <p className="text-muted-foreground">
              We believe that shopping should be an experience, not a chore.
              That's why we've built a platform that combines cutting-edge
              technology with personalized service to deliver an unmatched
              shopping experience.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              To become the world's most customer-centric online shopping
              platform, where customers can find and discover anything they might
              want to buy online, and endeavors to offer its customers the lowest
              possible prices.
            </p>
            <p className="text-muted-foreground">
              We're committed to continuous improvement, innovation, and
              providing value to our customers through exceptional products and
              services.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 gradient-hero rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="gradient-hero rounded-2xl p-12 text-primary-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
