import React from "react";
import { dataImages } from "@/public/script";
import Image from "next/image";

export default function page() {
  return (
    <ul className="grid grid-cols-2 gap-4">
      {dataImages.map((i) => (
        <li key={i.image}>
          <Image
            src={i.image}
            alt={i.alt}
            width={200}
            height={200}
            className="w-full"
            priority
          />
        </li>
      ))}
    </ul>
  );
}
