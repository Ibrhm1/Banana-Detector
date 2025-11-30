import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { imageIlustrations } from '~/constants/image-constant';
import { NAVBAR_MENUS } from '~/constants/navbar-constant';

export default function ErrorStatusModel() {
  return (
    <main className="flex flex-col gap-3 items-center justify-center py-28 bg-linear-to-br from-yellow-50">
      <Image
        alt={imageIlustrations.error.alt}
        src={imageIlustrations.error.src}
        width={300}
        height={300}
      />

      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Maaf, Model AI Tidak Dapat Dimuat
      </h1>

      <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center">
        Saat ini model AI untuk mendeteksi tingkat kematangan pisang sedang
        tidak tersedia. Silakan coba lagi nanti.
      </p>

      <Button asChild variant="default" className="font-medium">
        <Link href={NAVBAR_MENUS[4].href}>Kembali ke beranda</Link>
      </Button>
    </main>
  );
}
