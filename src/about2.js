import about from './assets/UberUns1.JPG';
import { useEffect } from 'react';

export default function About2(){
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
    return(
        <div id="about" className="max-h-fit  bg-no-repeat bg-cover bg-fixed text-white target1">
        <h2 className="text-center font-normal pb-4 sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] xl:pt-16 pt-8">Über uns</h2>
        <div className='rounded-lg mt-10 flex flex-nowrap xl:px-16 px-6 md:flex-row flex-col justify-center content-center  md:pb-16'>
                <img className='inline-block border-slate-800 justify-center md:max-h-[40vh] md:max-w-[50vw] aspect-video xl:order-1 order-1 xl:my-12 my-4' src={about} alt='vision'/>
            <div className="text-sm xl:text-xl lg:text-lg md:text-base font-normal  block sm:pl-8 w-auto md:max-w-[50vw] xl:order-1 order-2 justify-center content-center pb-6 flex flex-col">
            <p>
                    Unsere Kompetenzen liegen in der Analyse und Modellierung
                    von Hochspannungs- und Höchstspannungs-Erdkabeln,
                    geothermischen Systemlösungen zur Energie-, Wärmegewinnung
                    und -speicherung, geotechnische und bodenkundliche
                    Standortuntersuchungen, Beratungen und Laboruntersuchungen,
                    Laboranalysen zu thermischen, hydraulischen und mechanischen
                    Untersuchungen von Boden- und Felsmaterialien,
                    Geotechnisches Design bei Baumaßnahmen, komplexe numerische
                    Modelle auch unter Nutzung künstlicher Intelligenz,
                    Optimierung und Design von Geomaterialien, Einsatz von
                    Drohnenbefliegungen und GIS-Monitoring.
                  </p>
                  <p className='indent-8 mt-5'>
                    Das Team von GeoAnalysis-Engineering bestehend aus
                    hochmotivierten Ingenieuren, Software-Entwicklern,
                    Wissenschaftlern und Technikern, strebt mit Kompetenz,
                    Spitzentechnologie und Innovationen danach fortschrittliche
                    technische Lösungen und nachhaltige Anwendungen mit einem
                    echten Mehrwert für die Kunden von GAE anzubieten.
                  </p>
                  </div>
                  
        </div>
        </div>
    )
}