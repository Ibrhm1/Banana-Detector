import Link from 'next/link';
import LayoutRoot from '~/components/layouts/LayoutRoot';
import { Button } from '~/components/ui/button';

export default function NotFound() {
  return (
    <LayoutRoot title="Not Found">
      <main className="h-screen flex flex-col gap-3 items-center justify-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <Button asChild variant="default">
          <Link href="/">Go Back</Link>
        </Button>
      </main>
    </LayoutRoot>
  );
}
