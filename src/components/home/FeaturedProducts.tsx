import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Featured Watches
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our most coveted timepieces
            </p>
          </div>
          
          <Link
            to="/collection"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View All Watches
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
