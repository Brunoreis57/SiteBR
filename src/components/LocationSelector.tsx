import React from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '../data';

interface Props {
  selectedLocation: string;
  onLocationChange: (location: string) => void;
}

export default function LocationSelector({ selectedLocation, onLocationChange }: Props) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-base appearance-none"
        >
          <option value="">Selecione sua localização</option>
          {locations.map((location) => (
            <option key={location.id} value={location.name}>
              {location.name} - {location.state}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}