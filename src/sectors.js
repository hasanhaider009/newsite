import s2 from "./assets/Images/Service2.jpg";
import s8 from "./assets/Images/Service8.png";
import s6 from "./assets/Images/Service6.jpg";
import s7 from "./assets/Images/Service7.jpg";
export default function Sectors() {
  return (
    <>
      <h2 className="text-center font-normal text-white pb-4 sm:text-6xl text-4xl underline decoration-2 underline-offset-[16px] xl:pt-16 pt-8">
        Sectors
      </h2>
      <div className="grid sm:grid-cols-2 grid-flow-row sm:gap-8 gap-2 w-full container mx-auto h-fit p-8">
        <div>
          <img src={s2} alt="energy" className="w-full h-full"></img>
        </div>
        <div>
          <img src={s6} alt="energy" className="w-full h-full"></img>
        </div>
        <div>
          <img src={s7} alt="energy" className="w-full h-full"></img>
        </div>
        <div>
          <img src={s8} alt="energy" className="w-full h-full"></img>
        </div>
      </div>
    </>
  );
}
