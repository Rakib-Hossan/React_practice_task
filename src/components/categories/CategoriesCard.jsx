import React from 'react'

export default function CategoriesCard({ category }) {
    
  return (
    <div className='px-36'>
        <div className='border-2 p-5 hover:bg-violet-400 hover:text-white font-bold'>
                <img src={category?.image} alt="" />
                <h2 className=' text-center'>{category?.title}</h2>
                
        </div>
    </div>
  )
}
