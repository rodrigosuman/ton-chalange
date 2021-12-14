import { TProduct } from '../../redux-store/reducers/products/types';

export type TCartItemProps = {
  product: TProduct;
  onLongPress?: (product: TProduct) => void;
  callToPress?: boolean;
  isSelected?: boolean;
};
