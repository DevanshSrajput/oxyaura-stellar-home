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
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl font-serif font-bold text-gradient-primary">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of spiritual and artistic jewelry pieces, 
            crafted with love and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="card-luxury hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 ${
                      product.badge === 'Sale' ? 'bg-destructive' :
                      product.badge === 'New' ? 'bg-accent' :
                      product.badge === 'Limited' ? 'bg-mystic-purple' :
                      'bg-primary'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 backdrop-blur-sm bg-background/20 hover:bg-background/40 transition-colors ${
                    product.isWishlisted ? 'text-destructive' : 'text-muted-foreground'
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart className={`w-5 h-5 ${product.isWishlisted ? 'fill-current' : ''}`} />
                </Button>

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
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

                  <h3 className="font-serif font-semibold text-lg">
                    {product.name}
                  </h3>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 btn-luxury" 
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-mystic">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;