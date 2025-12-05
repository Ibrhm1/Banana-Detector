import { Camera, CloudUpload, Image as ImageIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { PredictType } from '~/types/predict';
import InputFile from './_components/FormPredict';

type CardFormPredictProps = {
  mutateDataPredict: (data: PredictType) => void;
  previewImage: string | undefined;
  setPreviewImage: (image: string | undefined) => void;
  isPendingPredict: boolean;
  setIsActiveCamera: (isActive: boolean) => void;
  isActiveCamera: boolean;
};

export default function CardFormPredict({
  mutateDataPredict,
  previewImage,
  setPreviewImage,
  isPendingPredict,
  setIsActiveCamera,
  isActiveCamera,
}: CardFormPredictProps) {
  return (
    <Card className="border-0 text-center">
      <CardHeader>
        <CardTitle className="flex flex-col items-center space-y-3">
          <div className="bg-primary/30 text-yellow-700 rounded-full p-3">
            <CloudUpload />
          </div>

          <h1 className="lg:text-xl">Upload Gambar Pisang</h1>
        </CardTitle>

        <CardDescription className="text-gray-400">
          Pilih, seret gambar, atau ambil foto pisang yang ingin Anda deteksi.
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

          <div className="relative w-full flex items-center justify-center my-2">
            <div className="bg-gray-600/20 h-0.5 w-full rounded-full" />
            <span className="bg-transparent px-2 text-gray-500 font-medium">
              Atau
            </span>
            <div className="bg-gray-600/20 h-0.5 w-full rounded-full" />
          </div>

          <Button
            onClick={() => setIsActiveCamera(true)}
            variant="outline"
            className="w-full gap-2 border-primary/50 text-yellow-800 hover:bg-primary/10"
            disabled={isActiveCamera}
          >
            <Camera size={18} />
            Ambil Foto
          </Button>

          <span className="text-xs text-zinc-400 lg:text-sm mt-2">
            Format: JPG, JPEG, PNG (Max 3MB)
          </span>
        </section>
      </CardContent>
    </Card>
  );
}
