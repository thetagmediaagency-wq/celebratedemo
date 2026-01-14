import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <div className="container max-w-lg">
            <h1 className="font-display text-3xl font-semibold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8">
              Discover our collection of premium timepieces.
            </p>
            <Button asChild variant="luxury" size="lg">
              <Link to="/collection">Shop Watches</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </button>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Shopping Cart
            </h1>

            {/* Cart Items */}
            <div className="space-y-6">
              {items.map((item) => (
                <motion.div
                  key={item.product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex gap-4 md:gap-6 p-4 bg-card rounded-sm border border-border"
                >
                  {/* Product Image */}
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-muted rounded-sm overflow-hidden"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="font-display text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.product.category}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center text-sm font-medium text-foreground">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center justify-between sm:gap-6">
                        <span className="font-semibold text-foreground">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-10 p-6 bg-card rounded-sm border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-primary font-medium">Free</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-lg font-semibold text-foreground">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-6 text-center">
                Cash on Delivery Available
              </p>

              <Button
                asChild
                variant="luxury"
                size="xl"
                className="w-full"
              >
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
