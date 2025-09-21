import React, { useEffect, useState } from 'react'
import Search from './Component/Search'
import Card from './Component/Card'

const App = () => {
  let [Api,SetApi]=useState([])
  let [search,SetSearch]=useState("")

  let chtai = Api.filter((itm)=>{
    if(search.toLowerCase()===""){
      return true;
    }
    else{
      return itm.Title.toLowerCase().includes(search.toLowerCase())
    }
  })

  async function fetchData() {
    let Api_Key = "dd4ad9fd"
    let Store = await fetch(`https://www.omdbapi.com/?apikey=${Api_Key}&s=${search}`)
    let Result = await Store.json();
    SetApi(Result.Search||[]);
  }
  console.log(search)
  console.log(Api)
  useEffect(()=>{
    fetchData();
  },[search])
  
  return (
    <div className='h-screen w-screen relative'>
      <div className='absolute'>
        <img className='blur-[1px]' src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"></img>
      </div>
      <nav className=' relative text-amber-100 flex justify-between'>
        <img className='ml-4 mt-4 h-14 w-36 ' src='data:image/png;base64,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'></img>
        <div className='flex gap-5 mt-4'>
           <select name='language' className='h-8 w-28 border-2 bg-red-600  rounded-[5px]'>
        <option className='bg-black'>English</option>
        <option className='bg-black'>Hindi</option>
        </select> 
        <button className='mr-4 h-8 w-20 border-2 rounded-[5px] bg-red-600'>Sign in</button>
        </div>
      </nav>

      <div className='relative flex  justify-center '>
            <Search SetSearch={SetSearch} search={search}/>
      </div>
      <div className='relative '>
        <Card chtai={chtai}/>
      </div>
    </div>
  )
}

export default App
