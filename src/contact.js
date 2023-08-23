import Cform from './Cform';
import con from './assets/kontakt.jpg';
import { useEffect } from 'react';
import Button1 from './file';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
          
        <div className='bg-zinc-950'>
            <img src={con} alt='contact'/>


            <div className="text-center grid sm:grid-cols-3 text-xl gap-0 text-sm text-stone-50 sm:px-48 container mx-auto py-16 items-center place-items-center ">
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

          
        </div>

    )
}