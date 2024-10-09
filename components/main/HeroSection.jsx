import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="gap-10 md:my-28 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          
          <Image
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full max-w-[400px] sm:max-w-[600px] lg:order-last"
            src={"/home3.jpg"}
            alt="Rumah Modern"
            width={600}
            height={400}
          />

          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {/* Text size adjusted for smaller screens */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl">
                Temukan Rumah Impian Anda
              </h1>
              <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
                Kami menawarkan berbagai pilihan rumah yang sesuai dengan kebutuhan dan gaya hidup Anda.
              </p>
            </div>
            {/* Flex adjusted for responsive layout of buttons */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button className="text-sm">
                <Link href="/properti">Jelajahi Properti</Link>
              </Button>
              <Button className="text-sm" variant="outline">
                <Link href="/">Hubungi Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
