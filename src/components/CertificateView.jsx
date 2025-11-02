import React from 'react'

const CertificateView = ({url}) => {
    console.log(url)
  return (
    <>
        <div className=''>
           <div className='text-center grid max-w-[400px] '>
            <div>
            <img src={url} alt='noimg.jpg' ></img>
           
              <h3>Certificate Name</h3>
            </div>
        </div>
        </div>

    
    </>
  )
}

export default CertificateView