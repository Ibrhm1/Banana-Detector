import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import PageHead from '../common/PageHead';
import LayoutMaintenance from './LayoutMaintenance';

type LayoutRootProps = {
  children: React.ReactNode;
  title: string;
  mode?: 'default' | 'maintenance';
};

export default function LayoutRoot({
  children,
  title,
  mode = 'default',
}: LayoutRootProps) {
  return (
    <main className={`font-sans `}>
      <PageHead title={title} />

      <Navbar />

      <section className="2xl:container mx-auto">
        {mode === 'maintenance' ? <LayoutMaintenance /> : children}
      </section>

      <Footer />
    </main>
  );
}
