import { Link } from "react-router-dom";
import s1 from "./assets/Images/Service1.png";
import s2 from "./assets/Images/Service2.jpg";
import s3 from "./assets/Images/Service3.png";
import s4 from "./assets/Images/Service4.png";
import s5 from "./assets/Images/Service5.png";
import s6 from "./assets/Images/Service6.jpg";
import s7 from "./assets/Images/Service7.jpg";
import s8 from "./assets/Images/Service8.png";

export default function Services() {
  return (
    <div className="target2 h-full block">
      <h1 className="text-center font-normal sm:text-6xl h-1/12 text-4xl underline decoration-2 underline-offset-[16px] md:py-14 pt-6">
        Geschäftsbereiche
      </h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 gap-2 h-11/12 py-6 px-10 mx-auto place-items-center container">
        {/* <Link to="/service1"> */}
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s1} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Hochspannungskabel <br /> – Erdkabel & Freileitungen
          </p>
        </div>
        {/* </Link> */}
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s2} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Tiefe und Flache
            <br /> Geothermie & Speicher
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s3} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            UAV Monitoring & Infrastruktur <br /> GIS-Modellierung
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s4} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Innovatives & <br /> Nachhaltiges Materialdesign
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s5} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Standorterkundung <br /> & Bodenkunde
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s6} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Laboranalysen – <br />
            Boden, Fels & Beton
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s7} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Geotechnik – Entwurf / <br /> Konstruktion / Prüfung
          </p>
        </div>
        <div className="border-2 xl:h-5/6 w-full my-6 bg-[#272829] text-zinc-200 shadow-md rounded-md flex flex-col place-items-center content-center ">
          <img className="w-full h-3/4" loading="lazy" src={s8} alt="service" />
          <p className="text-center h-1/4 my-auto lg:text-lg text-base font-normal p-4">
            Komplexe Numerische <br /> Simulationen & KI
          </p>
        </div>
      </div>
    </div>
  );
}
