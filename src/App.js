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

         </Routes>
         
         </BrowserRouter>
    
    </div>
  );
}

export default App;
