import React from 'react'
import banner from '../assets/banner.png'

function Banner() {
  return (
    <div className=' flex justify-center bg-teal-200'>
        <img src={banner} alt="" className='w-full'/>
    </div>
  )
}

export default Banner
