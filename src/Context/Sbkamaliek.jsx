import React, { createContext, useState, useEffect } from 'react';

export const Store = createContext(null);

const Sbkamaliek = (props) => {
  const [Api, SetApi] = useState([]);
  const [search, SetSearch] = useState("");
  const [wishAdd,setWish] = useState([])

  const chtai = Api.filter((itm) => {
    if (search.toLowerCase() === "") return true;
    return itm.Title.toLowerCase().includes(search.toLowerCase());
  });

  async function fetchData() {
    let Api_Key = "dd4ad9fd";
    let res = await fetch(`https://www.omdbapi.com/?apikey=${Api_Key}&s=${search}`);
    let Result = await res.json();
    let Update = (Result.search||[]).map((item)=>({...item,isChangw:true}))
  }

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <Store.Provider value={{ Api, SetApi, search, SetSearch, chtai ,wishAdd,setWish}}>
      {props.children}
    </Store.Provider>
  );
};

export default Sbkamaliek;
