import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { imageIlustrations } from '~/constants/image-constant';

export default function LayoutMaintenance() {
  return (
    <main className="flex flex-col gap-3 items-center justify-center py-28 bg-linear-to-br from-yellow-50">
      <Image
        alt={imageIlustrations.maintenance.alt}
        src={imageIlustrations.maintenance.src}
        width={300}
        height={300}
      />

      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Halaman Sedang Dalam Perbaikan
      </h1>

      <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
        Mohon maaf, halaman sedang dalam perbaikan.
      </p>

      <Button asChild variant="default" className="font-medium">
        <Link href="/">Kembali ke beranda</Link>
      </Button>
    </main>
  );
}
