/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//navigation
const Stack = createNativeStackNavigator();

//Screens
import ProductScreen from './src/screens/ProductsScreen';

import { Provider } from 'react-redux';
//Store
import { store } from './src/store/ProductStore';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ProductScreen}
            options={{ title: 'Snekers Heaven 👟' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
