import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  about: [
    { name: "Our Mission", href: "#mission" },
    { name: "Impact Report", href: "#impact" },
    { name: "Leadership", href: "#team" },
    { name: "Careers", href: "#careers" }
  ],
  help: [
    { name: "How to Donate", href: "#donate" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Support", href: "#support" },
    { name: "Tax Information", href: "#tax" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Transparency", href: "#transparency" }
  ]
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-donation-accent" />
              <span className="text-2xl font-bold">Hope Foundation</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Dedicated to creating lasting change through compassionate giving. 
              Every donation builds bridges of hope across communities worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-donation-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-donation-accent" />
                <span>info@hopefoundation.org</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-donation-accent" />
                <span>123 Charity Lane, Hope City, HC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">About Us</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-donation-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Get Help</h4>
              <ul className="space-y-3">
                {footerLinks.help.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-donation-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-donation-accent transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-background/80 mb-4 text-sm">
              Subscribe to our newsletter for impact updates and stories of hope.
            </p>
            
            <div className="flex gap-2 mb-6">
              <Input 
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="donation" size="sm">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-donation-accent hover:text-foreground transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-background/80 text-sm">
            © 2024 Hope Foundation. All rights reserved. EIN: 12-3456789
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-donation-accent" />
              <span className="text-background/80">Made with love for humanity</span>
            </div>
            <div className="text-background/80">
              🌟 GuideStar Gold Seal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};