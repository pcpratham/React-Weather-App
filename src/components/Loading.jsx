import React from 'react'
import Loading1 from "../images/loading.gif";


const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={require('../images/loading.gif')} alt="loading..." 
        height={200} width={200}
      />
      <p className='text-2xl'>Loading..</p>
    </div>
  )
}

export default Loading