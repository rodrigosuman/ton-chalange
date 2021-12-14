import { TProduct } from '../products/types';

export type TCartState = {
  data: TProduct[];
  formatedTotal: string;
  total: number;
};
