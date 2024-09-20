import React from "react";
import dataImages from "@/data.json";
import Image from "next/image";

export default function page() {
  const firstSideA = dataImages.filter((d, i) => i <= 7);
  const firstSideB = dataImages.filter((d, i) => i > 7);

  const secondSideA = dataImages.filter((d, i) => i <= 3);
  const secondSideB = dataImages.filter((d, i) => i > 3 && i <= 7);
  const secondSideC = dataImages.filter((d, i) => i > 7 && i <= 11);
  const secondSideD = dataImages.filter((d, i) => i > 11 && i <= 17);

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <ul className="flex flex-col gap-4 lg:hidden">
        {firstSideA.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-4 lg:hidden">
        {firstSideB.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
      <ul className="hidden flex-col gap-4 lg:flex">
        {secondSideA.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
      <ul className="hidden flex-col gap-4 lg:flex">
        {secondSideB.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
      <ul className="hidden flex-col gap-4 lg:flex">
        {secondSideC.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
      <ul className="hidden flex-col gap-4 lg:flex">
        {secondSideD.map((i) => (
          <li key={i.alt}>
            <Image src={i.image} alt={i.alt} width={500} height={500} className="w-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
