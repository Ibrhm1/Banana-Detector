import { useState } from 'react';
import z from 'zod';
import CameraPredict from './_components/CameraPredict';
import usePredict from './_components/usePredict';
import CardFormPredict from './CardFormPredict';
import HasilPrediksi from './HasilPrediksi';

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
  const [isActiveCamera, setIsActiveCamera] = useState(false);
  const {
    data: mutationData,
    mutate: mutateDataPredict,
    isPending: isPendingPredict,
  } = usePredict();

  const handleCapture = (file: File) => {
    mutateDataPredict({ file });
  };

  return (
    <main className="space-y-10">
      <CameraPredict
        isActiveCamera={isActiveCamera}
        setIsActiveCamera={setIsActiveCamera}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        onCapture={handleCapture}
      />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* <Card className="border-0 text-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center space-y-3">
              <div className="bg-primary/30 text-yellow-700 rounded-full p-3">
                <CloudUpload />
              </div>

              <h1 className="lg:text-xl">Upload Gambar Pisang</h1>
            </CardTitle>

            <CardDescription className="text-gray-400">
              Pilih, seret gambar, atau ambil foto pisang yang ingin Anda
              deteksi.
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
        </Card> */}

        <CardFormPredict
          mutateDataPredict={mutateDataPredict}
          previewImage={previewImage}
          setPreviewImage={setPreviewImage}
          isPendingPredict={isPendingPredict}
          setIsActiveCamera={setIsActiveCamera}
          isActiveCamera={isActiveCamera}
        />

        <HasilPrediksi
          all_probabilities={mutationData?.all_probabilities}
          confidence={mutationData?.confidence}
          prediction={mutationData?.prediction}
        />
      </section>
    </main>
  );
}
