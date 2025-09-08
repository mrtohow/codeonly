import React, { useState, useEffect } from 'react';
import { Camera, Film, Heart, Video, Mail, Phone, MapPin, Star, ArrowUp, Menu, X, Palette, Image, Play, Eye } from 'lucide-react';

const KaafiStudio = () => {
  // ... (all your existing state variables)

  const designPortfolio = [
    {
      id: 1,
      title: "Fashion Brand Design",
      category: "Brand Identity",
      thumbnail: "photos/4.webp", // Giorgio Armani inspired design
      type: "Design",
    },
    {
      id: 2,
      title: "Wedding Invitation Suite",
      category: "Print Design",
      thumbnail: "photos/wedding-2-copy.jpg", // Abdifitah & Fahma wedding
      type: "Design",
    },
    {
      id: 3,
      title: "Luxury Brand Design",
      category: "Branding",
      thumbnail: "photos/11.webp", // Christian Dior inspired design
      type: "Design",
    },
    {
      id: 4,
      title: "Tourism Event Poster",
      category: "Marketing Material",
      thumbnail: "photos/poster-2.jpg", // Curush Tourism poster
      type: "Design",
    },
    {
      id: 5,
      title: "Tourism Promotion",
      category: "Marketing Material",
      thumbnail: "photos/poster-4-copy.jpg", // Curush Tourism poster
      type: "Design",
    },
    {
      id: 6,
      title: "VIP Tourism Package",
      category: "Marketing Material",
      thumbnail: "photos/poster-5-copy.jpg", // Curush Tourism VIP package
      type: "Design",
    },
    {
      id: 7,
      title: "Ecommerce Brand Identity",
      category: "Branding",
      thumbnail: "photos/Sumbus-logo.jpg", // Sumbus Ecommerce brand
      type: "Design",
    },
    {
      id: 8,
      title: "Fashion Company Design",
      category: "Brand Identity",
      thumbnail: "photos/9.webp", // Huaren Fashion Company
      type: "Design",
    },
  ];

  // ... (rest of your code remains the same)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* ... (all your existing JSX) */}

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            
            {/* Portfolio Tabs */}
            <div className="flex justify-end mb-8">
              <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg p-1 border border-gray-600 shadow-lg">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActivePortfolioTab('videos')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activePortfolioTab === 'videos'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Video size={16} />
                    <span>Videos</span>
                  </button>
                  <button
                    onClick={() => setActivePortfolioTab('designs')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                      activePortfolioTab === 'designs'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Palette size={16} />
                    <span>Designs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Design Portfolio */}
          {activePortfolioTab === 'designs' && (
            <div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {designPortfolio.map((design, index) => (
                  <div
                    key={design.id}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-gray-800 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                      activePortfolioTab === 'designs' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square">
                      <img
                        src={design.thumbnail}
                        alt={design.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=400&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-lg font-bold mb-1">{design.title}</h3>
                          <p className="text-purple-300 text-sm">{design.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ... (rest of your portfolio section) */}
        </div>
      </section>

      {/* ... (rest of your JSX) */}
    </div>
  );
};

export default KaafiStudio;