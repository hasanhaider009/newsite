import Home from './Home';
import  Impressum  from './Impressum';
import './App.css';
import Navbar from './navbar';

import FooterSitemapLinks from './footer';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './contact';
import About2 from './about2';
import Services from './services';
import ScrollToTop from './stp';



function App() {
  return (  
    <div>
    
<Router>
<ScrollToTop />
    <Navbar />
      <Routes>
      
      <Route exact path='/' element={ <Home/> }/>
      <Route path='/impressum' element={<Impressum/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<div className='pt-8'><About2/></div>}/>
      <Route path='/services' element={<div className='pt-8 bg-[#D8D9DA]'><Services/></div>}/>S
      <Route path='/home' element={<Home/>}/>

      </Routes>
    <FooterSitemapLinks/>
</Router>

    </div>
    
    
  );
}

export default App;
