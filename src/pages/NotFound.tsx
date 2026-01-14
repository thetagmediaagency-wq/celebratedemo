import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout showAnnouncement={false}>
      <div className="min-h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center px-4"
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold text-primary/20">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground -mt-4">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="luxury" size="lg" className="mt-8">
            <Link to="/">
              <ArrowLeft size={18} />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
