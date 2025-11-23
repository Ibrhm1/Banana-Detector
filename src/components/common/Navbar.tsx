import { Menu } from 'lucide-react';
import Link from 'next/link';
import { HREF_MENU_MAINTANCE, NAVBAR_MENUS } from '~/constants/navbar-constant';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between h-16 px-5 lg:px-20">
      <section>
        <h1 className="font-bold text-lg lg:text-xl">Banana Detector</h1>
      </section>

      <section className="md:hidden">
        <Menu />
      </section>

      <section className="hidden md:flex gap-5">
        {NAVBAR_MENUS.map((menu, index) => (
          <Link
            key={index}
            href={menu?.href || HREF_MENU_MAINTANCE.maintance.href}
            className="font-normal text-base"
          >
            {menu.name}
          </Link>
        ))}
      </section>
    </nav>
  );
}
