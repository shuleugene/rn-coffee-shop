export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
};

export type BinsResponse<T> = {
  record: T[];
};
