
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  images: string;
  thumbnail : string;
};

export interface Review {
  user: string;
  comment: string;
  rating: number;
}


