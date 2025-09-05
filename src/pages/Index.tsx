import React from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import ProductGrid from '@/components/ProductGrid';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 lg:ml-0">
          <Header />
          <main>
            <HeroBanner />
            <ProductGrid />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
