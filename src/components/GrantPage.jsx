import React from 'react'
import location from "../images/location.png"
const GrantPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={location} alt="loading..." 
        height={200} width={200}
      />
      <p className='text-2xl mt-2'>Kindly Grant location Access</p>
    </div>
  )
}

export default GrantPage