import DefaultCarousel from './carousel';
import About from './about';
import About2 from './about2';
import Network from './network';
import About3 from './about3';
import Services from './services';
import News from './news';
import { useEffect } from 'react';

export default function Home(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <>
    
    <DefaultCarousel/>
    
    <About/>
    <Network/>
    <About2/>
    
    
    <Services/>
    <About3/>
    <News/>
        </>
    )
}