'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, BedDouble, Bath, Square, Car, ChevronLeft, ChevronRight, Check } from "lucide-react"
import Image from "next/image"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PropertyDetail() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/home1.jpg",
    "/home2.jpg",
    "/home3.jpg",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header/>
      <main className="flex-1 pt-0">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <Image
                    src={images[currentImage]}
                    alt={`Gambar Rumah ${currentImage + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex space-x-2 overflow-x-auto py-2">
                  {images.map((src, index) => (
                    <Image
                      key={index}
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className={`rounded-lg cursor-pointer transition-opacity duration-300 ${
                        currentImage === index ? 'opacity-100 ring-2 ring-blue-600' : 'opacity-60 hover:opacity-100'
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rumah Keluarga Nyaman</h1>
                  <p className="text-gray-500 mt-2">
                    <MapPin className="inline-block mr-1" size={16} />
                    Jl. Contoh No. 123, Tangerang
                  </p>
                </div>
                <div className="flex items-center space-x-4 text-lg">
                  <span className="flex items-center">
                    <BedDouble className="mr-2" size={20} /> 4 Kamar Tidur
                  </span>
                  <span className="flex items-center">
                    <Bath className="mr-2" size={20} /> 3 Kamar Mandi
                  </span>
                  <span className="flex items-center">
                    <Square className="mr-2" size={20} /> 200 m²
                  </span>
                  <span className="flex items-center">
                    <Car className="mr-2" size={20} /> 2 Parkir
                  </span>
                </div>
                <p className="text-2xl font-semibold text-blue-600">Rp 3.200.000.000</p>
                <Button size="lg" className="w-full md:w-auto">Hubungi Agen</Button>
              </div>
            </div>
            <Tabs defaultValue="deskripsi" className="mt-12">
              <TabsList>
                <TabsTrigger value="deskripsi">Deskripsi</TabsTrigger>
                <TabsTrigger value="fasilitas">Fasilitas</TabsTrigger>
                <TabsTrigger value="lokasi">Lokasi</TabsTrigger>
              </TabsList>
              <TabsContent value="deskripsi" className="mt-4">
                <Card>
                  <CardContent className="prose max-w-none pt-6">
                    <p>
                      Rumah keluarga yang nyaman ini terletak di lingkungan yang tenang dan aman di Tangerang. 
                      Dengan 4 kamar tidur dan 3 kamar mandi, rumah ini ideal untuk keluarga besar atau mereka yang sering menerima tamu.
                    </p>
                    <p>
                      Desain modern dengan sentuhan klasik menciptakan suasana yang hangat dan mengundang. 
                      Ruang tamu yang luas terhubung langsung dengan ruang makan dan dapur, menciptakan area yang sempurna untuk berkumpul keluarga.
                    </p>
                    <p>
                      Taman belakang yang asri menawarkan ruang outdoor yang sempurna untuk bersantai atau mengadakan acara barbecue bersama keluarga dan teman.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="fasilitas" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> AC di setiap kamar</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Dapur modern</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Taman belakang</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Sistem keamanan 24 jam</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Kolam renang</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Area bermain anak</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Ruang kerja</li>
                      <li className="flex items-center"><Check className="mr-2 text-green-600" /> Garasi untuk 2 mobil</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="lokasi" className="mt-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.49379808766!2d106.63092802326198!3d-6.178315900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8e853d2e38d%3A0x301576d14feb9c0!2sTangerang%2C%20Kota%20Tangerang%2C%20Banten!5e0!3m2!1sid!2sid!4v1652345678901!5m2!1sid!2sid"
                        allowFullScreen
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="flex items-center"><MapPin className="mr-2" size={16} /> Jl. Contoh No. 123, Tangerang</p>
                      <p>Lokasi strategis dekat dengan:</p>
                      <ul className="list-disc list-inside pl-4 space-y-1">
                        <li>Pusat perbelanjaan (5 menit)</li>
                        <li>Sekolah internasional (10 menit)</li>
                        <li>Rumah sakit (15 menit)</li>
                        <li>Akses tol (5 menit)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}