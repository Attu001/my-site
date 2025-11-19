import React from 'react'

export const CertificateView = ({ name }) => {
  return (
    <div className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12  transition-transform duration-1000"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Image Container */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-4 mb-4 border border-white/10  transition-colors duration-300">
          <div className="w-full h-48 bg-gray-400/20 rounded-lg flex items-center justify-center  transition-transform duration-300">
            {/* Replace with actual image: */}
            <img 
              src={`https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/helo/${name}`} 
              alt={name}
              className="w-full h-full object-contain rounded-lg"
            />
           
          </div>
        </div>
        
        {/* Certificate Info */}
        <div className="text-center">
          <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
            {name.replace('.png', '').replace(/_/g, ' ').toUpperCase()}
          </h3>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>🔒 Verified</span>
            <span>•</span>
            <span>📅 2024</span>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default CertificateView