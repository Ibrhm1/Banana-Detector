import { BadgeInfo, Brain, CircleCheck, FastForward, Info } from 'lucide-react';
import Image from 'next/image';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Card, CardContent } from '~/components/ui/card';
import { imageBanana } from '~/constants/image-constant';
import { cn } from '~/lib/utils';

export default function TentangProyek() {
  const pointOfWhyChoose = [
    {
      title: 'Mudah Digunakan',
      description:
        'Interface intuitif yang dapat digunakan siapa saja tanpa pelatihan khusus.',
    },
    {
      title: 'Gratis & Open Source',
      description:
        'Dapat diakses secara gratis dan dikembangkan bersama komunitas',
    },
    {
      title: 'Akurasi Tinggi',
      description:
        'Model deteksi kami telah dilatih dengan dataset besar untuk memastikan akurasi tinggi dalam mengidentifikasi pisang.',
    },
  ];

  const aboutProject = [
    {
      icon: Brain,
      iconColor: 'bg-blue-500',
      title: 'Teknologi AI',
      background: 'bg-linear-to-r from-blue-50 from-0% to-blue-100',
      description:
        'Menggunakan algoritma machine learning untuk visual tingkat kematangan pisang dengan presisi tinggi.',
    },
    {
      icon: FastForward,
      iconColor: 'bg-green-500',
      title: 'Hasil Cepat',
      background: 'bg-linear-to-r from-green-50 from-0% to-green-100',
      description:
        'Proses deteksi hanya membutuhkan beberapa detik untuk memberikan hasil yang akurat dan mudah dipahami dengan visualisasi yang jelas.',
    },
    {
      icon: BadgeInfo,
      iconColor: 'bg-yellow-500',
      title: 'Akurasi Tinggi',
      background: 'bg-linear-to-r from-yellow-50 from-0% to-yellownav-100',
      description:
        'Model deteksi kami telah dilatih dengan dataset besar untuk memastikan akurasi tinggi dalam mengidentifikasi pisang.',
    },
  ];

  return (
    <main className="px-5 md:px-8 lg:px-10 py-10">
      <HeaderSection
        iconBadge={Info}
        titleBadge="Tentang Proyek"
        titleHeader="Revolusi Deteksi Kematangan Buah"
        description="SangPisang adalah sistem deteksi berbasis AI yang dirancang untuk membantu petani, distributor, dan konsumen dalam menentukan tingkat kematangan pisang dengan cepat dan akurat"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {aboutProject.map((about, aboutIndex) => (
          <Card
            key={aboutIndex}
            className={cn('border-none', about.background)}
          >
            <CardContent className="space-y-5">
              <div
                className={cn(
                  'w-fit p-2 rounded-lg text-white',
                  about.iconColor
                )}
              >
                <about.icon />
              </div>
              <h2 className="font-bold text-2xl">{about.title}</h2>
              <p>{about.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="border-0 outline-none bg-linear-to-l from-40% from-green-500 to-primary">
        <CardContent className="flex flex-col md:flex-row justify-between gap-5 items-center">
          <div className="space-y-4">
            <h2 className="text-white font-bold w-full lg:text-2xl">
              Mengapa Memilih SangPisang
            </h2>

            {pointOfWhyChoose.map((point, pointIndex) => (
              <div key={pointIndex} className="flex w-full gap-2 text-white">
                <CircleCheck />

                <div className="w-full">
                  <h3 className="font-semibold lg:text-lg">{point.title}</h3>
                  <p className="text-card text-xs lg:text-base">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="xl:w-1/3">
            <Image
              src={imageBanana.banner.src}
              alt={imageBanana.banner.alt}
              width={550}
              height={550}
              className="rounded-2xl w-full"
            />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
