import React, { useContext } from 'react'
import { Store } from '../Context/Sbkamaliek'

const Search = () => {
  const {search,SetSearch}=useContext(Store);
  return (
    <div>
      <div className='flex flex-col items-center justify-center relative'>
          <div className='font-bold text-amber-100 text-3xl flex flex-col items-center '>
        <h1>Unlimited movies, TV shows</h1>
        <h1>and more</h1>
      </div>
      <div>
        <input value={search} className='h-10 w-56 border-2 bg-gray-700  text-amber-100' type='text' placeholder='Search Movie' onChange={(e) => SetSearch(e.target.value)}></input>
      </div>
      </div>
    
    </div>
  )
}

export default Search
