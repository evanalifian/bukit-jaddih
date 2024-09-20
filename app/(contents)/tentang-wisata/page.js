import Image from "next/image";
import bukitImage from "@/public/bukit-jaddih.JPG";
import BackButton from "../../_components/BackButton";
import Text from "./text.mdx";

export default function page() {
  return (
    <section className="space-y-12">
      <figure>
        <Image src={bukitImage} alt="Bukit Jaddih" />
        <figcaption className="flex flex-col gap-y-2 mt-6">
          <span className="text-gray-500 text-sm">
            Pengambilan gambar pada 19 September 2024.
          </span>
          <h1 className="text-4xl font-bold">Bukit Jaddih</h1>
        </figcaption>
      </figure>
      <article>
        <Text />
      </article>
    </section>
  );
}
