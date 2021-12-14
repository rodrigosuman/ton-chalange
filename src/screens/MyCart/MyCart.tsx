import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem';
import TrashIcon from '../../components/TrashIcon/TrashIcon';
import useSelector from '../../hooks/useSelector';
import { deleteProductList } from '../../redux-store/actions/cart';
import { TProduct } from '../../redux-store/reducers/products/types';
import * as S from './styles';

const MyCart: React.FC = () => {
  const { data: cartData, total } = useSelector(state => state.cart);
  const [productListToDelete, setProductListToDelete] = React.useState<
    TProduct[]
  >([]);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    !cartData.length && navigation.goBack();
  }, [cartData.length, navigation]);

  const toggleDeleteList = React.useCallback(
    (product: TProduct) => {
      const _product = productListToDelete.find(item => item.id === product.id);

      if (_product) {
        return setProductListToDelete(old =>
          [...old].filter(item => item.id !== _product.id),
        );
      }

      return setProductListToDelete(old => [...old, product]);
    },
    [productListToDelete],
  );

  const headerText = React.useMemo(() => {
    const CART_LENGTH = cartData.length;
    const IS_PLURAL = CART_LENGTH > 1;

    return `${CART_LENGTH} produto${IS_PLURAL ? 's' : ''} selecionado${
      IS_PLURAL ? 's' : ''
    }`;
  }, [cartData.length]);

  const checkWhetherSelected = React.useCallback(
    (product: TProduct) => {
      return !!productListToDelete.find(item => item.id === product.id);
    },
    [productListToDelete],
  );

  const handleProductListToDelete = React.useCallback(() => {
    dispatch(deleteProductList(productListToDelete));
    setProductListToDelete([]);
  }, [productListToDelete, dispatch]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        productListToDelete?.length ? (
          <TouchableOpacity onPress={handleProductListToDelete}>
            <TrashIcon length={productListToDelete?.length} />
          </TouchableOpacity>
        ) : (
          <></>
        ),
    });
  }, [
    productListToDelete?.length,
    dispatch,
    navigation,
    handleProductListToDelete,
  ]);

  return (
    <React.Fragment>
      <S.Container>
        <FlatList
          data={cartData}
          renderItem={({ item }) => (
            <CartItem
              product={item}
              onLongPress={toggleDeleteList}
              callToPress={!!productListToDelete.length}
              isSelected={checkWhetherSelected(item)}
            />
          )}
          contentContainerStyle={{ paddingTop: 30, paddingBottom: 20, flex: 1 }}
          ListHeaderComponent={() => (
            <S.ListHeader>
              <S.ListHeaderText>{headerText}</S.ListHeaderText>
            </S.ListHeader>
          )}
        />
      </S.Container>
      <S.AmountContainer>
        <S.AmountDetailsText>Total</S.AmountDetailsText>
        <S.AmountText>{total}</S.AmountText>
      </S.AmountContainer>
    </React.Fragment>
  );
};

export default MyCart;
