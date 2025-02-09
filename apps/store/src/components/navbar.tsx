import Link from 'next/link';

import { Button } from '@h/packages/ui/button';
import { ShoppingCart } from 'lucide-react';
import { SignInDialog } from './sign-in-dialog';
import { SignUpDialog } from './sign-up-dialog';
import { headers } from 'next/headers';
import { auth } from '../lib/auth';

export default async function Navbar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              ShopEase
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/products" className="mr-4">
              <Button variant="ghost">Products</Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" className="mr-2">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
              </Button>
            </Link>
            {!session && (
              <>
                <SignInDialog />
                <SignUpDialog />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
