import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the change from 'Switch' to 'Routes'
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Navbar from './component/Navbar/Navbar';
import CryptoConverter from './pages/Converter/CryptoConverter';

const App = () => {
  return(
    <div className='app'>
              <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/coin/:coinId' element={<Coin/>}></Route>
        <Route path="/converter" element={<CryptoConverter />} />

      </Routes>


    </div>
  )
}

export default App;
