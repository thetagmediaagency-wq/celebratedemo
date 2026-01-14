import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Product, formatPrice, calculateDiscount } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const discount = calculateDiscount(product.price, product.compareAtPrice);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={`/product/${product.slug}`} className="group block">
        <div className="relative aspect-square overflow-hidden bg-card rounded-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Bestseller Badge */}
          {product.isBestseller && (
            <div className="absolute top-3 left-3">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary text-primary-foreground">
                Bestseller
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
                <span className="text-xs font-medium text-primary">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
