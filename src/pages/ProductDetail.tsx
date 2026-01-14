import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Truck, RefreshCcw, Shield, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/context/CartContext";
import { getProductBySlug, formatPrice, calculateDiscount, products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { toast } from "sonner";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = getProductBySlug(slug || "");

  if (!product) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-display">Product not found</h1>
          <Button className="mt-6" onClick={() => navigate("/collection")}>
            Back to Collection
          </Button>
        </div>
      </Layout>
    );
  }

  const discount = calculateDiscount(product.price, product.compareAtPrice);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success("Added to cart", {
      description: `${product.name} × ${quantity}`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const trustFeatures = [
    { icon: CreditCard, text: "Cash on Delivery Available" },
    { icon: Truck, text: "Free Shipping" },
    { icon: RefreshCcw, text: "7-Day Returns" },
    { icon: Shield, text: "1-Year Warranty" },
  ];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative aspect-square bg-card rounded-sm overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isBestseller && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground">
                      Bestseller
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 mt-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:py-4"
            >
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                {product.category}
              </p>

              <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-4 mt-6">
                <span className="text-3xl font-semibold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.compareAtPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.compareAtPrice)}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mt-8">
                <label className="text-sm font-medium text-foreground mb-3 block">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-sm">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-12 text-center font-medium text-foreground">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="luxury-outline"
                  size="xl"
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="luxury"
                  size="xl"
                  className="flex-1"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </div>

              {/* Trust Signals */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {trustFeatures.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <feature.icon size={18} className="text-primary" />
                    {feature.text}
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="mt-10">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="specifications">
                    <AccordionTrigger className="text-foreground font-medium">
                      Specifications
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Movement</span>
                          <span className="text-foreground">
                            {product.specifications.movement}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Case Material</span>
                          <span className="text-foreground">
                            {product.specifications.caseMaterial}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Case Size</span>
                          <span className="text-foreground">
                            {product.specifications.caseSize}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Water Resistance</span>
                          <span className="text-foreground">
                            {product.specifications.waterResistance}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Strap Material</span>
                          <span className="text-foreground">
                            {product.specifications.strapMaterial}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Crystal Type</span>
                          <span className="text-foreground">
                            {product.specifications.crystalType}
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="shipping">
                    <AccordionTrigger className="text-foreground font-medium">
                      Shipping & Returns
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 text-sm text-muted-foreground">
                        <p>
                          Free shipping on all orders. Delivery within 5-7 business
                          days across India.
                        </p>
                        <p>
                          7-day hassle-free returns. If you're not satisfied with
                          your purchase, return it for a full refund.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="warranty">
                    <AccordionTrigger className="text-foreground font-medium">
                      Warranty
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          All watches come with a comprehensive 1-year warranty
                          covering manufacturing defects. This warranty does not
                          cover damage from misuse, accidents, or normal wear.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          </div>

          {/* Related Products */}
          <div className="mt-20 md:mt-28">
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden z-40">
        <div className="flex gap-3">
          <Button
            variant="luxury-outline"
            className="flex-1"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button variant="luxury" className="flex-1" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
