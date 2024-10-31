import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { MapPin } from "lucide-react";
import Link from "next/link";

export default function LatestPropertiesSection() {
  const properties = [
    {
      imageSrc: "/home1.jpg",
      title: "Villa Mewah",
      location: "Lokasi 1",
      price: 1500000,
    },
    {
      imageSrc: "/home2.jpg",
      title: "Apartemen Modern",
      location: "Lokasi 2",
      price: 2000000,
    },
    {
      imageSrc: "/home3.jpg",
      title: "Rumah Keluarga",
      location: "Lokasi 3",
      price: 2500000,
    },
    {
      imageSrc: "/home6.jpg",
      title: "Townhouse Eksklusif",
      location: "Lokasi 4",
      price: 2200000,
    },

    {
      imageSrc: "/home7.jpg",
      title: "Townhouse Eksklusif",
      location: "Lokasi 5",
      price: 1500000,
    },

    {
      imageSrc: "/home8.jpg",
      title: "Townhouse Eksklusif",
      location: "Lokasi 6",
      price: 2500000,
    },
  ];

  return (
    <section className="gap-10 md:my-28 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Properti Terbaru
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map(({ imageSrc, title, location, price }, i) => (
            <Card key={i}>
              <CardHeader>
                <Image
                  alt={`Rumah ${i + 1}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                  height={200}
                  src={imageSrc}
                  width={400}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{title}</CardTitle>
                <p className="text-muted-foreground py-2">
                  <MapPin className="inline mr-2 size-6" />
                  {location}
                </p>
                <p className="mt-2">Rp {price.toLocaleString()}.000.000</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Link href="/properti">Lihat Detail</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
