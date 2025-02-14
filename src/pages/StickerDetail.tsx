import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import { stickers } from '../data';

export default function StickerDetail() {
  const { id } = useParams();
  const sticker = stickers.find((s) => s.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!sticker) {
    return <div>Figurinha não encontrada</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <Link to="/" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 sm:mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white dark:bg-gray-800">
              <img
                src={sticker.images[selectedImage]}
                alt={sticker.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {sticker.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? 'border-purple-600 dark:border-purple-400'
                      : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${sticker.name} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {sticker.name}
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2 sm:mt-4">
              R$ {sticker.price.toFixed(2)}
            </p>
            
            <div className="mt-4 sm:mt-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                Descrição
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {sticker.description}
              </p>
            </div>
            
            <div className="mt-4 sm:mt-6 space-y-4">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Package className="w-5 h-5 mr-2" />
                <span>{sticker.stock} unidades em estoque</span>
              </div>
            </div>
            
            <button className="mt-6 sm:mt-8 w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}