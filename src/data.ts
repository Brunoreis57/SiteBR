import { Location, Sticker } from './types';

export const locations: Location[] = [
  { id: '1', name: 'São Paulo', state: 'SP' },
  { id: '2', name: 'Rio de Janeiro', state: 'RJ' },
  { id: '3', name: 'Belo Horizonte', state: 'MG' },
  { id: '4', name: 'Curitiba', state: 'PR' },
];

export const stickers: Sticker[] = [
  {
    id: '1',
    name: 'Neymar Jr. Edição Especial',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?w=400',
    images: [
      'https://images.unsplash.com/photo-1434596922112-19c563067271?w=400',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
      'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=400'
    ],
    description: 'Figurinha especial do Neymar Jr. em edição limitada, holográfica e numerada.',
    location: 'São Paulo',
    isFeatured: true,
    stock: 50,
    category: 'Futebol',
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    name: 'Pelé Lendário',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400',
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400',
      'https://images.unsplash.com/photo-1434596922112-19c563067271?w=400',
      'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400',
      'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400',
      'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=400'
    ],
    description: 'Figurinha comemorativa do Rei do Futebol, Pelé.',
    location: 'São Paulo',
    isFeatured: true,
    stock: 30,
    category: 'Futebol',
    createdAt: '2024-03-15',
  },
];