import { Camera, CircleX, RefreshCcw } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Button } from '~/components/ui/button';
import { imageIlustrations } from '~/constants/image-constant';

type CameraPredictProps = {
  previewImage: string | undefined;
  setPreviewImage: (url: string | undefined) => void;
  onCapture: (file: File) => void;
  isActiveCamera: boolean;
  setIsActiveCamera: (active: boolean) => void;
};

export default function CameraPredict({
  previewImage,
  setPreviewImage,
  onCapture,
  isActiveCamera,
  setIsActiveCamera,
}: CameraPredictProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
        setIsActiveCamera(false);
      }
    };

    if (isActiveCamera) {
      startCamera();
    }
    // else {
    // Cleanup if not active or just let useEffect cleanup handle it
    // but explicitly stopping tracks here is safer for "close" action
    // However, the cleanup function below handles unmount and dep change.
    // But if we toggle isActiveCamera false, we want it to stop.
    // }

    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      // Also stop current ref if any (in case stream var isn't set yet but ref is)
      if (videoRef.current && videoRef.current.srcObject) {
        const currentStream = videoRef.current.srcObject as MediaStream;
        currentStream.getTracks().forEach((track) => track.stop());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        videoRef.current.srcObject = null;
      }
    };
  }, [isActiveCamera, setIsActiveCamera]);

  const stopCamera = () => {
    setIsActiveCamera(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        canvas.toBlob((blob: Blob | null) => {
          if (blob) {
            const file = new File([blob], 'captured_image.jpg', {
              type: 'image/jpeg',
            });
            const imageUrl = URL.createObjectURL(blob);
            setPreviewImage(imageUrl);
            stopCamera();
            onCapture(file);
          }
        }, 'image/jpeg');
      }
    }
  };

  return (
    <section className="w-full max-w-md mx-auto relative overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center min-h-60">
      {isActiveCamera ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover scale-x-[-1]"
          />
          <canvas ref={canvasRef} className="hidden" />
        </>
      ) : (
        <Image
          alt={imageIlustrations.upload.alt}
          src={previewImage || imageIlustrations.upload.src}
          width={320}
          height={240}
          className="w-full h-auto object-cover"
        />
      )}

      {/* Camera Controls Overlay */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
        {!isActiveCamera && !previewImage && (
          <Button
            onClick={() => setIsActiveCamera(true)}
            size="sm"
            className="rounded-full shadow-lg"
          >
            <div className="flex gap-2 items-center">
              <Camera size={16} />
              <span>Buka Kamera</span>
            </div>
          </Button>
        )}

        {isActiveCamera && (
          <div className="flex gap-4">
            <Button
              onClick={captureImage}
              variant="default"
              size="icon-lg"
              className="rounded-full h-14 w-14 border-4 border-white shadow-xl "
            >
              <Camera className="size-8" />
            </Button>
            <Button
              onClick={stopCamera}
              variant="secondary"
              size="icon"
              className="rounded-full absolute right-4 bottom-2"
            >
              <CircleX size={20} />
            </Button>
          </div>
        )}
      </div>

      {previewImage && !isActiveCamera && (
        <Button
          onClick={() => {
            setPreviewImage(undefined);
          }}
          className="absolute top-2 right-2 active:scale-95 transition-all duration-300 rounded-full p-2 group bg-white/80 hover:bg-white text-black"
          size="icon-lg"
        >
          <RefreshCcw className="group-active:animate-spin" size={20} />
        </Button>
      )}
    </section>
  );
}
