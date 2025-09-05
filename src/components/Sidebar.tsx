import { useState } from 'react';
import { 
  LayoutDashboard, 
  MessageCircle, 
  User, 
  Menu,
  X,
  Home,
  Heart,
  ShoppingBag,
  Star,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/', count: null },
    { icon: Home, label: 'Home', href: '/', count: null },
    { icon: Heart, label: 'Wishlist', href: '/wishlist', count: 5 },
    { icon: ShoppingBag, label: 'My Orders', href: '/orders', count: 2 },
    { icon: Star, label: 'Loyalty Card', href: '/loyalty', count: null },
    { icon: Gift, label: 'Free Products', href: '/free-products', count: 1 },
  ];

  const accountItems = [
    { icon: User, label: 'Profile', href: '/profile', count: null },
    { icon: MessageCircle, label: 'Contact Us', href: '/contact', count: null },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-background border-r border-border/20">
      <div className="p-6 space-y-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Star className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-gradient-primary">
              Oxyaura
            </h2>
            <p className="text-sm text-muted-foreground">
              Spiritual Jewelry
            </p>
          </div>
        </div>

        <Separator />

        {/* Navigation Items */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Navigation
          </h3>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3 h-12 px-3 hover:bg-primary/10 hover:text-primary group"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 group-hover:text-primary" />
                <span className="font-medium">{item.label}</span>
                {item.count && (
                  <Badge 
                    variant="secondary" 
                    className="ml-auto bg-primary/20 text-primary"
                  >
                    {item.count}
                  </Badge>
                )}
              </Button>
            ))}
          </nav>
        </div>

        <Separator />

        {/* Account Section */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Account
          </h3>
          <nav className="space-y-1">
            {accountItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start gap-3 h-12 px-3 hover:bg-accent/50 hover:text-accent-foreground group"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Loyalty Card Progress */}
      <div className="mt-auto p-6">
        <div className="bg-gradient-primary rounded-xl p-4 text-primary-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-4 h-4" />
            <span className="text-sm font-medium">Loyalty Progress</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>3 of 4 orders</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-primary-foreground/20 rounded-full h-2">
              <div className="bg-primary-foreground h-2 rounded-full w-3/4"></div>
            </div>
            <p className="text-xs opacity-90">
              1 more order for a free product!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-80">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 h-screen sticky top-0">
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;