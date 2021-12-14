import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useSelector from '../../hooks/useSelector';
import screenNames from '../../navigation/constants/screenNames';
import * as S from './styles';

const CartIcon: React.FC = () => {
  const navigation = useNavigation();
  const navigateToCartList = React.useCallback(() => {
    navigation.navigate(screenNames.MY_CART as never, {} as never);
  }, [navigation]);
  const cartLength = useSelector(state => state.cart.data?.length);
  return (
    <TouchableOpacity onPress={navigateToCartList}>
      <S.Container>
        <Icon name="cart-outline" size={30} />
        {cartLength ? (
          <S.Dot>
            <S.CartLengthText>{cartLength}</S.CartLengthText>
          </S.Dot>
        ) : (
          <></>
        )}
      </S.Container>
    </TouchableOpacity>
  );
};

export default CartIcon;
