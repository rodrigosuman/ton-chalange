import React from 'react';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/ProductCard';
import useSelector from '../../hooks/useSelector';
import { toogleProductCart } from '../../redux-store/actions/cart';
import { asyncGetAllProducts } from '../../redux-store/actions/products';
import { TProduct } from '../../redux-store/reducers/products/types';
import * as S from './styles';

const ProductList: React.FC = () => {
  const { data: products, isLoading } = useSelector(state => state.products);
  const cart = useSelector(state => state.cart.data);
  const dispatch = useDispatch();

  const dispatchAsycGetAllProducts = React.useCallback(() => {
    dispatch(asyncGetAllProducts());
  }, [dispatch]);

  const handleOnProductCardPress = React.useCallback(
    (product: TProduct) => {
      dispatch(toogleProductCart(product));
    },
    [dispatch],
  );

  const productIsSelected = React.useCallback(
    (product: TProduct) => {
      return !!cart.find(item => item.id === product.id);
    },
    [cart],
  );

  React.useEffect(() => {
    dispatchAsycGetAllProducts();
  }, [dispatchAsycGetAllProducts]);

  return (
    <S.Container>
      <FlatList
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={handleOnProductCardPress}
            isSelected={productIsSelected(item)}
          />
        )}
        data={products}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <S.ItemSeparator />}
        ListFooterComponent={() => <S.Footer />}
        contentContainerStyle={{ padding: 15 }}
        refreshing={isLoading}
        onRefresh={dispatchAsycGetAllProducts}
      />
    </S.Container>
  );
};

export default ProductList;
