
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import Register from './Components/Register/Register';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Dashbord from './Components/Dashbord/Dashbord';
import { FaEnvelope,FaEnvira,FaAddressCard,FaHandshake} from "react-icons/fa";
import Contact from './Components/ContactPage/Contact';
import Àpropos from './Components/À propos/Àpropos';
import Produits from './Components/Produits/Produits';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import BoutiqueProduits from './Components/BoutiqueProduits/BoutiqueProduits';
import Cart from './Components/BoutiqueProduits/Cart/Cart';
import AddCart from './Components/AddCart/AddCart';



function App() {
  return (
  
    <div className="App">

      <Routes>
<Route path="/home"  element={<Home/>} />
<Route path="/login"  element={<Login/>} />
<Route path="/"  element={<Register/>} />
<Route path="/forgotPassword"  element={<ForgotPassword/>} />
<Route path='/forgotPassword/:id/:token' element={<ResetPassword/>}/>
<Route path='/dashbord' element={<Dashbord/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<Àpropos/>}/>
<Route path='/produits' element={<Produits/>}/>
<Route path='/addProduits' element={<AddProduct/>}/>
<Route path='/updateProduits/:id' element={<UpdateProduct/>}/>

<Route path='/boutique' element={<BoutiqueProduits/>}/>

<Route path='/produit/:id' element={<Cart/>}/>
<Route path='/cart/:id' element={<AddCart/>}/>



      </Routes>


      <div  className="menu_overlay"></div>

  <div  className="cornerMenu">
    <i  className="fa fa-bars" aria-hidden="true"></i>
  
    <div className="menu menu1"><FaEnvelope/></div>
    <div className ="menu menu2"><FaEnvira/></div>
    <div className="menu menu3"><FaAddressCard/></div>
    <div className="menu menu4"><FaHandshake/></div>
  </div>
    </div>



  );
}

export default App;
