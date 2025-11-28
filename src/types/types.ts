export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: { product: Product };
};

export type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
};
