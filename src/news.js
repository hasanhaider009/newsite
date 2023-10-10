"use client";
import n1 from "./assets/news1.png";
import n2 from "./assets/news2.png";
import n3 from "./assets/news3.png";
import n4 from "./assets/news4.jpg";
import DismissableModal from "./newsModals/modal";
import DismissableModal2 from "./newsModals/modal2";
import DismissableModal3 from "./newsModals/modal3";
import DismissableModal4 from "./newsModals/modal4";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

export default function News() {
  return (
    <div className="h-fit target2 pb-10">
      <h2 className="text-center font-normal max-h-[20vh] sm:pb-10 pb-2 text-black sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] md:pt-16 pt-4">
        News
      </h2>
      <Swiper
        className="h-fit container mx-auto"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="sm:px-20 px-12">
          <div className="border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
            <a href={n2} target="_blank">
              <img
                className="sm:aspect-video aspect-[4/3]"
                loading="lazy"
                src={n2}
                alt="service"
              />
            </a>
            <p className="text-center h-1/4 my-auto lg:text-lg text-sm font-normal p-4">
              Analyse von Umweltauswirkungen infolge eingeerdeter Hoch- und
              Höchstspannungskabel unter natürlichen Bedingungen
            </p>
            <div className="container  justify-items-center flex flex-col flex-nowrap h-1/5 place-items-center pb-4">
              <DismissableModal2 />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sm:px-20 px-12">
          <div className="border-2 w-fit my-6 max-h-fit bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
            <a href={n1} target="_blank">
              <img
                className="sm:aspect-video aspect-[4/3]"
                loading="lazy"
                src={n1}
                alt="service"
              />
            </a>
            <p className="text-center h-1/4 my-auto lg:text-lg text-sm font-normal p-4">
              Horizontale Erdwärmetauscher zum
              <br />
              Heizen und Kühlen – numerische Modellierung und Optimierung
            </p>
            <div className="container  justify-items-center flex flex-col flex-nowrap h-1/5 place-items-center pb-4">
              <DismissableModal />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sm:px-20 px-12">
          <div className="border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
            <a href={n4} target="_blank">
              <img
                className="sm:aspect-video aspect-[4/3]"
                loading="lazy"
                src={n4}
                alt="service"
              />
            </a>
            <p className="text-center h-1/5 my-auto lg:text-lg text-sm font-normal p-4">
              Optimierung des Systems für erneuerbare Energien durch eine
              geeignete Auslegung und ein vollständig gekoppeltes Modell
            </p>
            <div className="container  justify-items-center flex flex-col flex-nowrap h-1/5 place-items-center pb-4">
              <DismissableModal4 />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="sm:px-20 px-12">
          <div>
            <div className="border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
              <a href={n3} target="_blank">
                <img
                  className="sm:aspect-video aspect-[4/3]"
                  src={n3}
                  alt="service"
                />
              </a>
              <p className="text-center h-1/5 my-auto lg:text-lg text-sm font-normal p-4">
                Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien
                durch fortschrittliche Hybrid-BEM-FEM
              </p>
              <div className="container  justify-items-center flex flex-col flex-nowrap place-items-center h-1/5 pb-4">
                <DismissableModal3 />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
