import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhySection from "@/components/home/WhySection";
import SocialProof from "@/components/home/SocialProof";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <WhySection />
      <SocialProof />
    </Layout>
  );
};

export default Index;
