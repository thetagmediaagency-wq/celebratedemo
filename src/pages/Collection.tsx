import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/products";

const Collection = () => {
  return (
    <Layout>
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              The Collection
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
              Discover timepieces that define excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
