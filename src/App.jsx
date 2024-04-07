import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Coins from "./Components/Coins";
import CoinsDetails from "./Components/ConinsDetails";
import Exchanges from "./Components/Exchanges";

import './App.css';

function App() {
  

  return (
    <>
            <Router>
              <Header />
               <Routes>
                    <Route path="/" element ={<Home />} />
                    <Route path="/Coins" element ={<Coins />} />
                    <Route path="/Exchanges" element ={<Exchanges />} />
                    <Route path="/coind/:id" element ={<CoinsDetails />} />
                  </Routes>
               <Footer />
            </Router>
    </>
  )   
}

export default App
 