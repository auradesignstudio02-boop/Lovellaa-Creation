export interface Product {
  id: string;
  name: string;
  category: 'Pyjamas' | 'Robes' | 'Lingerie' | 'Sous-vêtements' | 'Nouveautés';
  price: number; // in DA
  originalPrice?: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  wilaya: string;
  commune: string;
  address: string;
  notes: string;
}

export type ActivePage = 'home' | 'shop' | 'pyjamas' | 'robes' | 'lingerie' | 'nouveautes' | 'about' | 'contact' | 'product';
