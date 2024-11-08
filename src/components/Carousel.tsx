import React from 'react'
import CarouselCard from './CarouselCard'

export default function Carousel() {
  return (
    <div className='min-h-[200px] relative flex items-center overflow-y-auto p-3 whitespace-nowrap space-x-4'>
        <CarouselCard />
    </div>
  )
}
