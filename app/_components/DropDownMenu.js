import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function DropDownMenu({ pathaname }) {
  return (
    <ul className="flex gap-x-6 md:gap-x-12">
      <li>
        <Link
          href="/tentang-wisata"
          className={`${
            pathaname !== "/" ? "text-gray-700" : "text-gray-200"
          } text-xs tracking-widest transition-colors ${
            pathaname !== "/" ? "hover:text-black" : "hover:text-white"
          } md:text-sm`}
        >
          Tentang Wisata
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          className={`${
            pathaname !== "/" ? "text-gray-700" : "text-gray-200"
          } text-xs  tracking-widest transition-colors ${
            pathaname !== "/" ? "hover:text-black" : "hover:text-white"
          } md:text-sm`}
        >
          Gallery
        </Link>
      </li>
    </ul>
  );
}
