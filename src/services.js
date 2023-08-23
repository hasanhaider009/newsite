import s1 from './assets/Images/Service1.png'
import s2 from './assets/Images/Service2.jpg'
import s3 from './assets/Images/Service3.png'
import s4 from './assets/Images/Service4.png'
import s5 from './assets/Images/Service5.png'
import s6 from './assets/Images/Service6.jpg'
import s7 from './assets/Images/Service7.jpg'
import s8 from './assets/Images/Service8.png'


export default function Services(){
    return(
        <div className='target2 h-full '>
        <h1 className='text-center font-normal sm:text-6xl h-1/12 text-4xl underline decoration-2 underline-offset-[16px] md:py-14 pt-6'>Geschäftsbereiche</h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 gap-1 h-11/12 py-6 px-10 mx-auto place-items-center container">
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s1} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Hochspannungskabel <br /> – Erdkabel & Freileitungen</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s2} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Tiefe und Flache<br /> Geothermie  & Speicher</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s3} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>UAV Monitoring & Infrastruktur <br /> GIS-Modellierung</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s4} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Innovatives & <br /> Nachhaltiges Materialdesign</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s5} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Standorterkundung <br /> & Bodenkunde</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img src={s6} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Laboranalysen – <br />Boden,  Fels & Beton</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img className='aspect-[4/3]' src={s7} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Geotechnik – Entwurf / <br /> Konstruktion / Prüfung</p>
        </div>
        <div className='border-2 w-80 h-80 my-6 bg-white'>
            <img className='aspect-[4/3]' src={s8} alt='service'/>
            <p className='text-center text-lg font-semibold p-4'>Komplexe Numerische <br /> Simulationen & KI</p>
        </div>
        


        </div>

        </div>
    )
}