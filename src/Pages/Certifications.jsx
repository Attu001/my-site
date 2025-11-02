import React from 'react'
import CertificateView from '../components/CertificateView'

export const Certifications = () => {
  const images = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ]


  return (
    <div className='p-10 min-h-screen bg-blue-300 w-screen items-center justify-center flex'>


      <div className='grid grid-cols-3 pt-15 flex gap-50'>
        {images.map((surl) => (
          <CertificateView url={surl} />
        ))}

      </div>
    </div>
  )
}
