import vision from './assets/GAE_Vision.JPEG';



export default function About(){
    
    return(
        <div className="max-h-fit bg-no-repeat bg-cover bg-fixed text-black text-[#D8D9DA] target2">
            <h2 className="text-center  font-normal pb-4 sm:text-6xl text-4xl md:pt-16 pt-8 underline decoration-2 underline-offset-[16px]">Unsere Vision</h2>

            <div className='rounded-lg mt-10 flex flex-nowrap xl:px-20 px-6 md:flex-row flex-col justify-center content-center  md:pb-16'>
            <p className="text-base xl:text-xl lg:text-lg md:text-base font-normal block sm:pr-8 w-auto md:max-w-[50vw] md:order-1 order-2 justify-center content-center md:pb-0 pb-6 flex flex-col">
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
                       <div className='inline-block border-slate-800 basis-2/3 justify-center md:max-h-[40vh] md:max-w-[50vw] aspect-video xl:order-1 order-1 xl:my-12 my-4'>
                  <img src={vision} alt='vision'/>
                  </div>
                  </div>
        </div>
    )
}