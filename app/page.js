import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="absolute w-full h-full bg-[url('/bg.jpg')] bg-cover after:content-[''] after:block after:bg-black/15 after:w-full after:h-full lg:bg-center"></div>
      <section className="relative container mx-auto h-full flex flex-col justify-center py-8 z-40">
        <div class="flex items-center justify-center flex-1">
          <h1 className="flex flex-col gap-y-2 text-center">
            <span className="text-gray-200 text-3xl tracking-[1rem] md:text-5xl">BUKIT</span>
            <span className="text-white text-6xl font-semibold tracking-widest md:text-8xl">
              JADDIH
            </span>
          </h1>
        </div>
        <div className="px-4 space-y-4">
          <address className="text-gray-300 text-sm max-w-96">
            Jakan, Parseh, Kec. Socah, Kabupaten Bangkalan, Jawa Timur.
          </address>
          <Link
            href="/tentang-wisata"
            className="text-white text-sm font-medium flex items-center w-max border h-12 px-4 transition-colors hover:bg-white hover:text-black"
          >
            Tentang wisata
          </Link>
        </div>
      </section>
    </main>
  );
}
