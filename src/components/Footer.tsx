import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Star,
  Heart,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-earth-brown text-warm-ivory">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-gradient-primary">
                  Oxyaura
                </h3>
                <p className="text-sm text-warm-ivory/80">
                  Spiritual Jewelry & Lifestyle
                </p>
              </div>
            </div>
            
            <p className="text-warm-ivory/90 leading-relaxed">
              Crafting beautiful jewelry that connects you with your spiritual journey. 
              Each piece is made with love, intention, and the finest materials.
            </p>

            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-warm-ivory hover:text-primary hover:bg-primary/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-warm-ivory hover:text-primary hover:bg-primary/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-warm-ivory hover:text-primary hover:bg-primary/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-warm-ivory hover:text-primary hover:bg-primary/20">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-primary">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                'Dashboard',
                'My Account', 
                'Order History',
                'Wishlist',
                'Loyalty Program',
                'Size Guide',
                'Care Instructions'
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-warm-ivory/90 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-primary">
              Categories
            </h4>
            <nav className="space-y-3">
              {[
                'Oxidised Jewellery',
                'Terracotta Jewellery',
                'Divine Jewellery',
                'Crystal Collection',
                'Loyalty Products',
                'Gift Cards',
                'Custom Orders'
              ].map((category) => (
                <a 
                  key={category}
                  href="#" 
                  className="block text-warm-ivory/90 hover:text-primary transition-colors"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif font-semibold text-primary">
              Get in Touch
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-warm-ivory/90">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@oxyaura.com</span>
              </div>
              <div className="flex items-center gap-3 text-warm-ivory/90">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-warm-ivory/90">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Mumbai, India</span>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-medium text-primary">Newsletter</h5>
              <p className="text-sm text-warm-ivory/80">
                Subscribe for exclusive offers and spiritual insights
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-warm-ivory/10 border-warm-ivory/20 text-warm-ivory placeholder:text-warm-ivory/60"
                />
                <Button className="btn-luxury">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-warm-ivory/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-warm-ivory/80">
            © 2024 Oxyaura. All rights reserved. Made with love for spiritual souls.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-warm-ivory/80 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-ivory/80 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-warm-ivory/80 hover:text-primary transition-colors">
              Shipping Info
            </a>
            <a href="#" className="text-warm-ivory/80 hover:text-primary transition-colors">
              Returns
            </a>
          </div>
        </div>

        {/* Customer Enquiry Form CTA */}
        <div className="mt-8 text-center">
          <Button className="btn-mystic" size="lg">
            <MessageCircle className="w-4 h-4 mr-2" />
            Customer Enquiry Form
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;