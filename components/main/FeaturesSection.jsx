import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesSection() {
  return (
    <section className="gap-10 md:my-28 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Fitur Unggulan
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Lokasi Strategis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Rumah-rumah kami terletak di lokasi yang strategis, dekat dengan
                fasilitas umum dan akses transportasi.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Desain Modern</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Setiap rumah dirancang dengan konsep modern yang memadukan
                estetika dan fungsionalitas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Harga Kompetitif</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Kami menawarkan harga yang kompetitif dengan berbagai pilihan
                skema pembayaran yang fleksibel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
