import { ClipboardList } from 'lucide-react';
import Image from 'next/image';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { categoryBanana } from '~/constants/category-constant';

export default function InfoKategori() {
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
