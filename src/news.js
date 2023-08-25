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
        <div className="h-fit target2 pb-10">
        <h2 className="text-center font-normal max-h-[20vh] pb-10 text-black sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] md:pt-16 pt-8">News</h2>
        <Carousel className='lg:h-[80vh] h-[70vh] sm:h-[50vh] w-full sm:pb-2 pb-10'>
        <div className='grid grid-cols-2  mx-auto place-items-center max-h-full container my-auto'>
            <div className='border-2  lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n1} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3 font-semibold '>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung GIS-Modellierung</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>
            <div className='border-2 sm:mt-0 mt-4 sm:block hidden lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n2} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3  font-semibold '>Bewertung der Auswirkungen der betriebsbedingten Bodenerwärmung auf den Stoff-, Wasser- und Wärmehaushalt im Hinblick auf das „Versuchsfeld Umspannwerk Wolmirstedt“ in Sachsen-Anhalt.</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal2/>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2  mx-auto place-items-center max-h-full container my-auto'>
            <div className='border-2  lg:mx-16 mx-6 sm:block hidden sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n1} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3 font-semibold '>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung GIS-Modellierung</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>
            <div className='border-2 sm:mt-0 mt-4 lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n2} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3  font-semibold '>Bewertung der Auswirkungen der betriebsbedingten Bodenerwärmung auf den Stoff-, Wasser- und Wärmehaushalt im Hinblick auf das „Versuchsfeld Umspannwerk Wolmirstedt“ in Sachsen-Anhalt.</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal2/>
                </div>
            </div>
        </div>


        

        <div className='grid grid-cols-2  mx-auto place-items-center max-h-full container my-auto'>
            <div className='border-2  lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n1} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3  font-semibold '>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>

            <div className='border-2 sm:mt-0 mt-4 sm:block hidden lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n3} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3   font-semibold '>Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien durch fortschrittliche
                Hybrid-BEM-FEM</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal3/>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-2  mx-auto place-items-center max-h-full container my-auto'>
            <div className='border-2  lg:mx-16 mx-6 sm:block hidden sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n1} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3  font-semibold '>Horizontale Erdwärmetauscher zum Heizen und Kühlen – numerische Modellierung und Optimierung</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal/>
                </div>
            </div>

            <div className='border-2 sm:mt-0 mt-4  lg:mx-16 mx-6 sm:col-span-1 col-span-2 h-full pb-10 bg-white shadow-md rounded-md'>
                <img className='' src={n3} alt='service'/>
                <p className='text-center xl:text-xl sm:text-sm lg:mx-24 mx-8 my-4 line-clamp-3   font-semibold '>Standort-Stadt-Interaktionsmodellierung für Erdbebenszenarien durch fortschrittliche
                Hybrid-BEM-FEM</p>
                <div className='container  justify-items-center flex flex-col flex-nowrap place-items-center pt-4'>

                <DismissableModal3/>
                </div>
            </div>
        </div>
        

        </Carousel>



        </div>
    )
}