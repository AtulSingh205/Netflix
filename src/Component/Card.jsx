import React, { useContext } from 'react'

const Card = () => {
    const {chtai}=useContext(Store)
    return (
        <div className=''>
            <div className='text-amber-100 h-[100px] w-[200px] rounded-2xl flex items-center flex-wrap'>
                {chtai.length > 0 && (chtai.map((val) => (
                    <div>
                    <h1>{val.Title}</h1>
                    <img src={val.Poster}></img>
                    <h1>{val.Year}</h1>
                    </div>
                  
                )))}
            </div>

        </div>
    )
}

export default Card
