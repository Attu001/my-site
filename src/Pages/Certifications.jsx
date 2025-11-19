import React, { useState, useEffect } from 'react'
import CertificateView from '../components/CertificateView'
import { getPortfolioImages } from '../slices/getPortfoiloImages';

export const Certifications = () => {
  const [imgname, setImgname] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay for better UX
    setTimeout(() => {
      setImgname([
        "badg1.png",
        "badg2.png",
        // "badge1_certificate.png",
        "snowprocore.png",
        "google_prompt_design.png",
        "python_data_science.png",
        "database_developer.png",
        "snowflake_badge_2.png"
      ]);
      setIsLoading(false)
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 w-screen relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12 pt-20">
          <div className="overflow-hidden">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent opacity-0 animate-fade-in-up">
              Certifications
            </h1>
          </div>
          <div className="overflow-hidden">
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-300">
              My professional achievements and validated skills through various certifications and badges
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="flex justify-center gap-8 mt-12 opacity-0 animate-fade-in-up animation-delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{imgname?.length || 0}</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">8+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">4+</div>
              <div className="text-gray-400">Platforms</div>
            </div>
          </div>
        </div>

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-pulse"
              >
                <div className="bg-gray-400/30 rounded-lg h-48 mb-4"></div>
                <div className="bg-gray-400/30 rounded h-4 w-3/4 mb-2"></div>
                <div className="bg-gray-400/30 rounded h-3 w-1/2"></div>
              </div>
            ))}
          </div>
        )}

        {/* Certificates Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          {imgname &&
            imgname.map((img, i) => (
              <div
                key={i}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${600 + i * 100}ms` }}
              >
                <CertificateView name={img} />
              </div>
            ))}
        </div>

        {/* Empty State */}
        {!isLoading && (!imgname || imgname.length === 0) && (
          <div className="text-center py-20 opacity-0 animate-fade-in">
            <div className="text-6xl mb-4">📜</div>
            <h3 className="text-2xl text-gray-300 mb-2">No Certifications Yet</h3>
            <p className="text-gray-500">Certifications will appear here once added</p>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-1000">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400 text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-2000 { animation-delay: 2000ms; }
        .animation-delay-4000 { animation-delay: 4000ms; }
      `}</style>
    </div>
  );
}