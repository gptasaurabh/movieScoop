import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const HorizontalCards = ({data}) => {
  return (
    
        
       
       <div className='w-[100%] flex overflow-y-hidden mb-5 px-5'>

        {data.map((d, i) => (
          <div key={i} className='min-w-[17%]  bg-zinc-900  mr-5 mb-5'>
            <img className='w-full h-[45%] object-cover flex flex-col justify-start'
             src={`https://image.tmdb.org/t/p/original${d.backdrop_path || d.poster_path}`} 
             alt=""
              />
                 <div className='text-white p-2 h-[50%]'>
                     <h1 className=" mt-3 text-xl font-semibold text-white ">
                         {d.name || d.title || d.original_name || d.original_title}
                     </h1>
                    <p className="">{d.overview.slice(0, 50)}...
                        <span className='text-blue-300'>More</span>
                    </p>
                 </div>
          </div>  
        ))}

       </div>
    
  )
}

export default HorizontalCards
