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
          is_valid_banana={mutationData?.is_valid_banana}
          confidence={mutationData?.confidence}
          prediction={mutationData?.prediction}
        />
      </section>
    </main>
  );
}
