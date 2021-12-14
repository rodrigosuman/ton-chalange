import { TProduct } from '../products/types';

export type TCartState = {
  data: TProduct[];

  total: number;
};
