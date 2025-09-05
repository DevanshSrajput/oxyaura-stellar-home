import { useState } from 'react';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import oxidizedJewelry from '@/assets/oxidized-jewelry.jpg';
import terracottaJewelry from '@/assets/terracotta-jewelry.jpg';
import divineJewelry from '@/assets/divine-jewelry.jpg';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  isWishlisted: boolean;
  badge?: string;
  description: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Mystical Om Pendant",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 124,
      image: divineJewelry,
      category: "Divine Jewellery",
      isWishlisted: false,
      badge: "Bestseller",
      description: "Handcrafted sterling silver Om pendant with intricate spiritual engravings"
    },
    {
      id: 2,
      name: "Oxidized Lotus Earrings",
      price: 899,
      rating: 4.6,
      reviews: 89,
      image: oxidizedJewelry,
      category: "Oxidised Jewellery",
      isWishlisted: true,
      description: "Elegant oxidized silver earrings featuring detailed lotus motifs"
    },
    {
      id: 3,
      name: "Terracotta Beaded Necklace",
      price: 699,
      originalPrice: 899,
      rating: 4.7,
      reviews: 156,
      image: terracottaJewelry,
      category: "Terracotta Jewellery",
      isWishlisted: false,
      badge: "Sale",
      description: "Handmade terracotta beaded necklace with traditional patterns"
    },
    {
      id: 4,
      name: "Crystal Healing Bracelet",
      price: 1599,
      rating: 4.9,
      reviews: 203,
      image: divineJewelry,
      category: "Divine Jewellery",
      isWishlisted: false,
      badge: "New",
      description: "Authentic crystal bracelet for meditation and spiritual healing"
    },
    {
      id: 5,
      name: "Vintage Oxidized Ring",
      price: 599,
      rating: 4.5,
      reviews: 67,
      image: oxidizedJewelry,
      category: "Oxidised Jewellery",
      isWishlisted: false,
      description: "Vintage-style oxidized silver ring with intricate geometric patterns"
    },
    {
      id: 6,
      name: "Ethnic Terracotta Bangles",
      price: 449,
      originalPrice: 599,
      rating: 4.4,
      reviews: 92,
      image: terracottaJewelry,
      category: "Terracotta Jewellery",
      isWishlisted: true,
      badge: "Limited",
      description: "Set of 3 handcrafted terracotta bangles with ethnic designs"
    },
  ]);

  const toggleWishlist = (productId: number) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === productId
          ? { ...product, isWishlisted: !product.isWishlisted }
          : product
      )
    );

    const product = products.find(p => p.id === productId);
    toast({
      title: product?.isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${product?.name} ${product?.isWishlisted ? 'removed from' : 'added to'} your wishlist`,
    });
  };

  const addToCart = (product: Product) => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'fill-primary text-primary' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-warm bg-pattern-grid relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 space-y-6 fade-in">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gradient-primary text-luxury slide-up">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground/90 max-w-3xl mx-auto leading-relaxed slide-up">
            Discover our handpicked selection of spiritual and artistic jewelry pieces, 
            crafted with love and attention to detail for the modern spiritual soul
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full slide-up"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <Card key={product.id} className="card-product group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {product.badge && (
                  <Badge 
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold shadow-soft pulse-glow ${
                      product.badge === 'Sale' ? 'bg-gradient-to-r from-destructive to-red-600 text-white' :
                      product.badge === 'New' ? 'bg-gradient-to-r from-accent to-purple-600 text-white' :
                      product.badge === 'Limited' ? 'bg-gradient-to-r from-mystic-purple to-purple-700 text-white' :
                      'bg-gradient-primary text-primary-foreground'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md bg-background/30 hover:bg-background/60 
                             transition-all duration-300 hover:scale-110 shadow-soft ${
                    product.isWishlisted ? 'text-destructive hover:text-destructive' : 'text-white hover:text-destructive'
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart className={`w-5 h-5 transition-all duration-300 ${product.isWishlisted ? 'fill-current scale-110' : ''}`} />
                </Button>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-all duration-500 
                               flex items-center justify-center gap-3">
                  <Button size="sm" className="btn-elegant hover-shine shadow-soft">
                    <Eye className="w-4 h-4 mr-2" />
                    Quick View
                  </Button>
                </div>
              </div>

              <CardContent className="p-8 space-y-5 bg-gradient-card">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-sm text-muted-foreground ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-luxury group-hover:text-gradient-primary transition-all duration-300">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-gradient-primary">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-base text-muted-foreground line-through opacity-75">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive" className="text-xs">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    className="flex-1 btn-luxury text-base py-3 hover-shine" 
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <Button size="lg" variant="outline" className="btn-mystic text-lg px-12 py-4 hover-shine">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;