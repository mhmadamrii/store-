'use client';

import Image from 'next/image';

import { useState } from 'react';
import { Product, allProducts } from '../../constants/productLists';
import { Button } from '@h/packages/ui/button';
import { Input } from '@h/packages/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@h/packages/ui/card';

const categories = [...new Set(allProducts.map((product) => product.category))];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [itemsInCart, setItemsInCart] = useState<Product[]>([]);

  const filteredProducts = allProducts.filter(
    (product) =>
      (selectedCategory ? product.category === selectedCategory : true) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (item: Product) => {
    setItemsInCart([...itemsInCart, item]);
    const newItemsInCart = [...itemsInCart, item];
    const itemsinCartWithoutDuplicates = [...new Set(newItemsInCart)];
    window.localStorage.setItem(
      'my_cart',
      JSON.stringify(itemsinCartWithoutDuplicates)
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <div className="w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={300}
                  height={300}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{product.name}</CardTitle>
                <p className="text-gray-500">{product.category}</p>
                <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
