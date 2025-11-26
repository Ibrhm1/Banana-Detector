import {
  ChartPie,
  CloudUpload,
  Image as ImageIcon,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { imageBanana } from '~/constants/image-constant';

export default function UploadGambar() {
  return (
    <main className="space-y-10">
      {/* image preview */}
      <section className="w-full max-w-md mx-auto">
        <Image
          alt={imageBanana.banner.alt}
          src={imageBanana.banner.src}
          width={320}
          height={240}
          className="w-full rounded-xl shadow-lg object-cover"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="border-0 text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center space-y-3">
              <div className="bg-primary/30 text-yellow-700 rounded-full p-3">
                <CloudUpload />
              </div>
              <h1 className="lg:text-xl">Upload Gambar Pisang</h1>
            </CardTitle>

            <CardDescription className="text-gray-400">
              Pilih atau seret dan lepas gambar pisang yang ingin Anda deteksi.
            </CardDescription>
          </CardHeader>

          <CardContent className="h-full">
            <section className="bg-primary/20 h-full mx-auto p-5 lg:p-10 rounded-xl flex gap-3 flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                <ImageIcon size={48} className="text-yellow-700" />
                <p className="font-semibold text-sm lg:text-base">
                  Seret gambar ke sini atau
                </p>
              </div>

              <Input
                type="file"
                className="bg-primary/50 lg:w-fit"
                accept="image/png, image/jpeg, image/jpg"
              />

              <span className="text-xs text-zinc-400 lg:text-sm">
                Format: JPG, JPEG, PNG (Max 5MB)
              </span>
            </section>
          </CardContent>
        </Card>

        <Card className="border-0 text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center space-y-3">
              <div className="bg-green-300 text-green-800 rounded-full p-3">
                <ChartPie />
              </div>
              <h1 className="lg:text-xl">Hasil Prediksi</h1>
            </CardTitle>

            <CardDescription className="text-gray-400">
              Tingkat kematangan pisang Anda
            </CardDescription>
          </CardHeader>

          <CardContent className="h-full">
            <section className="bg-green-200 h-full mx-auto p-5 lg:p-10 rounded-xl flex gap-3 flex-col items-center justify-center">
              <Search />
              <p className="text-gray-600 font-normal">
                Upload gambar untuk melihat hasil prediksi
              </p>
              {/* <div className="flex flex-col items-center">
                <ImageIcon size={48} className="text-yellow-700" />
                <p className="font-semibold text-sm lg:text-base">
                  Seret gambar ke sini atau
                </p>
              </div>

              <Input
                type="file"
                className="bg-primary/50 lg:w-fit"
                accept="image/png, image/jpeg, image/jpg"
              />

              <span className="text-xs text-zinc-400 lg:text-sm">
                Format: JPG, JPEG, PNG (Max 5MB)
              </span> */}
            </section>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
