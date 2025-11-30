import { CloudUpload, Image as ImageIcon, RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import z from 'zod';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { imageIlustrations } from '~/constants/image-constant';
import HasilPrediksi from './HasilPrediksi';
import InputFile from './_components/FormPredict';
import usePredict from './_components/usePredict';

export type PredictType = {
  file: File;
};

export const predictSchema = z.object({
  file: z.instanceof(File, { message: 'File is required' }),
});

export default function UploadGambar() {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );

  const {
    data: mutationData,
    mutate: mutateDataPredict,
    isPending: isPendingPredict,
  } = usePredict();

  return (
    <main className="space-y-10">
      <section className="w-full max-w-md mx-auto relative">
        <Image
          alt={imageIlustrations.upload.alt}
          src={previewImage || imageIlustrations.upload.src}
          width={320}
          height={240}
          className="w-full rounded-xl object-cover"
        />

        {previewImage && (
          <Button
            onClick={() => setPreviewImage(undefined)}
            className="absolute top-2 right-2 active:scale-95 transition-all duration-300 rounded-full p-2 group"
            disabled={!previewImage}
            aria-label="Reset Preview Image"
            size="icon-lg"
          >
            <RefreshCcw className="group-active:animate-spin" />
          </Button>
        )}
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

              <InputFile
                mutateDataPredict={mutateDataPredict}
                previewImage={previewImage}
                setPreviewImage={setPreviewImage}
                isPendingPredict={isPendingPredict}
              />

              <span className="text-xs text-zinc-400 lg:text-sm">
                Format: JPG, JPEG, PNG (Max 5MB)
              </span>
            </section>
          </CardContent>
        </Card>

        <HasilPrediksi
          all_probabilities={mutationData?.all_probabilities}
          confidence={mutationData?.confidence}
          prediction={mutationData?.prediction}
        />
      </section>
    </main>
  );
}
