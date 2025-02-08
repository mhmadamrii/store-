'use client';

import { useState } from 'react';
import { Button } from '@h/packages/ui/button';
import { Input } from '@h/packages/ui/input';
import { Label } from '@h/packages/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@h/packages/ui/dialog';

export function SignUpDialog() {
  const [open, setOpen] = useState(false);

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your sign-up logic here
    console.log('Sign up submitted');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Sign Up</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogDescription>
            Create an account to start shopping with us.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignUp} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="confirm-password" className="text-right">
              Confirm
            </Label>
            <Input
              id="confirm-password"
              type="password"
              className="col-span-3"
              required
            />
          </div>
          <Button type="submit" className="ml-auto">
            Sign Up
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
