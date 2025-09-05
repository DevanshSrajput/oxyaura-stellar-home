import { useState } from 'react';
import { Search, ShoppingCart, Heart, User, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';

const Header = () => {
  const [loyaltyProgress, setLoyaltyProgress] = useState(75); // 3 out of 4 orders

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 shadow-soft">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 hover-tilt">
            <div className="w-10 h-10 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-soft pulse-glow">
              <Star className="w-5 h-5 text-primary-foreground float" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gradient-primary text-luxury">
                Oxyaura
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Spiritual Jewelry</p>
            </div>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-lg relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Search for jewelry, astro products..."
              className="pl-12 pr-4 py-3 bg-gradient-to-r from-warm-ivory/60 to-warm-ivory/40 border-border/20 rounded-2xl 
                         focus:border-primary focus:shadow-glow focus:bg-background/80 
                         transition-all duration-300 text-base backdrop-blur-sm
                         hover:shadow-soft hover:border-primary/50"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            {/* Enhanced Loyalty Card Progress */}
            <div className="hidden md:flex flex-col items-center gap-2 min-w-[140px] p-3 bg-gradient-warm rounded-2xl shadow-soft hover-lift">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-gradient-primary">Loyalty Rewards</span>
                <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30 pulse-glow">3/4</Badge>
              </div>
              <Progress value={loyaltyProgress} className="w-24 h-3 bg-background rounded-full" />
              <p className="text-xs text-muted-foreground font-medium">1 order to free gift!</p>
            </div>

            {/* Enhanced Product Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-semibold px-6 py-3 rounded-xl hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  Products
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-background/95 backdrop-blur-lg border-border/20 shadow-luxury rounded-2xl p-2">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="text-gradient-primary font-medium">Oxidised Jewellery</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Earrings</DropdownMenuItem>
                    <DropdownMenuItem>Necklace</DropdownMenuItem>
                    <DropdownMenuItem>Bracelets</DropdownMenuItem>
                    <DropdownMenuItem>Anklets</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="text-deep-copper font-medium">Terracotta Jewellery</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Earrings</DropdownMenuItem>
                    <DropdownMenuItem>Necklace</DropdownMenuItem>
                    <DropdownMenuItem>Bracelets</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <span className="text-gradient-mystic font-medium">Divine Jewellery</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Sacred Pendants</DropdownMenuItem>
                    <DropdownMenuItem>Crystal Jewelry</DropdownMenuItem>
                    <DropdownMenuItem>Spiritual Rings</DropdownMenuItem>
                    <DropdownMenuItem>Meditation Beads</DropdownMenuItem>
                    <DropdownMenuItem>Other</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span className="text-luxury-gold font-medium">Loyalty Card Products</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Enhanced Astro Chat */}
            <Button variant="outline" size="sm" className="btn-mystic hidden sm:flex hover-shine relative overflow-hidden">
              <MessageCircle className="w-4 h-4 mr-2 float" />
              Astro Chat
              <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </Button>

            {/* Enhanced Action Icons */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative hover-lift hover-glow p-3 rounded-2xl transition-all duration-300">
                <Heart className="w-5 h-5 hover:text-destructive transition-colors" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs animate-bounce shadow-soft"
                >
                  2
                </Badge>
              </Button>

              <Button variant="ghost" size="icon" className="relative hover-lift hover-glow p-3 rounded-2xl transition-all duration-300">
                <ShoppingCart className="w-5 h-5 hover:text-primary transition-colors" />
                <Badge 
                  variant="secondary" 
                  className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs 
                             bg-gradient-primary text-primary-foreground animate-bounce shadow-soft"
                >
                  3
                </Badge>
              </Button>

              <Button variant="ghost" size="icon" className="hover-lift hover-glow p-3 rounded-2xl transition-all duration-300">
                <User className="w-5 h-5 hover:text-accent transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;