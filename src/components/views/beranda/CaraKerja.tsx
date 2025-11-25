import { ChartSpline, Cpu, Database, Settings, Upload } from 'lucide-react';
import Image from 'next/image';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Card, CardContent } from '~/components/ui/card';
import { imageBanana } from '~/constants/image-constant';
import { cn } from '~/lib/utils';

export default function CaraKerja() {
  const processDetection = [
    {
      title: 'Upload Gambar',
      icon: Upload,
      background: 'bg-linear-to-r from-indigo-500 to-indigo-600',
      description: 'Pilih atau ambil foto pisang yang ingin Anda analisis',
    },
    {
      title: 'Proses AI',
      icon: Cpu,
      background: 'bg-linear-to-r from-green-500 to-green-600',
      description:
        'AI akan memproses gambar untuk menentukan tingkat kematangan pisang',
    },
    {
      title: 'Hasil Analisis',
      icon: ChartSpline,
      background: 'bg-linear-to-r from-yellow-500 to-yellow-600',
      description: 'Lihat hasil analisis tingkat kematangan pisang Anda',
    },
  ];

  const tecknologyInUse: {
    title: string;
    description: string;
    icon: React.ElementType;
    background: string;
  }[] = [
    {
      title: 'Support Vector Machine (SVM)',
      description:
        'Algoritma pembelajaran mesin yang digunakan untuk klasifikasi dan regresi.',
      icon: Cpu,
      background: 'bg-linear-to-r from-yellow-400 to-yellow-500',
    },
    {
      title: 'Dataset',
      description:
        'Kumpulan data gambar pisang yang digunakan untuk melatih model AI.',
      icon: Database,
      background: 'bg-linear-to-r from-indigo-400 to-indigo-600',
    },
  ];

  return (
    <main className="px-5 md:px-8 lg:px-10 py-10 space-y-10">
      <HeaderSection
        iconBadge={Settings}
        titleBadge="Cara Kerja"
        titleHeader="Proses Deteksi Sederhana"
        description="Hanya 3 langkah mudah untuk mendapatkan hasil deteksi kematangan pisang yang akurat"
      />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {processDetection.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="mx-auto relative flex flex-col items-center justify-center space-y-3 text-center lg:w-72"
          >
            <div
              className={cn(
                item.background,
                'mb-2 p-5 rounded-full text-white text-2xl'
              )}
            >
              <item.icon />
            </div>

            <p
              className={cn(
                'absolute -top-3 right-3 px-3 py-1 text-white rounded-full',
                item.background
              )}
            >
              {itemIndex + 1}
            </p>
            <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </section>

      <section>
        <Card className="border-0 bg-linear-to-r from-gray-100 from-50% to-yellow-50">
          <CardContent className="flex flex-col lg:flex-row gap-10">
            <div className="w-fit mx-auto lg:m-0">
              <Image
                alt={imageBanana.banner.alt}
                src={imageBanana.banner.src}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="lg:w-1/2 space-y-5">
              <h1 className="font-bold text-lg lg:text-2xl">
                Teknologi yang Digunakan
              </h1>

              {tecknologyInUse.map((tech, techIndex) => (
                <div key={techIndex} className="flex items-start gap-3 mb-5">
                  <div
                    className={cn(
                      tech.background,
                      'p-2 lg:p-3 rounded-2xl text-white'
                    )}
                  >
                    <tech.icon />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold lg:text-xl">{tech.title}</h3>
                    <p className="text-gray-500 text-sm">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
