"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <header
      className={`fixed w-full h-16 ${
        pathname === "/" ? "" : "bg-white"
      } flex items-center z-50`}
    >
      <nav
        className={`container mx-auto ${
          pathname === "/" ? "text-white" : "text-black "
        } flex items-center justify-between px-4`}
      >
        <Link href="/" className="text-lg font-medium md:text-xl">
          LOGO
        </Link>
        <ul className="flex gap-x-6 md:gap-x-12">
          <li>
            <Link
              href="/tentang-wisata"
              className={`${
                pathname !== "/"
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-200 hover:text-white"
              } text-xs tracking-widest transition-colors md:text-sm`}
            >
              Tentang Wisata
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={`${
                pathname !== "/"
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-200 hover:text-white"
              } text-xs tracking-widest transition-colors md:text-sm`}
            >
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
