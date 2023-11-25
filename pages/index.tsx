import { Banner, Header, Carousel } from "@/components"
import React from "react"

export default function Index() {
  return (
    <div className="mb-6">
      <Header />
      <Banner />
      <div className="w-full flex flex-col justify-center items-center py-12">
        <h1 className="text-2xl font-medium">NEW ARRIVALS</h1>
        <span className="w-16 h-0.5 bg-primary-1 mt-4"></span>
      </div>
      <Carousel />
    </div>
  )
}
