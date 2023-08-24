'use client';

import { Carousel } from 'flowbite-react';
import main2 from './assets/landing1.jpg'
import main3 from './assets/landing2.jpg'
import main4 from './assets/landing3.JPG'

export default function DefaultCarousel() {
  return (
    <div className='h-screen flex flex-nowrap'>
    <Carousel className='lg:w-screen md:h-screen h-[30vh] rounded-none inset-x-0 lg:top-0 top-0'>
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
    <div className="inline-block bannertext md:p-2 pb-10 md:inset-x-0 md:bottom-0 mt-80 px-6 absolute justify-center">

                
                  <h1
                   className="text-center text-white font-base pb-4 lg:text-6xl text-4xl"
                
                  >
                  Willkommen bei GAE
                  
                  </h1>
                  <p
                   className="text-center text-white pb-8 lg:text-3xl text-2xl"
                  >
                  Kompetenz und Innovation
                  </p>
                  <p className="text-sm lg:text-lg text-white text-center lg:mb-6 xl:px-56 text-justify">GAE erbringt Dienstleistungen und entwickelt Lösungen in den Arbeitsfeldern:

Erdkabel & Freileitungen – Geothermie, Wärme & Kälte – Standorterkundung, geotechnische und bodenkundliche Laboranalysen & Baubegleitung – Geotechnik – UAV Monitoring & Infrastruktur GIS-Modellierung und Numerische Simulationen & KI.

GAE arbeitet auf den Gebieten der Geotechnik, Geophysik, Bodenkunde, Geo-und Hydrologie und Geoinformatik unter Einbeziehung von Simulationen, GIS und KI. GAE ist zudem spezialisiert, ausgewiesen und hat Erfahrung zur Durchführung von großen und komplexen numerischen Modellsimulationen für Machbarkeitsstudien, Vorbemessung, Umweltanalysen als auch Bemessung und Design in den benannten Arbeitsfeldern.</p>
                  </div> 
                  </div>
  )
}


