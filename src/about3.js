import vision from './assets/about3.jpg';

export default function About3(){
    return(
        <div className="h-screen bg-no-repeat bg-cover bg-fixed target1 text-[#D8D9DA] pb-12">
            <h2 className="text-center  font-normal pb-2 sm:text-6xl text-4xl md:pt-16 pt-8 underline decoration-2 underline-offset-[16px]">Highlights</h2>

            <div className='rounded-lg mt-8 flex md:flex-row flex-col content-center items-center md:px-16 px-6'>
            <div className="text-sm md:text-xl mt-4 font-normal text-justify inline-block md:pr-8 md:w-3/6 md:order-1 order-2">
            <p>
                    GAE bietet vollständig gekoppelte
                    thermo-hydromechanisch-diffusive Simulationen für
                    eingeerdete Hochspannungskabel inklusive der
                    Berücksichtigung der Randbedingungen aus Klima, Pflanzen,
                    zeitlichen Änderungen sowie Auswirkungen auf den
                    landwirtschaftlichen Ertrag.
                  </p>
                  
                  <p >
                   GAE bietet ein thermisch stabiles Materialdesign für
                    Erdkabel und Rohre an. Ausgangpunkt ist dabei, dass durch
                    die Erkundung detektierte Bodenmaterial und dessen
                    Bodenmanagement.
                  </p>
                  <p>
                    Mit Hilfe von UAV’s wird das Luftmonitoring mit den
                    numerischen Modellen des Untergrunds gekoppelt, so dass
                    vollständige Informations-basierte Modelle mit Hilfe der
                    Numerischen Simulationenüber den Lebenszyklus (digitale
                    Zwillinge) betrieben werden können.
                  </p>

                  <p>
                    Die Standorterkundung als auch Laborversuche werden mit
                    modernsten Methoden, wie GIS und KI, für die Auswertung mit
                    herangezogen.
                  </p>
                  <p>
                    Neben klassischen Bemessungen in geotechnischen
                    Fragestellungen, werden durch Einsatz von fortschrittlichen
                    numerischen Methoden, in Statik und Dynamik der Geotechnik,
                    komplexe Aufgaben gelöst.{" "}
                  </p>
                  </div>
                       <div className='inline-block h-full border-2 border-slate-800 justify-center md:w-3/6 w-5/6 md:order-1 order-1 md:my-12 my-0'>
                  <img className='w-full' src={vision} alt='vision'/>
                  </div>
                  </div>
        </div>
    )
}