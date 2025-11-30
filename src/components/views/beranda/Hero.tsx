import { ChevronRight, CircleAlert } from 'lucide-react';
import BadgeTemplate from '~/components/common/BadgeTemplate';
import ButtonGetStarted from '~/components/common/ButtonGetStarted';
import ImageBanana from '~/components/common/ImageBanana';
import { NAVBAR_MENUS } from '~/constants/navbar-constant';

export default function Hero() {
  return (
    <main className="bg-linear-to-r from-sidebar flex items-center justify-between flex-col lg:flex-row px-5 md:px-8 lg:px-10 py-20">
      <section className="lg:w-2/5 space-y-4 py-10">
        <BadgeTemplate icon={CircleAlert} title="Teknologi AI" />

        <h1 className="font-extrabold text-4xl lg:text-6xl">
          Deteksi Kematangan Pisang dengan&nbsp;
          <span className="font-extrabold bg-linear-to-r from-primary to-green-500 text-transparent bg-clip-text">
            Akurasi Tinggi
          </span>
        </h1>

        <p className="text-sm lg:text-lg text-gray-600 leading-relaxed">
          Sistem deteksi berbasis kecerdasan buatan yang mampu mengidentifikasi
          tingkat kematangan buah pisang secara real-time dengan akurasi hingga
          98%. Solusi modern untuk industri pertanian dan distribusi buah.
        </p>

        <ButtonGetStarted href={NAVBAR_MENUS[0].href} icon={ChevronRight} />
      </section>

      <section className="lg:w-1/2 mt-10 lg:mt-0">
        <ImageBanana />
      </section>
    </main>
  );
}
