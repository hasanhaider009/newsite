import vision from './assets/GAE_Vision.JPEG';

export default function About(){
    return(
        <div className="h-screen bg-no-repeat bg-cover bg-fixed target1 text-[#D8D9DA] pb-12">
            <h2 className="text-center  font-normal pb-4 sm:text-6xl text-4xl md:pt-16 pt-8 underline decoration-2 underline-offset-[16px]">Unsere Vision</h2>

            <div className='rounded-lg mt-12 flex md:flex-row flex-col content-center items-center md:px-16 px-6'>
            <p className="text-sm md:text-xl font-normal text-justify inline-block md:pr-8 md:w-3/6 md:order-1 order-2">
                    Unsere Vision ist es, auf unseren Arbeitsfeldern eine
                    nachhaltige und widerstandsfähige Infrastruktur in
                    intelligent durchdachten urbanen Gebieten zu planen. Dabei
                    wollen wir den derzeitigen aktuellen Stand der Technik und
                    Wissenschaft kreativ einsetzen, um Potentiale für neue Wege
                    und Lösungen von smarten Geomaterialien, erneuerbaren
                    Energie- und Wärmelösungen, Transformation vollständiger
                    Umwelt-Infrastruktur-Systeme in komplexe Simulationsmodelle
                    und weiteren innovativen Lösungsstrategien auch unter
                    Nutzung künstlicher Intelligenz zu erschließen, um die
                    besten ingenieurtechnischen Lösungen zur erzielen. Unsere
                    Herangehensweise betont nachhaltige und belastbare
                    Ingenieurplanung und -entwicklung, welche die
                    Herausforderungen durch den Klimawandel oder Umweltschutz in
                    den Lösungen berücksichtigen. Das Ziel sind erschwingliche
                    und saubere technische Lösungen, welche auch zukünftige
                    Bedürfnisse voraussehen.
                  </p>
                       <div className='inline-block h-full border-2 border-slate-800 justify-center md:w-3/6 md:order-1 order-1 md:my-12 my-4'>
                  <img src={vision} alt='vision'/>
                  </div>
                  </div>
        </div>
    )
}