import { motion } from "framer-motion";
import { Shield, Watch, Award, Gem } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "316L stainless steel, sapphire crystal, genuine leather",
  },
  {
    icon: Watch,
    title: "Precision Movement",
    description: "Japanese & Swiss quartz for unmatched accuracy",
  },
  {
    icon: Shield,
    title: "1-Year Warranty",
    description: "Complete peace of mind with every purchase",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Each piece inspected before shipping",
  },
];

const WhySection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Why Celebratee
          </h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Craftsmanship that speaks for itself
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
