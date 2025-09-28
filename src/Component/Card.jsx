import React, { useContext } from "react";
import { Store } from "../Context/Sbkamaliek";

const Card = () => {
  const { chtai,SetApi,wishAdd,setWish} = useContext(Store);
  function handelId(ID){
    let togel =  chtai.map((itm)=>itm.imdbID == ID ? {...itm,isChangw:!itm.isChangw}:itm)
    SetApi(togel);
    
    let clickitm = chtai.find((itm)=>itm.imdbID==ID)
    if(clickitm){
      if(wishAdd.find((item)=>item.imdbID==ID)){
          let remove = wishAdd.filter((itm)=>itm.imdbID!=ID)
          setWish(remove)
      }
      else{
        setWish([...wishAdd,clickitm])
      }
    }
    // setWish([...wishAdd,clickitm])
    console.log("hh chl rh hai ");
  }

  return (
    <div className="relative flex flex-wrap gap-6 p-6 justify-center">
      {chtai.length > 0 &&
        chtai.map((val, i) => (
          <div
            key={i}
            className="bg-gray-800 text-white rounded-2xl shadow-lg p-4 w-[220px] flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={val.Poster}
              alt={val.Title}
              className="h-[280px] w-full object-cover rounded-xl mb-3"
            />
            <h1 className="text-lg font-semibold text-center">{val.Title}</h1>
            <p className="text-sm text-gray-300 mb-2">Year: {val.Year}</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium" onClick={()=>  handelId(val.imdbID)}>
              {val.isChangw ? "Add to wishlist" : "Remove"}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Card;
