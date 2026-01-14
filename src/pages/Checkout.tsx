import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  if (items.length === 0) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <div className="container max-w-lg">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Add some watches before checking out.
            </p>
            <Button asChild variant="luxury" size="lg">
              <Link to="/collection">Shop Watches</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Order placed successfully!", {
      description: "You will receive a confirmation shortly.",
    });

    clearCart();
    navigate("/");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Cart
            </button>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Checkout
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {/* Shipping Details */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Contact */}
                  <div className="p-6 bg-card rounded-sm border border-border">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="p-6 bg-card rounded-sm border border-border">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Shipping Address
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          name="address"
                          required
                          value={formData.address}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          required
                          value={formData.state}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pincode">PIN Code</Label>
                        <Input
                          id="pincode"
                          name="pincode"
                          required
                          value={formData.pincode}
                          onChange={handleInputChange}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="p-6 bg-card rounded-sm border border-border">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Payment Method
                    </h2>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-primary rounded-sm bg-primary/5">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex-1 cursor-pointer">
                          <span className="font-medium text-foreground">
                            Cash on Delivery
                          </span>
                          <span className="block text-sm text-muted-foreground mt-1">
                            Pay when your order arrives
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-sm opacity-50">
                        <RadioGroupItem value="online" id="online" disabled />
                        <Label htmlFor="online" className="flex-1">
                          <span className="font-medium text-muted-foreground">
                            Online Payment
                          </span>
                          <span className="block text-sm text-muted-foreground mt-1">
                            Coming soon
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="sticky top-32 p-6 bg-card rounded-sm border border-border">
                    <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                      Order Summary
                    </h2>

                    <div className="space-y-4 mb-6">
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex gap-4 pb-4 border-b border-border last:border-0"
                        >
                          <div className="w-16 h-16 bg-muted rounded-sm overflow-hidden flex-shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {item.product.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Qty: {item.quantity}
                            </p>
                            <p className="text-sm font-medium text-foreground mt-1">
                              {formatPrice(item.product.price * item.quantity)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-primary font-medium">Free</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t border-border">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="font-semibold text-foreground">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="luxury"
                      size="xl"
                      className="w-full mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Place Order"}
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
