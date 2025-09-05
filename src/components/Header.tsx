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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <Star className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-gradient-primary">
              Oxyaura
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for jewelry, astro products..."
              className="pl-10 bg-warm-ivory/50 border-border/30 focus:border-primary"
            />
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            {/* Loyalty Card Progress */}
            <div className="hidden md:flex flex-col items-center gap-1 min-w-[120px]">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-gradient-primary">Loyalty</span>
                <Badge variant="secondary" className="text-xs">3/4</Badge>
              </div>
              <Progress value={loyaltyProgress} className="w-20 h-2" />
            </div>

            {/* Product Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="font-medium">
                  Products
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background/95 backdrop-blur-sm border-border/20">
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

            {/* Astro Chat */}
            <Button variant="outline" size="sm" className="btn-mystic hidden sm:flex">
              <MessageCircle className="w-4 h-4 mr-2" />
              Astro Chat
            </Button>

            {/* Action Icons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative hover-lift">
                <Heart className="w-5 h-5" />
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs"
                >
                  2
                </Badge>
              </Button>

              <Button variant="ghost" size="icon" className="relative hover-lift">
                <ShoppingCart className="w-5 h-5" />
                <Badge 
                  variant="secondary" 
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-primary text-primary-foreground"
                >
                  3
                </Badge>
              </Button>

              <Button variant="ghost" size="icon" className="hover-lift">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;