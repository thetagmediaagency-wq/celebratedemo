import { motion } from "framer-motion";
import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className={i < 5 ? "fill-primary text-primary" : "text-muted"}
              />
            ))}
          </div>
          
          <p className="text-3xl md:text-4xl font-display font-semibold text-foreground">
            4.8
          </p>
          
          <p className="mt-2 text-muted-foreground">
            Rated by 2,000+ satisfied customers
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div>
              <span className="block text-2xl font-display font-semibold text-foreground">
                15K+
              </span>
              Watches Sold
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <span className="block text-2xl font-display font-semibold text-foreground">
                98%
              </span>
              Happy Customers
            </div>
            <div className="hidden md:block w-px h-12 bg-border" />
            <div className="hidden md:block">
              <span className="block text-2xl font-display font-semibold text-foreground">
                500+
              </span>
              Cities Delivered
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
