'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, BedDouble, Bath, Square, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const properties = [
  { id: 1, name: "Villa Mewah", price: 2500000000, location: "Jakarta Selatan", bedrooms: 5, bathrooms: 4, area: 500, image: "/home3.jpg"   },
  { id: 2, name: "Apartemen Modern", price: 1800000000, location: "Jakarta Pusat", bedrooms: 3, bathrooms: 2, area: 120, image: "/home2.jpg" },
  { id: 3, name: "Rumah Keluarga", price: 3200000000, location: "Tangerang", bedrooms: 4, bathrooms: 3, area: 250, image: "/home3.jpg" },
  { id: 4, name: "Townhouse Eksklusif", price: 4000000000, location: "Bekasi", bedrooms: 4, bathrooms: 4, area: 300, image: "/home4.jpg" },
  { id: 5, name: "Studio Minimalis", price: 800000000, location: "Jakarta Barat", bedrooms: 1, bathrooms: 1, area: 35, image: "/home1.jpg" },
  { id: 6, name: "Rumah Pinggir Kota", price: 1500000000, location: "Depok", bedrooms: 3, bathrooms: 2, area: 150, image: "/home6.jpg" },
]

export default function PropertyExplorer() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 5000000000])
  const [propertyType, setPropertyType] = useState('all')
  const [bedrooms, setBedrooms] = useState('any')

  const filteredProperties = properties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    property.price >= priceRange[0] && property.price <= priceRange[1] &&
    (propertyType === 'all' || property.name.toLowerCase().includes(propertyType)) &&
    (bedrooms === 'any' || property.bedrooms === parseInt(bedrooms))
  )

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header/>
      <main className="flex-1 pt-4">
        <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              Jelajahi Properti
            </h1>
            <div className="grid gap-6 lg:grid-cols-4 mb-12">
              <div className="lg:col-span-3">
                <Input
                  placeholder="Cari properti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Search className="mr-2 h-4 w-4" /> Cari
              </Button>
            </div>
            <div className="grid gap-6 lg:grid-cols-4 mb-12">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipe Properti</label>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih tipe properti" />
                  </SelectTrigger>
                  <SelectContent >
                    <SelectItem value="all">Semua</SelectItem>
                    <SelectItem value="rumah">Rumah</SelectItem>
                    <SelectItem value="apartemen">Apartemen</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className=" text-sm font-medium text-gray-700 mb-1">Jumlah Kamar Tidur</label>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jumlah kamar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Bebas</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Rentang Harga (dalam Miliar Rupiah)</label>
                <Slider
                  min={0}
                  max={5000000000}
                  step={100000000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="w-full bg-white"
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{(priceRange[0] / 1000000000).toFixed(1)} M</span>
                  <span>{(priceRange[1] / 1000000000).toFixed(1)} M</span>
                </div>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Image
                      src={property.image}
                      alt={property.name}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">{property.name}</h3>
                    <p className="text-gray-600 mb-2">
                      <MapPin className="inline-block mr-1" size={16} />
                      {property.location}
                    </p>
                    <p className="text-black font-semibold mb-2">
                      Rp {property.price.toLocaleString()}
                    </p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span><BedDouble className="inline-block mr-1" size={16} /> {property.bedrooms} Kamar</span>
                      <span><Bath className="inline-block mr-1" size={16} /> {property.bathrooms} K. Mandi</span>
                      <span><Square className="inline-block mr-1" size={16} /> {property.area} m²</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      <Link href={"/detail"}>Lihat Detail</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}