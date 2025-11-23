import LayoutRoot from '~/components/layouts/LayoutRoot';
import { Button } from '~/components/ui/button';

export default function Predict() {
  return (
    <LayoutRoot title="Home" mode="maintenance">
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
        <h1>Hello, Banana Detector!</h1>

        <Button onClick={() => alert('Anjay')}>Click me</Button>
      </main>
    </LayoutRoot>
  );
}
