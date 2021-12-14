import { TProduct } from '../../redux-store/reducers/products/types';

export type TProductCardProps = {
  product: TProduct;
  onPress: (product: TProduct) => void;
  isSelected?: boolean;
};
