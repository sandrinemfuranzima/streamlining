import './App.css'
import Navigation from './component/Navigation'
import About from './component/About/About'
import Home from './component/Home'
import Help from './component/Help'
import Authenticate from './component/Authenticate'
import { Routes, Route } from 'react-router-dom'
import Services from './component/Services'
import ContactMe from './component/ContactMe'
import Registration from './component/Registration'

function App() {
  return (
    <div >
      <div>
        <Navigation/>
      <Routes>    
         <Route exact path='/' element={<Home />} />
         {/* <Route path='/services' element={<Services/>} /> */}
          <Route path='/contact' element={<ContactMe/>} />
         <Route path='/help' element={<Help/>} />
        <Route path='/' element={<Authenticate/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/registration' element={<Registration/>} />
     </Routes>
     </div>
    </div>
  );
}

export default App;
