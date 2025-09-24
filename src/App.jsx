import React, { useEffect, useState } from 'react'
import Search from './Component/Search'
import Card from './Component/Card'
import Background from './Component/Background'


  const App = () => {
  return (
    <div>
      <Background />
        {/* <Routes>
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes> */}
      <Search/>
      <Card/>
    </div>
  );
};


export default App
