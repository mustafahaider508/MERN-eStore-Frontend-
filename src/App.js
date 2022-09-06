import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from './Components/Men';
import Women from './Components/Women';
import SignIn from "./Components/Signin"
import SignUp from "./Components/SignUp"
import Shop from './Components/Shop';
import MenAccessories from './Components/Men_Accessories';
import WomenClothing from './Components/Women_Clothing';
import WomenAccessories from './Components/Women_Accessories';
import Abbigliamento from "./Components/Abbigliamento";
import Vintage from './Components/Vintage';
import Customize from './Components/Customize';
import MenBecklacesRings from './Components/Men_ Bracelets_Rings';
import  WVintage from './Components/W_vintage';
import Wcustomised from './Components/W_customised';
import  WBraceletsRings from "./Components/W_Bracelets_Rings"
import WER from "./Components/W_ER"
import ProductDetail from './Components/Product_Detail';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Veiwproducts from './Components/Veiw_products';
import About from './Components/About';
import Contact from './Components/Contact';
import Mobnav from './Components/Mobnav';
import MenNecklacesEarrings from './Components/Men_ Bracelets_Rings';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<MenAccessories />} />
          <Route path="/w_clothing" element={<WomenClothing />} />
          <Route path="/w_accessories" element={<WomenAccessories />} /> 
          <Route path="/abbigliamento" element={<Abbigliamento />} />
          <Route path="/vintage" element={<Vintage/>} /> 
          <Route path="/customize" element={<Customize />} />  
          <Route path="/men_Accessories" element={<MenAccessories />} />
          <Route path="/men_ne" element={<MenBecklacesRings />} /> 
          <Route path="/men_e" element={<MenNecklacesEarrings />} />
          <Route path="/w_vintage" element={<WVintage />} /> 
          <Route path="/w_customized" element={<Wcustomised/>} />
          <Route path="/w_br" element={<WBraceletsRings/>} />  
          <Route path="/w_er" element={<WER/>} /> 
          <Route path="/product_detail/:id" element={<ProductDetail />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/veiw_products" element={<Veiwproducts/>} /> 
          <Route path="/mobnav" element={<Mobnav/>} /> 
          
         
      
         </Routes>
      
         
         </BrowserRouter>
    
    </div>
  );
}

export default App;
