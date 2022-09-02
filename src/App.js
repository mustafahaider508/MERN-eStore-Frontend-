import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from './Components/Men';
import Women from './Components/Women';
import SignIn from "./Components/Signin"
import SignUp from "./Components/SignUp"
import Shop from './Components/Shop';
import Men_Accessories from './Components/Men_Accessories';
import Women_Clothing from './Components/Women_Clothing';
import Women_Accessories from './Components/Women_Accessories';
import Abbigliamento from "./Components/Abbigliamento";
import Vintage from './Components/Vintage';
import Customize from './Components/Customize';
import Men_necklaces_earrings from './Components/Men_ Bracelets_Rings';
import W_Vintage from './Components/W_vintage';
import W_customised from './Components/W_customised';
import W_Bracelets_Rings from "./Components/W_Bracelets_Rings"
import W_ER from "./Components/W_ER"
import Product_Detail from './Components/Product_Detail';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard';
import Product from './Components/Product';
import Veiw_products from './Components/Veiw_products';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/accessories" element={<Men_Accessories />} />
          <Route path="/w_clothing" element={<Women_Clothing />} />
          <Route path="/w_accessories" element={<Women_Accessories />} /> 
          <Route path="/abbigliamento" element={<Abbigliamento />} />
          <Route path="/vintage" element={<Vintage/>} /> 
          <Route path="/customize" element={<Customize />} />  
          <Route path="/men_Accessories" element={<Men_Accessories />} />
          <Route path="/men_ne" element={<Men_necklaces_earrings />} /> 
          <Route path="/men_e" element={<Men_necklaces_earrings />} />
          <Route path="/w_vintage" element={<W_Vintage />} /> 
          <Route path="/w_customized" element={<W_customised/>} />
          <Route path="/w_br" element={<W_Bracelets_Rings/>} />  
          <Route path="/w_er" element={<W_ER/>} /> 
          <Route path="/product_detail" element={<Product_Detail />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/veiw_products" element={<Veiw_products/>} /> 
          
         
      
         </Routes>
         <Footer />
         
         </BrowserRouter>
    
    </div>
  );
}

export default App;
