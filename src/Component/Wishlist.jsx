import React, { useContext } from 'react'
import { Store } from '../Context/Sbkamaliek'

const Wishlist = () => {
  const {wishAdd,setWish,SetApi}=useContext(Store)
  function RemoveId(ID){
    let togel=wishAdd.map((item)=>item.imdbID==ID ? {...item,ischangw:!item.ischangw}:item)
       SetApi(togel)
      let remove = wishAdd.filter((itm)=>itm.imdbID!==ID);
      setWish(remove)
      console.log("h remove hogya ");
  }
  return (
    <div className='h-screen w-screen bg-gray-700 flex '>
        {wishAdd.length > 0 &&
        wishAdd.map((val, i) => (
          <div
            key={i}
            className="bg-gray-800 text-white rounded-2xl shadow-lg p-4 w-[220px] h-[500px] flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={val.Poster}
              alt={val.Title}
              className="h-[280px] w-full object-cover rounded-xl mb-3"
            />
            <h1 className="text-lg font-semibold text-center">{val.Title}</h1>
            <p className="text-sm text-gray-300 mb-2">Year: {val.Year}</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium" onClick={()=>RemoveId(val.imdbID)}>
              Remove
            </button>
          </div>
        ))}
    </div>
  )
}

export default Wishlist
