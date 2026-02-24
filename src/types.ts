export interface Dress {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imagePrompt: string;
  imageUrl?: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface OrderFormData {
  name: string;
  address: string;
  phone: string;
  quantity: number;
}
