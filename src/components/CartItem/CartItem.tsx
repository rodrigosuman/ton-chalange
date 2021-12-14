import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { useDispatch } from 'react-redux';
import { toogleProductCart } from '../../redux-store/actions/cart';
import { TProduct } from '../../redux-store/reducers/products/types';
import * as S from './styles';
import { TCartItemProps } from './types';

const CartItem: React.FC<TCartItemProps> = props => {
  const { product, onLongPress, callToPress, isSelected } = props;
  const dispatch = useDispatch();

  const removeProduct = React.useCallback(
    (_product: TProduct) => {
      dispatch(toogleProductCart(_product));
    },
    [dispatch],
  );

  const handleLongPress = React.useMemo(() => {
    return !callToPress ? () => onLongPress?.(product) : undefined;
  }, [callToPress, onLongPress, product]);

  const handleOnPress = React.useMemo(() => {
    return callToPress ? () => onLongPress?.(product) : undefined;
  }, [callToPress, onLongPress, product]);

  return (
    <View style={isSelected && { opacity: 0.4 }}>
      <S.Container
        activeOpacity={1}
        onLongPress={handleLongPress}
        onPressIn={handleOnPress}
        delayLongPress={0.3}>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductPrice>{product.price}</S.ProductPrice>

        {!callToPress && (
          <S.Dot onPress={() => removeProduct(product)}>
            <Icon name="close" size={24} color={'#ffffff'} />
          </S.Dot>
        )}
      </S.Container>
    </View>
  );
};

export default CartItem;
