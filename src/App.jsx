import {Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import Cart from "./components/cart/cart.jsx"
import MobileCart from './components/cart/mobileCart.jsx';

function App() {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
       <Routes>
        {/* {isMobile ? */}
          {/* <Route path='/order' element={<MobileCart />} /> */}
          {/* : */}
          <Route path='/order' element={<Cart />} />
        {/* } */}
        </Routes>
    </>
  );
}

export default App;
