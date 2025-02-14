export interface Sticker {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  location: string;
  isFeatured: boolean;
  stock: number;
  category: string;
  createdAt: string;
}

export interface Location {
  id: string;
  name: string;
  state: string;
}

export type ViewMode = 'grid' | 'list';