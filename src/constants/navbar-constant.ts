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
    name: 'Tentang Kami',
    href: '/#tentang-kami',
  },
  {
    name: 'Fitur',
    href: '/#fitur',
  },
  {
    name: 'Cara Kerja',
    href: '/#cara-kerja',
  },
  {
    name: 'Kategori',
    href: '/#kategori',
  },
];

export const HREF_MENU_MAINTANCE = {
  maintance: {
    href: '/maintance',
  },
};
