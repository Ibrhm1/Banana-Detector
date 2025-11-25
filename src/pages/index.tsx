import LayoutRoot from '~/components/layouts/LayoutRoot';
import CaraKerja from '~/components/views/beranda/CaraKerja';
import FiturProyek from '~/components/views/beranda/FiturProyek';
import Hero from '~/components/views/beranda/Hero';
import InfoKategori from '~/components/views/beranda/InfoKategory';
import TentangProyek from '~/components/views/beranda/TentangProyek';

export default function Beranda() {
  return (
    <LayoutRoot title="Beranda" mode="default">
      <Hero />
      <TentangProyek />
      <FiturProyek />
      <CaraKerja />
      <InfoKategori />
    </LayoutRoot>
  );
}
