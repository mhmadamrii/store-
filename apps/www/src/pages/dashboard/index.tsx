import { Button } from '@h/packages/ui/button';

export default function Dashboard() {
  return (
    <div className="h-screen mx-auto border border-red-500 max-w-7xl flex flex-col items-center justify-center">
      <h1>Welcome to the dashboard</h1>
      <Button onClick={() => window.alert('Hello world')}>Click me</Button>
    </div>
  );
}
