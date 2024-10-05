import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Apa Kata Mereka</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="pt-8">
                <p className="mb-4">"{`Saya sangat puas dengan pelayanan dan kualitas rumah yang ditawarkan. Terima kasih Rumah Impian!`}"</p>
                <p className="font-bold">Pelanggan {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
