"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import main2 from "./assets/landing1.jpg";
import main3 from "./assets/landing2.jpg";
import main4 from "./assets/landing3.JPG";

//   const buttons = document.querySelectorAll("[data-carousel-button]")

//   buttons.forEach(button => {
//     button.addEventListener("click", () => {
//       const offset = button.dataset.carouselButton === "next" ? 1 : -1
//       const slides = button
//       .closest("[data-carousel]")
//       .querySelector("[data-slides]")

//       const activeSlide = slides.querySelector("[data-active]")
//       let newIndex = [...slides.children].indexOf(activeSlide) + offset

//       if (newIndex < 0) newIndex = slides.children.length - 1
//       if(newIndex>= slides.children.length) newIndex = 0

//       slides.children[newIndex].dataset.active = true
//       delete activeSlide.dataset.active
//     })
//   })

// }
export default function DefaultCarousel() {
  return (
    <div className="h-fit block">
      <Swiper
        className=" lg:h-screen md:h-[60vh] sm:h-[50vh] h-[30vh] rounded-none inset-x-0 lg:top-0 top-0 mySwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        loop={true}
        slidesPerView={2}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="h-full">
          <img className="h-full w-full" alt="..." src={main3} />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img className="h-full w-full" alt="..." src={main4} />
        </SwiperSlide>

        <SwiperSlide className="h-full">
          <img className="h-full w-full" alt="..." src={main2} />
        </SwiperSlide>
      </Swiper>
      <div className="bannertext xl:flex-none flex flex-col flex-nowrap md:p-2 sm:pb-10 inset-x-0 sm:bottom-0 pt-2 md:h-[40vh] sm:h-[50vh] lg:h-[280px] xl:h-[45vh] h-[480px] px-6 lg:absolute justify-center z-20">
        <h1 className="text-center text-white inline-block font-base pb-2 xl:text-6xl lg:text-4xl text-3xl sm:pt-16 md:pt-8 md:mx-32">
          Willkommen bei GAE
        </h1>
        <p className="text-center text-white pb-4 lg:text-2xl md:text-xl text-xl xl:text-xl">
          Kompetenz und Innovation
        </p>
        <p className="max-[330px]:text-xs text-sm sm:text-base xl:text-lg text-white sm:mb-6 xl:px-36 lg:px-8 sm:pb-0 lg:pb-10 sm:text-justify text-center">
          GAE erbringt Dienstleistungen und entwickelt Lösungen in den
          Arbeitsfeldern: Erdkabel & Freileitungen – Geothermie, Wärme & Kälte –
          Standorterkundung, geotechnische und bodenkundliche Laboranalysen &
          Baubegleitung – Geotechnik – UAV Monitoring & Infrastruktur
          GIS-Modellierung und Numerische Simulationen & KI. GAE arbeitet auf
          den Gebieten der Geotechnik, Geophysik, Bodenkunde, Geo-und Hydrologie
          und Geoinformatik unter Einbeziehung von Simulationen, GIS und KI. GAE
          ist zudem spezialisiert, ausgewiesen und hat Erfahrung zur
          Durchführung von großen und komplexen numerischen Modellsimulationen
          für Machbarkeitsstudien, Vorbemessung, Umweltanalysen als auch
          Bemessung und Design in den benannten Arbeitsfeldern.
        </p>
      </div>
    </div>
  );
}
