import React, { useState } from 'react'
import Loader from './Loader'

const CertificateView = ({ name }) => {
  console.log(name)
  const [load, setload] = useState(true)
  return (
    <>
      {
        load && <Loader />
      }
      <div className=''>
        <div className='text-center w-[400px] h-[300px] p-6 border border-gray-300 shadow-md m-2 '>
          <div className='w-full h-full'>
            <img
              src={`https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/helo/${name}`}
              alt='noimg.jpg'
              onLoad={() => setload(false)}
              className='w-full h-full'
            ></img>

            <h3>{name}</h3>
          </div>

        </div>
      </div>


    </>
  )
}


export default CertificateView