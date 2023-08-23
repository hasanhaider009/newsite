import about from './assets/UberUns1.JPG';

export default function About2(){
    return(
        <div id="about" className="h-screen bg-no-repeat bg-cover bg-fixed text-white target1">
        <h2 className="text-center font-normal pb-4 pt-16 sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] md:pt-16 pt-8">Über uns</h2>
        <div className='rounded-lg mt-12 sm:flex flex-wrap md:px-16 px-6 md:flex-row flex-col'>
                <img className='inline-block W-full aspect-video border-slate-800 justify-center md:w-3/6 md:order-1 order-1 md:my-12 my-4' src={about} alt='vision'/>
            <div className="text-sm md:text-xl font-normal text-justify md:w-3/6 inline-block md:pl-8 md:w-3/6 md:order-1 order-2 justify-center content-center flex flex-col">
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