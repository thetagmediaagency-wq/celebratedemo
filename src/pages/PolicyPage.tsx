import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

type PolicyType = "privacy" | "refund" | "shipping" | "terms";

const policyContent: Record<PolicyType, { title: string; content: string[] }> = {
  privacy: {
    title: "Privacy Policy",
    content: [
      "At Celebratee, we respect your privacy and are committed to protecting your personal information.",
      "**Information We Collect**: We collect information you provide directly to us, such as your name, email address, phone number, shipping address, and payment information when you make a purchase.",
      "**How We Use Your Information**: We use the information we collect to process orders, communicate with you about your purchases, and improve our services.",
      "**Data Security**: We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "**Third-Party Services**: We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business.",
      "**Cookies**: Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings.",
      "**Your Rights**: You have the right to access, correct, or delete your personal information. Contact us at support@celebratee.in for any privacy-related requests.",
      "This policy is effective as of January 2025 and may be updated from time to time.",
    ],
  },
  refund: {
    title: "Refund Policy",
    content: [
      "We want you to be completely satisfied with your purchase from Celebratee.",
      "**7-Day Return Window**: You may return your watch within 7 days of delivery for a full refund, provided the product is unused and in its original packaging.",
      "**Condition Requirements**: The watch must be unworn, with all tags attached, and in its original box with all accessories. Any signs of wear or damage may result in a partial refund or rejection of the return.",
      "**How to Initiate a Return**: Contact us at support@celebratee.in with your order number and reason for return. We will provide you with return instructions.",
      "**Refund Processing**: Once we receive and inspect your return, refunds will be processed within 5-7 business days to your original payment method.",
      "**Non-Returnable Items**: Customized or engraved watches cannot be returned unless defective.",
      "**Exchanges**: We offer exchanges for different sizes or styles within the 7-day return window, subject to availability.",
      "**Defective Products**: If you receive a defective product, contact us immediately for a replacement or full refund.",
    ],
  },
  shipping: {
    title: "Shipping Policy",
    content: [
      "We offer free shipping on all orders across India.",
      "**Processing Time**: Orders are processed within 1-2 business days. You will receive a confirmation email with tracking information once your order ships.",
      "**Delivery Time**: Standard delivery takes 5-7 business days. Delivery times may vary based on your location and external factors.",
      "**Shipping Partners**: We partner with trusted courier services to ensure safe and timely delivery of your order.",
      "**Order Tracking**: You can track your order using the tracking number provided in your shipping confirmation email.",
      "**Cash on Delivery**: We offer Cash on Delivery (COD) for your convenience. Payment is collected upon delivery.",
      "**Packaging**: All watches are carefully packaged in premium boxes with protective materials to ensure they arrive in perfect condition.",
      "**Delivery Issues**: If you experience any delivery issues, please contact us at support@celebratee.in with your order details.",
    ],
  },
  terms: {
    title: "Terms of Service",
    content: [
      "By using our website and services, you agree to these terms and conditions.",
      "**Acceptance of Terms**: By accessing celebratee.in, you agree to be bound by these terms. If you do not agree, please do not use our website.",
      "**Product Information**: We strive to display our products accurately. However, colors and details may vary slightly due to screen differences.",
      "**Pricing**: All prices are in Indian Rupees (INR) and include applicable taxes. Prices are subject to change without notice.",
      "**Order Acceptance**: We reserve the right to refuse or cancel any order for any reason, including product availability or pricing errors.",
      "**Intellectual Property**: All content on this website, including images, logos, and text, is the property of Celebratee and protected by copyright laws.",
      "**Limitation of Liability**: Celebratee shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.",
      "**Governing Law**: These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Mumbai, Maharashtra.",
      "**Contact**: For any questions regarding these terms, contact us at support@celebratee.in.",
    ],
  },
};

const PolicyPage = () => {
  const { type } = useParams<{ type: string }>();
  const policy = policyContent[type as PolicyType];

  if (!policy) {
    return (
      <Layout>
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-2xl font-display">Policy not found</h1>
          <Link to="/" className="mt-4 text-primary hover:underline">
            Go Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8">
              {policy.title}
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {policy.content.map((paragraph, index) => {
                // Handle bold text marked with **
                const parts = paragraph.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={index}>
                    {parts.map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="text-foreground">
                          {part}
                        </strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Last updated: January 2025
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyPage;
