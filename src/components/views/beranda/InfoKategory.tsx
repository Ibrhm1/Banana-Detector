import { ClipboardList } from 'lucide-react';
import Image from 'next/image';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Card, CardContent, CardHeader } from '~/components/ui/card';

export default function InfoKategori() {
  const categoryBanana = [
    {
      image: '/bananas/mentah.png',
      title: 'Mentah',
      description:
        'Pisang masih hijau, keras, dan belum siap konsumsi langsung',
    },
    {
      image: '/bananas/matang.png',
      title: 'Matang',
      description: 'Kuning cerah, tekstur lembut, manis, dan siap dikonsumsi',
    },
    {
      image: '/bananas/terlalu-matang.jpeg',
      title: 'Terlalu Matang',
      description: 'Bintik coklat muncul, sangat manis, tekstur sangat lembut',
    },
    {
      image: '/bananas/busuk.png',
      title: 'Busuk',
      description: 'Coklat gelap atau hitam, berbau, tidak layak konsumsi',
    },
  ];

  return (
    <main className="bg-[#f7fdf2] px-5 md:px-8 lg:px-10 py-10">
      <HeaderSection
        iconBadge={ClipboardList}
        titleBadge="Kategori Kematangan"
        titleHeader="4 Tingkat Kematangan Pisang"
        description="Sistem kamu dapat mengindentifikasi da mengklasifikasi pisang ke dalam 4 kategoru kematangan yang berbeda"
      />

      <section className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {categoryBanana.map((item, itemIndex) => (
          <Card
            key={itemIndex}
            className="border-0 outline-none hover:shadow-2xl"
          >
            <CardHeader>
              <Image
                src={item.image}
                alt={item.title}
                width={90}
                height={90}
                className="w-full aspect-square object-cover"
              />
            </CardHeader>

            <CardContent className="space-y-2">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
