import LayoutRoot from '~/components/layouts/LayoutRoot';
import HeaderDeteksi from '~/components/views/deteksi/HeaderDeteksi';
import UploadGambar from '~/components/views/deteksi/UploadGambar';

export default function Deteksi() {
  return (
    <LayoutRoot title="Deteksi" mode="default">
      <main className="px-5 md:px-8 lg:px-10 py-20 space-y-5">
        <HeaderDeteksi />

        <UploadGambar />
      </main>
    </LayoutRoot>
  );
}
