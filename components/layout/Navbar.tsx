'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartIcon from '../CartIcon';
import { useCart } from '@/hooks/useCart';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { itemCount } = useCart();

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img src="/vercel.svg" alt="Eaze" className="h-8 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="text-gray-700 hover:text-gray-900">Shop</Link>
            <Link href="/deals" className="text-gray-700 hover:text-gray-900">Deals</Link>
            <CartIcon itemCount={itemCount} onClick={() => router.push('/cart')} />
            <Link 
              href="/auth/signin"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
            >
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <CartIcon itemCount={itemCount} onClick={() => router.push('/cart')} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/shop" className="block px-3 py-2 text-gray-700">Shop</Link>
            <Link href="/deals" className="block px-3 py-2 text-gray-700">Deals</Link>
            <Link href="/auth/signin" className="block px-3 py-2 text-gray-700">Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
}