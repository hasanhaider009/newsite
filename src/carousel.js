'use client';

import { Carousel } from 'flowbite-react';
import main2 from './assets/landing1.jpg'
import main3 from './assets/landing2.jpg'
import main4 from './assets/landing3.JPG'

export default function DefaultCarousel() {
  return (
    <div className='h-fit block'>
    <Carousel className=' lg:h-screen md:h-[60vh] sm:h-[50vh] h-[30vh] rounded-none inset-x-0 lg:top-0 top-0'>
      <img
      className='h-full'
        alt="..."
        src={main3}
      />
      <img
      className='h-full'
        alt="..."
        src={main4}
      />
      <img
      className='h-full'
        alt="..."
        src={main2}
      />
      
    </Carousel>
    <div className="inline-block bannertext xl:flex-none flex flex-col flex-nowrap md:p-2 sm:pb-10 inset-x-0 sm:bottom-0 pt-2 md:h-[40vh] sm:h-[50vh] lg:h-[45vh] h-[60vh] px-6 lg:absolute justify-center">

                
                  <h1
                   className="text-center text-white font-base pb-4 lg:text-6xl md:text-4xl text-3xl sm:pt-16 md:pt-16"
                
                  >
                  Willkommen bei GAE
                  
                  </h1>
                  <p
                   className="text-center text-white pb-8 lg:text-3xl md:text-2xl text-xl"
                  >
                  Kompetenz und Innovation
                  </p>
                  <p className="text-sm lg:text-base xl:text-lg text-white text-center sm:mb-6 xl:px-36 sm:pb-0 md:pb-10 text-justify">GAE erbringt Dienstleistungen und entwickelt Lösungen in den Arbeitsfeldern:

Erdkabel & Freileitungen – Geothermie, Wärme & Kälte – Standorterkundung, geotechnische und bodenkundliche Laboranalysen & Baubegleitung – Geotechnik – UAV Monitoring & Infrastruktur GIS-Modellierung und Numerische Simulationen & KI.

GAE arbeitet auf den Gebieten der Geotechnik, Geophysik, Bodenkunde, Geo-und Hydrologie und Geoinformatik unter Einbeziehung von Simulationen, GIS und KI. GAE ist zudem spezialisiert, ausgewiesen und hat Erfahrung zur Durchführung von großen und komplexen numerischen Modellsimulationen für Machbarkeitsstudien, Vorbemessung, Umweltanalysen als auch Bemessung und Design in den benannten Arbeitsfeldern.</p>
                  </div> 
                  </div>
  )
}


