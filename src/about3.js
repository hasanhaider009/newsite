import vision from "./assets/about3.jpg";

export default function About3() {
  return (
    <div className="max-h-fit bg-no-repeat bg-cover bg-fixed text-[#D8D9DA] target1">
      <h2 className="text-center  font-normal sm:pb-4 sm:text-6xl text-4xl md:pt-16 pt-4 underline decoration-2 underline-offset-[16px]">
        Highlights
      </h2>

      <div className="rounded-lg sm:mt-10 mt-4 flex flex-nowrap xl:px-20 px-6 md:flex-row flex-col justify-center content-center  md:pb-16">
        <div className="text-sm xl:text-xl font-normal block sm:pr-8 w-auto md:max-w-[50vw] md:order-1 order-2 justify-center content-center md:pb-0 pb-6 flex flex-col md:text-left text-center">
          <p className="pt-2">
            GAE bietet vollständig gekoppelte thermo-hydromechanisch-diffusive
            Simulationen für eingeerdete Hochspannungskabel inklusive der
            Berücksichtigung der Randbedingungen aus Klima, Pflanzen, zeitlichen
            Änderungen sowie Auswirkungen auf den landwirtschaftlichen Ertrag.
          </p>

          <p className="pt-2">
            GAE bietet ein thermisch stabiles Materialdesign für Erdkabel und
            Rohre an. Ausgangpunkt ist dabei, dass durch die Erkundung
            detektierte Bodenmaterial und dessen Bodenmanagement.
          </p>
          <p className="pt-2">
            Mit Hilfe von UAV’s wird das Luftmonitoring mit den numerischen
            Modellen des Untergrunds gekoppelt, so dass vollständige
            Informations-basierte Modelle mit Hilfe der Numerischen
            Simulationenüber den Lebenszyklus (digitale Zwillinge) betrieben
            werden können.
          </p>

          <p className="pt-2">
            Die Standorterkundung als auch Laborversuche werden mit modernsten
            Methoden, wie GIS und KI, für die Auswertung mit herangezogen.
          </p>
          <p className="pt-2">
            Neben klassischen Bemessungen in geotechnischen Fragestellungen,
            werden durch Einsatz von fortschrittlichen numerischen Methoden, in
            Statik und Dynamik der Geotechnik, komplexe Aufgaben gelöst.{" "}
          </p>
        </div>
        <div className="inline-block border-slate-800 basis-2/3 justify-center md:max-h-[40vh] md:max-w-[50vw] aspect-video xl:order-1 order-1 xl:my-12 my-4">
          <img className="w-full" src={vision} alt="vision" />
        </div>
      </div>
    </div>
  );
}
