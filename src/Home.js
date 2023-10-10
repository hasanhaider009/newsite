import DefaultCarousel from "./carousel";
import About from "./about";
import About2 from "./about2";
import Network from "./network";
import About3 from "./about3";
import Services from "./services";
import News from "./news";
import ScrollToTop from "./stp";
import Sectors from "./sectors";

export default function Home() {
  <ScrollToTop />;
  return (
    <div>
      <DefaultCarousel />
      {/* <Sectors /> */}

      <Services />
      <About3 />
      <News />
    </div>
  );
}
