import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      message:
        "Saya sangat puas dengan pelayanan dan kualitas rumah yang ditawarkan. Terima kasih Rumah Impian!",
      author: "Andi S.",
    },
    {
      message:
        "Pengalaman membeli rumah di sini sangat memuaskan, pelayanan ramah dan profesional.",
      author: "Dewi P.",
    },
    {
      message:
        "Rumah yang saya beli sesuai dengan harapan, prosesnya juga cepat dan mudah.",
      author: "Budi R.",
    },
  ];

  return (
    <section className="gap-10 md:my-28 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Apa Kata Mereka
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {testimonials.map(({ message, author }, i) => (
            <Card key={i}>
              <CardContent className="pt-8">
                <p className="mb-4 text-center ">{`"${message}"`}</p>
                <p className="font-bold text-center">{author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
