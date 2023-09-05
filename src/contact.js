import Cform from './Cform';
import con from './assets/kontakt.jpg';
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
          
        <div className='bg-zinc-950'>
            <img src={con} loading='lazy' className='sm:h-full h-[35vh] object-cover' alt='contact'/>


            <div className="text-center grid xl:grid-cols-3 text-xl gap-5 text-stone-50 sm:px-48 container mx-auto py-16  place-items-center">
                <div className="">
                    <p>GeoAnalysis Engineering GmbH,<br/> Schauenburgerstrasse 116, <br/>Kiel 24118 </p>
                </div>
                <div className="">
                    <p>Telefon: +49 431 53032960</p>
                    <p>Fax: +49 431 5606295</p>
                </div>
                <div className="">
                    <p>Email: info@geoanalysis-engineering.de</p>
                </div>
            </div>

                {/* <Cform/> */}
          
        </div>

    )
}