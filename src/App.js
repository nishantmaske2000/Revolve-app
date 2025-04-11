import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import About from './Components/About';
import Program from './Components/Program';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/program' element={<Program/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='/contact' element={<Contact/>}/>




     
   
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  );
}

export default App;
