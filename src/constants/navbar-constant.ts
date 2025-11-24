type NavbarMenuType = {
  name: string;
  href: string;
};

export const NAVBAR_MENUS: NavbarMenuType[] = [
  {
    name: 'Deteksi',
    href: '/deteksi',
  },
  {
    name: 'Beranda',
    href: '/',
  },
  {
    name: 'Fitur',
    href: '/fitur',
  },
  {
    name: 'Tentang Kami',
    href: '/tentang-kami',
  },
];

export const HREF_MENU_MAINTANCE = {
  maintance: {
    href: '/maintance',
  },
};
