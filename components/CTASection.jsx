import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Siap Memiliki Rumah Impian?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis.
            </p>
          </div>
          <Button className="text-sm">
            <Link href={"mailto:garaul762@gmail.com"}>Hubungi Kami</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
