import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const policyLinks = [
    { name: "Privacy Policy", href: "/policies/privacy" },
    { name: "Refund Policy", href: "/policies/refund" },
    { name: "Shipping Policy", href: "/policies/shipping" },
    { name: "Terms of Service", href: "/policies/terms" },
  ];

  const quickLinks = [
    { name: "Watches", href: "/collection" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-display text-2xl font-semibold text-foreground"
            >
              celebratee.in
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium timepieces crafted for the modern gentleman. Experience luxury
              without compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide text-foreground uppercase mb-4">
              Policies
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} celebratee.in. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
