import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import PageHead from '../common/PageHead';
import LayoutMaintenance from './LayoutMaintenance';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    <main className={`${geistSans.variable} ${geistMono.variable}`}>
      <PageHead title={title} />
      <Navbar />
      <section className="container mx-auto">
        {mode === 'maintenance' ? <LayoutMaintenance /> : children}
        <Footer />
      </section>
    </main>
  );
}
