import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle2, Clock } from "lucide-react";
import productPhone from "@/assets/product-phone.jpg";
import productHeadphones from "@/assets/product-headphones.jpg";
import productLaptop from "@/assets/product-laptop.jpg";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 899.99,
      items: [
        { name: "Latest Smartphone Pro", image: productPhone, quantity: 1, price: 899.99 },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-18",
      status: "In Transit",
      total: 199.99,
      items: [
        { name: "Premium Wireless Headphones", image: productHeadphones, quantity: 1, price: 199.99 },
      ],
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-20",
      status: "Processing",
      total: 1299.99,
      items: [
        { name: "Ultra-Thin Laptop", image: productLaptop, quantity: 1, price: 1299.99 },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle2 className="w-5 h-5" />;
      case "In Transit":
        return <Truck className="w-5 h-5" />;
      case "Processing":
        return <Clock className="w-5 h-5" />;
      default:
        return <Package className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-success text-success-foreground";
      case "In Transit":
        return "bg-primary text-primary-foreground";
      case "Processing":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">My Orders</h1>
          <p className="text-muted-foreground">
            Track and manage your orders
          </p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover-lift">
              <CardContent className="p-0">
                {/* Order Header */}
                <div className="bg-secondary p-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Order ID</p>
                      <p className="font-semibold">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-semibold">
                        {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-semibold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <Badge
                    className={`${getStatusColor(order.status)} flex items-center gap-2`}
                  >
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </div>

                {/* Order Items */}
                <div className="p-4 space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4 border-t">
                    <Button variant="outline" className="flex-1">
                      Track Order
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {order.status === "Delivered" && (
                      <Button variant="outline" className="flex-1">
                        Write Review
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card className="p-12 text-center">
            <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-muted-foreground mb-4">
              Start shopping to see your orders here
            </p>
            <Button>Start Shopping</Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Orders;
