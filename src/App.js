import Home from './Home';
import  Impressum  from './Impressum';
import './App.css';
import NavbarWithCTAButton from './navbar';

import FooterSitemapLinks from './footer';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from './contact';
import About2 from './about2';
import Services from './services';



function App() {
  return (  
    <div>
<Router>
    
    <NavbarWithCTAButton />
      <Routes>
      <Route exact path='/' element={ <Home/> }/>
      <Route path='/impressum' element={<Impressum/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About2/>}/>
      <Route path='/services' element={<Services/>}/>

      </Routes>
    <FooterSitemapLinks/>
</Router>

    </div>
    
    
  );
}

export default App;
