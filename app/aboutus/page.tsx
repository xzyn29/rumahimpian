import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen top-0 px-6 py-6">
      <Header />
      <main className="container max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 flex-grow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center md:my-28  ">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
              Tentang Rumah Impian
            </h1>
            <p className="text-justify text-base sm:text-lg mb-4 sm:mb-6">
              Rumah Impian adalah perusahaan real estate terkemuka yang
              berdedikasi untuk membantu Anda menemukan rumah impian Anda.
              Dengan pengalaman bertahun-tahun dan tim profesional yang
              berpengalaman, kami menawarkan layanan terbaik dalam industri
              properti.
            </p>
            <p className="text-justify text-base sm:text-lg mb-4 sm:mb-6">
              Visi kami adalah menjadi mitra terpercaya dalam perjalanan Anda
              menuju kepemilikan rumah. Kami memahami bahwa setiap klien
              memiliki kebutuhan dan impian yang unik, dan kami berkomitmen
              untuk memberikan solusi yang disesuaikan dengan kebutuhan Anda.
            </p>
            <Link
              href="https://wa.me/62821229944"
              className="inline-block bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="relative h-[250px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/logo-dark.png"
              alt="Tim Rumah Impian"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
