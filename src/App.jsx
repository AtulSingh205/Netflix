import React, { useEffect, useState } from 'react'
import Search from './Component/Search'
import Card from './Component/Card'
import Background from './Component/Background'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Wishlist from './Component/Wishlist';


  const App = () => {
  return (
    <div>
  
    <Routes>
       {/* Home route */}
        <Route path="/" element={<><Background /> <Search/> <Card/></>} />

        {/* Wishlist route */}
        <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
    
     
    </div>
  );
};


export default App
