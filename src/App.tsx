import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sticker, LayoutGrid, List, Sun, Moon } from 'lucide-react';
import LocationSelector from './components/LocationSelector';
import StickerCard from './components/StickerCard';
import StickerDetail from './pages/StickerDetail';
import { stickers } from './data';
import { ViewMode } from './types';

function App() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const featuredStickers = stickers.filter(sticker => sticker.isFeatured);
  const filteredStickers = selectedLocation
    ? stickers.filter(sticker => sticker.location === selectedLocation)
    : stickers;

  return (
    <Router>
      <Routes>
        <Route path="/sticker/:id" element={<StickerDetail />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <header className="bg-purple-600 shadow-sm sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sticker className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    <h1 className="text-xl sm:text-2xl font-bold text-white">FiguStore</h1>
                  </div>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-1.5 sm:p-2 text-white hover:bg-purple-700 rounded-lg transition-colors"
                  >
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
              <section className="mb-6 sm:mb-12">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Escolha sua localização
                </h2>
                <LocationSelector
                  selectedLocation={selectedLocation}
                  onLocationChange={setSelectedLocation}
                />
              </section>

              <section className="mb-6 sm:mb-12">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  Figurinhas em Destaque
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
                  {featuredStickers.slice(0, 10).map(sticker => (
                    <StickerCard key={sticker.id} sticker={sticker} viewMode="grid" />
                  ))}
                </div>
              </section>

              <section>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                    {selectedLocation
                      ? `Figurinhas disponíveis em ${selectedLocation}`
                      : 'Todas as Figurinhas'}
                  </h2>
                  <div className="flex space-x-2 self-end sm:self-auto">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        viewMode === 'list'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className={
                  viewMode === 'grid'
                    ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6"
                    : "space-y-3 sm:space-y-4"
                }>
                  {filteredStickers.map(sticker => (
                    <StickerCard key={sticker.id} sticker={sticker} viewMode={viewMode} />
                  ))}
                </div>
              </section>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;