import { Menu } from 'lucide-react';
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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full bg-sidebar shadow-md flex items-center justify-between h-16 px-5 lg:px-20">
      <section>
        <h1 className="font-bold text-lg lg:text-xl">Banana Detector</h1>
      </section>

      <section className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle>Banana Detector</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col px-4 gap-3">
              {NAVBAR_MENUS.map((menu, menuIndex) => (
                <Link
                  key={menuIndex}
                  href={menu?.href || HREF_MENU_MAINTANCE.maintance.href}
                  className={cn(
                    'font-normal text-base px-4 py-1 rounded-xl hover:border-b-2 hover:border-primary transition-colors focus:border-b-2 focus:border-primary focus:outline-none',
                    menu.href === pathname
                      ? 'border-b-2 border-primary font-semibold bg-linear-to-t from-primary/10 to-transparent'
                      : 'text-gray-600'
                  )}
                >
                  {menu.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </section>

      <section className="hidden md:flex gap-3">
        {NAVBAR_MENUS.map((menu, index) => (
          <Link
            key={index}
            href={menu?.href || HREF_MENU_MAINTANCE.maintance.href}
            className={cn(
              'font-normal text-base rounded-xl px-4 py-1 hover:border-b-2 hover:border-primary transition-colors focus:border-b-2 focus:border-primary focus:outline-none',
              menu.href === pathname
                ? 'border-b-2 border-primary font-semibold bg-linear-to-t from-primary/10 to-transparent'
                : 'text-gray-600'
            )}
          >
            {menu.name}
          </Link>
        ))}
      </section>
    </nav>
  );
}
