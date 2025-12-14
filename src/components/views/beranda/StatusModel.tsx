import { BookOpenText, Heart, LoaderCircle } from 'lucide-react';
import HeaderSection from '~/components/layouts/HeaderSection';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardFooter } from '~/components/ui/card';
import { cn } from '~/lib/utils';
import useGetStatusMode from './_components/useGetStatusMode';

export default function StatusModel() {
  const {
    data: responseModel,
    refetch: refetchModel,
    isLoading: isLoadingModel,
  } = useGetStatusMode();

  return (
    <section
      id="status-model"
      className="px-5 md:px-8 lg:px-10 py-10 bg-linear-to-b from-white from-20% to-yellow-50"
    >
      <HeaderSection
        iconBadge={BookOpenText}
        titleBadge="Status"
        titleHeader="Status Model AI Deteksi"
        description="Menampilkan status terbaru dari model AI yang digunakan untuk mendeteksi tingkat kematangan pisang secara real-time."
      />

      <Card
        className={cn(
          responseModel?.model_loaded
            ? 'bg-linear-to-r from-green-400 to-green-400'
            : 'bg-linear-to-r from-red-400 to-red-400',
          'border-0 xl:w-2/3 mx-auto'
        )}
      >
        <CardContent className="flex items-center justify-between">
          <h1 className="font-semibold text-xl text-white">Status Model</h1>

          <Badge
            className={cn(
              responseModel?.model_loaded ? 'bg-green-600' : 'bg-red-600',
              'text-white font-bold capitalize px-3 py-2 rounded-full'
            )}
          >
            {responseModel?.model_loaded ? 'Berhasil' : 'Gagal'}
          </Badge>
        </CardContent>

        {!responseModel?.model_loaded && (
          <CardFooter>
            <Button
              onClick={() => refetchModel()}
              className="w-full bg-white text-black font-semibold hover:bg-gray-100 active:scale-95 transition-transform duration-300 group"
            >
              {isLoadingModel ? (
                <LoaderCircle className="group-active:animate-spin" />
              ) : (
                <Heart />
              )}
              Perbarui Status
            </Button>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}
