import {
  Camera,
  ChartNoAxesCombined,
  CopyPlus,
  Smartphone,
  Star,
} from 'lucide-react';
import React from 'react';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Card, CardContent } from '~/components/ui/card';
import { cn } from '~/lib/utils';

type featureType = {
  icon: React.ElementType;
  iconColor: string;
  title: string;
  description: string;
};

export default function FiturProyek() {
  const features: featureType[] = [
    {
      icon: Camera,
      iconColor: 'bg-linear-to-r from-yellow-300 to-yellow-500 text-white',
      title: 'Upload Gambar',
      description:
        'Unggah gambar pisang dengan mudah untuk analisis cepat dan akurat.',
    },
    {
      icon: ChartNoAxesCombined,
      iconColor: 'bg-linear-to-r from-green-300 to-green-500 text-white',
      title: 'Analisis Data',
      description:
        'Dapatkan informasi lengkap tentang tingkat kematangan dengan presentase akurasi dan rekomendasi penggunaan.',
    },
    {
      icon: CopyPlus,
      iconColor: 'bg-linear-to-r from-blue-300 to-blue-500 text-white',
      title: 'Multi-Klasifikasi',
      description:
        'Sistem dapat mengidentifikasi 4 tingkat kematangan: Mentah, Matang, Terlalu Matang, dan Busuk.',
    },
    {
      icon: Smartphone,
      iconColor: 'bg-linear-to-r from-purple-300 to-purple-500 text-white',
      title: 'Responsif',
      description:
        'Desain antarmuka yang responsif, memastikan pengalaman pengguna yang optimal di berbagai perangkat.',
    },
  ];

  return (
    <main className="px-5 md:px-8 lg:px-10 bg-linear-to-br from-gray-50 from-40% to-yellow-50 py-10">
      <HeaderSection
        iconBadge={Star}
        titleBadge="Fitur Proyek"
        titleHeader="Fitur Lengkap untuk Deteksi Optimal"
        description="Berbagai fitur canggih yang dirancang untuk memberikan pengalaman deteksi pisang yang optimal dan efisien."
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat, featIndex) => (
          <Card key={featIndex} className="border-0">
            <CardContent className="space-y-3">
              <div className={cn('p-3 w-fit rounded-xl', feat.iconColor)}>
                <feat.icon />
              </div>

              <h3 className="font-bold text-xl">{feat.title}</h3>
              <p className="font-normal text-gray-600">{feat.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
