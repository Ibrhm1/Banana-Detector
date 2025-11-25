import { ArrowRight, Banana, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HREF_MENU_MAINTANCE, NAVBAR_MENUS } from '~/constants/navbar-constant';
import { cn } from '~/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import ButtonGetStarted from './ButtonGetStarted';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-white shadow-md flex items-center justify-between h-16 px-5 md:px-8 lg:px-10">
      <section className="flex items-center gap-1 md:gap-2">
        <div className="p-1.5 bg-yellow-200 w-fit md:p-2 rounded-xl">
          <Banana />
        </div>
        <Link href={NAVBAR_MENUS[1].href}>
          <h1 className="font-bold text-sm lg:text-xl flex items-center gap-2">
            SangPisang
          </h1>
        </Link>
      </section>

      <section className="flex items-center gap-1 md:hidden">
        <ButtonGetStarted
          size="sm"
          icon={ArrowRight}
          title="Mulai Deteksi"
          href={NAVBAR_MENUS[0].href}
        />

        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Banana Detector</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col px-4 gap-3">
              {NAVBAR_MENUS.slice(1, NAVBAR_MENUS.length).map(
                (menu, menuIndex) => (
                  <Link
                    key={menuIndex}
                    href={menu?.href || HREF_MENU_MAINTANCE.maintance.href}
                    className={cn(
                      'font-normal text-base px-4 py-1 hover:border-primary hover:text-chart-2 transition-colors focus:border-b-2 focus:border-primary focus:outline-none',
                      menu.href === pathname
                        ? 'border-b-2 border-primary font-semibold text-chart-2'
                        : 'text-gray-600'
                    )}
                  >
                    {menu.name}
                  </Link>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </section>

      <section className="hidden md:flex gap-3 ">
        {NAVBAR_MENUS.slice(1, NAVBAR_MENUS.length).map((menu, index) => (
          <Link
            key={index}
            href={menu?.href || HREF_MENU_MAINTANCE.maintance.href}
            className={cn(
              'font-normal text-base px-4 py-1 hover:border-primary hover:text-chart-2 transition-colors focus:border-b-2 focus:border-primary focus:outline-none',
              menu.href === pathname
                ? 'border-b-2 border-primary font-semibold text-chart-2'
                : 'text-gray-600'
            )}
          >
            {menu.name}
          </Link>
        ))}
      </section>

      <section className="hidden md:block">
        <ButtonGetStarted
          size="default"
          icon={ArrowRight}
          title="Mulai Deteksi"
          href={NAVBAR_MENUS[0].href}
        />
      </section>
    </nav>
  );
}
