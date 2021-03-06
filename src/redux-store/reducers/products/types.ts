export type TProduct = {
  id: string;
  name: string;
  price: number;
  currency: string;
  formatedPrice?: string;
};

export type TProductsState = {
  data: TProduct[];
  isLoading: boolean;
};
