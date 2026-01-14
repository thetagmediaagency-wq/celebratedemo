import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
              About Celebratee
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Crafting time, defining elegance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At Celebratee, we believe a watch is more than just a timepiece—it's
                a statement of who you are. Founded with a vision to bring premium
                horology to the discerning modern gentleman, we curate timepieces
                that blend timeless elegance with contemporary design.
              </p>

              <div className="grid md:grid-cols-2 gap-12 py-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Our Philosophy
                  </h3>
                  <p>
                    We reject the notion that luxury must be inaccessible. Every
                    Celebratee timepiece is crafted with the same attention to
                    detail you'd expect from high-end Swiss brands, but at a price
                    that makes sense.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Quality First
                  </h3>
                  <p>
                    From sapphire crystals to Japanese movements, we use only
                    premium materials. Each watch undergoes rigorous quality checks
                    before it reaches your wrist.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 rounded-sm border border-border">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
                  Our Promise
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-display font-semibold text-primary mb-2">
                      1 Year
                    </div>
                    <p className="text-sm">Comprehensive Warranty</p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-semibold text-primary mb-2">
                      7 Days
                    </div>
                    <p className="text-sm">Easy Returns</p>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-semibold text-primary mb-2">
                      Free
                    </div>
                    <p className="text-sm">Pan-India Shipping</p>
                  </div>
                </div>
              </div>

              <p className="text-lg">
                Whether you're closing a deal or celebrating a milestone, a
                Celebratee watch is your silent companion—sophisticated,
                reliable, and unmistakably premium.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
