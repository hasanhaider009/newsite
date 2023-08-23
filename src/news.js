'use client';
import n1 from './assets/news1.png';
import n2 from './assets/news2.png';
import n3 from './assets/news3.png';
import { Carousel } from 'flowbite-react';
import DismissableModal from './newsModals/modal';
import DismissableModal2 from './newsModals/modal2';
import DismissableModal3 from './newsModals/modal3';
import DismissableModal4 from './newsModals/modal4';


export default function News(){
    return(
        <div className="sm:h-[100vh] h-[140vh] target2">
        <h2 className="text-center font-normal max-h-[20vh] text-black pb-4 pt-16 sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] md:pt-16 pt-8">News</h2>
        <Carousel className='sm:max-h-[60vh] h-[120vh] sm:my-20'>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-1 mx-auto place-items-center container'>
            <div className='border-2 my-6 mx-16 sm:h-[70vh] sm:w-auto w-[70vw] h-[50vh] sm:py-10  bg-white'>
                <img src={n1} alt='service'/>
                <p className='text-center min-[1800px]:text-2xl mx-8 py-0 font-semibold min-[1800px]:py-10'>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung GIS-Modellierung</p>
                <div className='container  justify-items-center flex flex-col place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>
            <div className='border-2 my-6 mx-16 sm:h-[70vh] sm:w-auto w-[70vw] h-[50vh] sm:py-10  bg-white'>
                <img src={n2} alt='service'/>
                <p className='text-center min-[1800px]:text-2xl mx-8 py-0 font-semibold min-[1800px]:py-4'>Bewertung der Auswirkungen der betriebsbedingten Bodenerwärmung auf den Stoff-, Wasser- und Wärmehaushalt im Hinblick auf das „Versuchsfeld Umspannwerk Wolmirstedt“ in Sachsen-Anhalt.</p>
                <div className='container  justify-items-center flex flex-col place-items-center pt-0'>

                <DismissableModal2/>
                </div>
            </div>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-1 mx-auto place-items-center container'>
            <div className='border-2 my-6 mx-16 sm:h-[70vh] sm:w-auto w-[70vw] h-[50vh] sm:py-10  bg-white'>
                <img src={n1} alt='service'/>
                <p className='text-center min-[1800px]:text-2xl mx-8 py-0 font-semibold min-[1800px]:py-10'>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung</p>
                <div className='container  justify-items-center flex flex-col place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>

            <div className='border-2 my-6 mx-16 sm:h-[70vh] sm:w-auto w-[70vw] h-[50vh] sm:py-10  bg-white'>
                <img src={n3} alt='service'/>
                <p className='text-center min-[1800px]:text-2xl mx-8  py-0 font-semibold min-[1800px]:py-10'>Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien durch fortschrittliche
                Hybrid-BEM-FEM</p>
                <div className='container  justify-items-center flex flex-col place-items-center pt-4'>

                <DismissableModal3/>
                </div>
            </div>
        </div>

        </Carousel>



        </div>
    )
}