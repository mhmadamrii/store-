'use client';

import { useState } from 'react';
import { Button } from '@h/packages/ui/button';
import { Input } from '@h/packages/ui/input';
import { Label } from '@h/packages/ui/label';
import { RadioGroup, RadioGroupItem } from '@h/packages/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@h/packages/ui/select';

// Mock data for cart items (in a real app, you'd fetch this from your cart state or API)
const cartItems = [
  { id: 1, name: 'Minimalist Desk Lamp', price: 79.99, quantity: 1 },
  { id: 2, name: 'Ergonomic Office Chair', price: 249.99, quantity: 1 },
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically process the payment and create the order
    console.log('Order submitted');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" required />
              </div>
              <div>
                <Label htmlFor="postalCode">Postal Code</Label>
                <Input id="postalCode" required />
              </div>
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  {/* Add more countries as needed */}
                </SelectContent>
              </Select>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Payment Information
          </h2>
          <div className="space-y-4">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </RadioGroup>
            {paymentMethod === 'credit-card' && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expirationDate">Expiration Date</Label>
                    <Input id="expirationDate" placeholder="MM/YY" required />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" required />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-100 p-6 rounded-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-4">
            Place Order
          </Button>
        </div>
      </form>
    </div>
  );
}
