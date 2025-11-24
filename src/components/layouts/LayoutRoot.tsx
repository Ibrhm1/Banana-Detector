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

      <section className="2xl:container pt-20 md:pt-0 mx-auto px-5 md:px-8 lg:px-10">
        {mode === 'maintenance' ? <LayoutMaintenance /> : children}

        <Footer />
      </section>
    </main>
  );
}
