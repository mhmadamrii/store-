'use client';

import { useState } from 'react';
import { Input } from '@h/packages/ui/input';
import { Label } from '@h/packages/ui/label';
import { Button } from '@h/packages/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@h/packages/ui/dialog';

export function SignInDialog() {
  const [open, setOpen] = useState(false);

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Sign in submitted');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-2">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSignIn} className="grid gap-4 py-4">
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
          <Button type="submit" className="ml-auto">
            Sign In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
