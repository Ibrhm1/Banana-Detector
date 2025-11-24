import Image from 'next/image';
import Link from 'next/link';
import LayoutRoot from '~/components/layouts/LayoutRoot';
import { Button } from '~/components/ui/button';
import { imageIlustrations } from '~/constants/image-constant';
import { NAVBAR_MENUS } from '~/constants/navbar-constant';

export default function Home() {
  return (
    <LayoutRoot title="Home" mode="default">
      <main className="min-h-screen flex items-center justify-between">
        <section className="w-1/2">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to the Banana Detector!
          </h1>
          <p className="text-lg mb-6">
            Detect vbananas in your images with ease. Upload an image and let
            our AI do the rest. Get started now and discover the power of banana
            detection.
          </p>
          <Button asChild>
            <Link href={NAVBAR_MENUS[1].href as string} className="">
              Get Started
            </Link>
          </Button>
        </section>
        <section>
          <Image
            src={imageIlustrations.welcome.src}
            alt={imageIlustrations.welcome.alt}
            width={400}
            height={400}
            className="aspect-square"
          />
        </section>
      </main>
    </LayoutRoot>
  );
}
