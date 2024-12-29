'use client';

interface CartIconProps {
  itemCount: number;
  onClick: () => void;
}

export default function CartIcon({ itemCount, onClick }: CartIconProps) {
  return (
    <button 
      onClick={onClick}
      className="relative p-2"
    >
      <span className="text-2xl">🛒</span>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}