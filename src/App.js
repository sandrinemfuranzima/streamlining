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
import Index from './admin/Index'
import Settingview from './admin/Settingview'
import Deviceview from './admin/Deviceview'
import Pendingdevice from './admin/Pendingdevice'
import Deevice from './admin/Deevice'
import Devicetransferform from './admin/Devicetransferform'
import Invoiceview from './admin/Invoiceview'
import Adddeviceview from './admin/Adddeviceview'
import Assigndeviceview from './admin/Assigndeviceview'
import Publishdeviceview from './admin/Publishdeviceview'
import Statusview from './admin/Statusview'
import Traceownership from './admin/Traceownership'
import Dashboardlayout from './admin/Dashboardlayout'
function App() {
  return (
    <div >
      <div>
        {/* <Navigation/> */}
      <Routes>    
         <Route exact path='/' element={<><Navigation /><Home /></>} />
         {/* <Route path='/services' element={<Services/>} /> */}
        <Route path='/contact' element={<><Navigation /><ContactMe/></>} />
        <Route path='/help' element={<><Navigation /><Help/></>} />
        <Route path='/authenticate' element={<><Navigation /><Authenticate/></>} />
        <Route path='/about' element={<><Navigation /><About/></>}/>
        <Route path='/registration' element={<><Navigation /><Registration/></>} />
        {/*  */}
        <Route path='/index' element= { <Index/>}></Route>
        <Route path="/setng" element={<Settingview/>}></Route>
        <Route path="/device" element={<Deviceview/>}></Route>
        <Route path="/pend" element={<Pendingdevice/>}></Route>
        <Route path='/deevice' element={<Deevice/>}></Route>
        <Route path="/Devicetransfer" element={<Devicetransferform/>}></Route>
        <Route path='/invoice' element={<Invoiceview/>}></Route>
        <Route path='/adddevice' element={<Adddeviceview/>}></Route>
        <Route path='/assigndevice' element={<Assigndeviceview/>}></Route>
        <Route path='/publishdevice' element={<Publishdeviceview/>}></Route>
        <Route path='/statusview' element={<Statusview/>}></Route>
        <Route path='/traceownership' element={<Traceownership/>}></Route>
        <Route path="/dashaboard" element={<Dashboardlayout/>}></Route>
     </Routes>
     </div>
    </div>
  );
}

export default App;
