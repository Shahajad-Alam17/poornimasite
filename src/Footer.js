import React from 'react'
import logo from "./assets/img.png"

function Footer() {
  return (
    <div className='bg-[#355392] w-full justify-center flex'>
        <div>
        <img src={logo} alt='logo' className='w-16'/>
      </div>
    <div>
      <p className='text-white '>© 2024 Poornima University. All rights reserved.</p>
     
      <p className='text-white '>Developed By: Shahajad Alam</p>
      </div>
      
    </div>
  )
}

export default Footer
