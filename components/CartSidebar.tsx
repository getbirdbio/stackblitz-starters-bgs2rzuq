'use client';

import { CartState } from '@/types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartState;
  onRemoveItem: (productId: string) => void;
}

export default function CartSidebar({ isOpen, onClose, cart, onRemoveItem }: CartSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-96 bg-white shadow-xl">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
          </div>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.items.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.items.map((item) => (
                <div key={item.product.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-500">
                      ${item.product.price} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t p-4">
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${cart.total.toFixed(2)}</span>
          </div>
          <button 
            className="w-full btn-primary"
            disabled={cart.items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}