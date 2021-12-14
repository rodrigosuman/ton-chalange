import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CartIcon from '../../components/CartIcon/CartIcon';
import MyCart from '../../screens/MyCart';
import ProductList from '../../screens/ProductList';
import screenNames from '../constants/screenNames';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.PRODUCT_LIST}
        component={ProductList}
        options={{
          title: '',
          headerRight: () => <CartIcon />,
        }}
      />
      <Stack.Screen
        name={screenNames.MY_CART}
        component={MyCart}
        options={{
          title: '',
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
