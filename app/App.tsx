import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './navigation';
import {store} from './store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </Provider>
);

export default App;
