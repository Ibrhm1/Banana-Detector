import LayoutRoot from '~/components/layouts/LayoutRoot';
import useGetStatusMode from '~/components/views/beranda/features/useGetStatusMode';
import ErrorStatusModel from '~/components/views/deteksi/ErrorStatusModel';
import HeaderDeteksi from '~/components/views/deteksi/HeaderDeteksi';
import UploadGambar from '~/components/views/deteksi/UploadGambar';

export default function Deteksi() {
  const { data: responseModel } = useGetStatusMode();

  return (
    <LayoutRoot title="Deteksi" mode="default">
      {responseModel?.model_loaded ? (
        <main className="px-5 md:px-8 lg:px-10 py-20 space-y-5">
          <HeaderDeteksi />
          <UploadGambar />
        </main>
      ) : (
        <ErrorStatusModel />
      )}
    </LayoutRoot>
  );
}
