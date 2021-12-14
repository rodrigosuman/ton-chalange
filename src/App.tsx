import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import AppStack from './navigation/AppStack/AppStack';
import store from './redux-store';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
