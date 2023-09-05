'use client';
import n1 from './assets/news1.png';
import n2 from './assets/news2.png';
import n3 from './assets/news3.png';
import n4 from './assets/news4.jpg';
import { Carousel } from 'flowbite-react';
import DismissableModal from './newsModals/modal';
import DismissableModal2 from './newsModals/modal2';
import DismissableModal3 from './newsModals/modal3';
import DismissableModal4 from './newsModals/modal4';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function News(){
    return(
        <div className="h-fit target2 pb-10 px-20">
        <h2 className="text-center font-normal max-h-[20vh] pb-10 text-black sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] md:pt-16 pt-8">News</h2>
        <Swiper
         className='h-fit container mx-auto'
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
          950: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        
        }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
        <div className='border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center '>
            <img className='aspect-video' loading='lazy' src={n1} alt='service'/>
            <p className='text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4'>Optimierung des Systems für erneuerbare Energien durch eine geeignete Auslegung und ein vollständig gekoppeltes Modell</p>
            <div className='container  justify-items-center flex flex-col flex-nowrap h-1/5 place-items-center pb-4'>

                <DismissableModal/>
                </div>
        </div>
                
            

        </SwiperSlide>

        <SwiperSlide>
        <div className='border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center '>
            <img className='aspect-video' loading='lazy' src={n4} alt='service'/>
            <p className='text-center h-1/5 my-auto lg:text-lg text-base font-normal p-4'>Optimierung des Systems für erneuerbare Energien durch eine geeignete Auslegung und ein vollständig gekoppeltes Modell</p>
            <div className='container  justify-items-center flex flex-col flex-nowrap h-1/5 place-items-center pb-4'>

                <DismissableModal4/>
                </div>
        </div>
                
            

        </SwiperSlide>
        
            <SwiperSlide>
            <div>
            <div className='border-2 w-fit my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center '>

                <img className='aspect-video' src={n3} alt='service'/>
                <p className='text-center h-1/5 my-auto lg:text-lg text-base font-normal p-4'>Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien durch fortschrittliche
                Hybrid-BEM-FEM</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center h-1/5 pb-4'>

                <DismissableModal3/>
                </div>
            </div>
            </div>
            </SwiperSlide>
                
       


        
        

        </Swiper>



        </div>
    )
}