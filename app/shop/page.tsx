'use client';

import { useState } from 'react';
import { products } from '@/utils/products';
import ProductGrid from '@/components/shop/ProductGrid';
import SearchBar from '@/components/shop/SearchBar';
import FilterBar from '@/components/shop/FilterBar';
import { useCart } from '@/hooks/useCart';
import CartSidebar from '@/components/CartSidebar';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { cart, addItem, removeItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
                         product.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6">
          <SearchBar value={search} onChange={setSearch} />
          <FilterBar 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          <ProductGrid 
            products={filteredProducts} 
            onAddToCart={addItem}
          />
        </div>
      </div>
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onRemoveItem={removeItem}
      />
    </div>
  );
}