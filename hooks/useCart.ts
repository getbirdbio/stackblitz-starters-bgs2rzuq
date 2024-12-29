'use client';

import { useState, useCallback } from 'react';
import { CartState, Product } from '@/types';
import { addToCart, removeFromCart } from '@/utils/cart';

const initialCart: CartState = {
  items: [],
  total: 0
};

export function useCart() {
  const [cart, setCart] = useState<CartState>(initialCart);
  
  const addItem = useCallback((product: Product) => {
    setCart(currentCart => addToCart(currentCart, product));
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart(currentCart => removeFromCart(currentCart, productId));
  }, []);

  return {
    cart,
    addItem,
    removeItem,
    itemCount: cart.items.reduce((acc, item) => acc + item.quantity, 0)
  };
}