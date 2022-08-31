import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Men from './Components/Men';
import Women from './Components/Women';
import SignIn from "./Components/Signin"
import SignUp from "./Components/SignUp"


function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<h1>Shop Page</h1>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />

         </Routes>
         
         </BrowserRouter>
    
    </div>
  );
}

export default App;
