import Image from 'next/image';
import Link from 'next/link';
import LayoutRoot from '~/components/layouts/LayoutRoot';
import { Button } from '~/components/ui/button';
import { imageIlustrations } from '~/constants/image-constant';

export default function NotFound() {
  return (
    <LayoutRoot title="Not Found">
      <main className="flex flex-col gap-3 items-center justify-center py-28 bg-linear-to-bl from-yellow-50">
        <Image
          alt={imageIlustrations.notFound.alt}
          src={imageIlustrations.notFound.src}
          width={300}
          height={300}
        />

        <h1 className="text-2xl md:text-4xl font-bold text-center">
          404 - Page Not Found
        </h1>

        <Button asChild variant="default" className="font-medium">
          <Link href="/">Kembali ke beranda</Link>
        </Button>
      </main>
    </LayoutRoot>
  );
}
