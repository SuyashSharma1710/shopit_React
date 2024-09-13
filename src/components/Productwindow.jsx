import React from 'react';
import Productcard from './Productcard';


function Productwindow() {
  return (
    <div>
        <h1 className='bg-gray-100 w-full text-teal-900 text-7xl sm:text-left pt-8 px-14'>Products</h1>
        <section className='w-full'>
            <Productcard /> 
        </section>
      
    </div>
  )
}

export default Productwindow
