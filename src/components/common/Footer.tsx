import {
  Banana,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { categoryBanana } from "~/constants/category-constant";
import { NAVBAR_MENUS } from "~/constants/navbar-constant";

export default function Footer() {
  const mediaSocial = [
    {
      name: "facebook",
      icon: Facebook,
      href: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://x.com/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/",
    },
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/",
    },
  ];

  return (
    <footer className="w-full bg-foreground text-white py-10 lg:py-5 px-5 md:px-8 lg:px-10 flex flex-col justify-between gap-10">
      <section className="flex flex-col lg:flex-row gap-8 justify-between">
        <header className="space-y-5">
          <section className="flex items-center gap-2">
            <div className="p-3 bg-yellow-200 text-black w-fit rounded-xl">
              <Banana />
            </div>

            <div>
              <h3 className="text-2xl font-bold">SangPisang</h3>
              <p className="font-normal text-sm text-gray-400">
                AI Detection System
              </p>
            </div>
          </section>

          <p className="font-normal text-base text-gray-400">
            Solusi modern untuk deteksi kematangan pisang menggunakan teknologi
            kecerdasan buatan.
          </p>

          <div className="flex gap-2">
            {mediaSocial.map((social, socialIndex) => (
              <Link
                href={social.href}
                target="_blank"
                key={socialIndex}
                className="bg-gray-600 text-white p-2 w-fit rounded-xl"
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </header>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Navigasi</h2>

          <div className="flex flex-col gap-2">
            {NAVBAR_MENUS.map((menu, menuIndex) => (
              <Link
                key={menuIndex}
                href={menu.href}
                className="text-gray-400 hover:text-gray-200 active:text-gray-200 transition-all"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold">Kategori</h2>

          <div className="flex flex-col gap-2">
            {categoryBanana.map((item, itemIndex) => (
              <p
                key={itemIndex}
                className="text-gray-400 hover:text-gray-200 active:text-gray-200 transition-all"
              >
                {item.title}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full text-center border-t border-gray-500 pt-5 text-gray-500">
        <p className="text-sm">&copy; 2025 SangPisang. All Rights Reserved</p>
      </section>
    </footer>
  );
}
