import React from 'react';
import { Link } from 'react-router-dom';
import { Sticker, ViewMode } from '../types';

interface Props {
  sticker: Sticker;
  viewMode: ViewMode;
}

export default function StickerCard({ sticker, viewMode }: Props) {
  if (viewMode === 'list') {
    return (
      <Link to={`/sticker/${sticker.id}`} className="group block">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-102">
          <div className="flex items-center p-3 sm:p-4">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
              <img
                src={sticker.image}
                alt={sticker.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="ml-3 sm:ml-6 flex-grow min-w-0">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white truncate">
                {sticker.name}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mt-0.5 sm:mt-1">
                R$ {sticker.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 truncate">
                {sticker.location} • {sticker.stock} em estoque
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/sticker/${sticker.id}`} className="group block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-102">
        <div className="aspect-square overflow-hidden">
          <img
            src={sticker.image}
            alt={sticker.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2 sm:p-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white truncate">
            {sticker.name}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-bold mt-1 sm:mt-2">
            R$ {sticker.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1 truncate">
            {sticker.location} • {sticker.stock} em estoque
          </p>
        </div>
      </div>
    </Link>
  );
}