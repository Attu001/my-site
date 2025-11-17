import React, { use } from 'react'
import CertificateView from '../components/CertificateView'
import { getPortfolioImages } from '../slices/getPortfoiloImages';
import { useState, useEffect } from 'react';

export const Certifications = () => {




  const [imgname, setImgname] = useState(null)

  useEffect(() => {
    setImgname([
      "badg1.png",
      "badg2.png",
      "badge1_certificate.png",
      "snowprocore.png",
      "google_prompt_design.png",
      "python_data_science.png",
      "database_developer.png",
      "snowflake_badge_2.png"
    ]);
  }, []);


  return (
    <div className="p-10 h-screen bg-blue-300 w-screen items-center justify-center overflow-y-scroll">
      <div className='grid grid-cols-3 gap-4 mt-24 '>
        
          {imgname &&
            imgname?.map((img, i) => (
              <CertificateView key={i} name={img} />
            ))}
      
      </div>
    </div>
  );

}
