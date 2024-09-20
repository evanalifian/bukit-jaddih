import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function DropDownMenu({ pathaname }) {
  return (
    <>
      {/* <div class="hidden">
        <Menu>
          <MenuButton className="outline-none">
            <AlignJustify />
          </MenuButton>
          <MenuItems
            anchor="bottom end"
            className={`w-40 backdrop-blur-sm ${pathaname === "/" ? "text-gray-200 bg-black/30" : "text-gray-900 bg-white"} border ${pathaname === "/" ? "border-black/10" : "border-gray-200"} p-1 outline-none mt-4`}
          >
            <MenuItem>
              <Link
                className={`block p-1 ${pathaname === "/" ? "data-[focus]:bg-black/35" : "data-[focus]:bg-gray-200"}`}
                href="/tentang-wisata"
              >
                Tentang Wisata
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className={`block p-1 ${pathaname === "/" ? "data-[focus]:bg-black/35" : "data-[focus]:bg-gray-200"}`}
                href="/gallery"
              >
                Gallery
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                className={`block p-1 ${pathaname === "/" ? "data-[focus]:bg-black/35" : "data-[focus]:bg-gray-200"}`}
                href="/harga-tiket"
              >
                Harga Tiket
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div> */}
      <ul class="flex gap-x-6 md:gap-x-12">
        <li>
          <Link href="/tentang-wisata" className={`${pathaname !== "/" ? "text-gray-700" : "text-gray-200"} text-xs tracking-widest transition-colors ${pathaname !== "/" ? "hover:text-black" : "hover:text-white"} md:text-sm`}>Tentang Wisata</Link>
        </li>
        <li>
          <Link href="/gallery" className={`${pathaname !== "/" ? "text-gray-700" : "text-gray-200"} text-xs  tracking-widest transition-colors ${pathaname !== "/" ? "hover:text-black" : "hover:text-white"} md:text-sm`}>Gallery</Link>
        </li>
      </ul>
    </>
  );
}
