import { CartState, CartItem, Product } from '@/types';

export const addToCart = (cart: CartState, product: Product): CartState => {
  const existingItem = cart.items.find(item => item.product.id === product.id);
  
  if (existingItem) {
    return {
      items: cart.items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
      total: cart.total + product.price
    };
  }

  return {
    items: [...cart.items, { product, quantity: 1 }],
    total: cart.total + product.price
  };
};

export const removeFromCart = (cart: CartState, productId: string): CartState => {
  const item = cart.items.find(item => item.product.id === productId);
  if (!item) return cart;

  return {
    items: cart.items.filter(item => item.product.id !== productId),
    total: cart.total - (item.product.price * item.quantity)
  };
};