import { motion } from "framer-motion";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ y: -40 }}
      animate={{ y: 0 }}
      className="bg-primary/10 border-b border-primary/20 py-2"
    >
      <div className="container">
        <p className="text-center text-sm font-medium tracking-wide text-primary">
          Free Shipping · Cash on Delivery Available
        </p>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
