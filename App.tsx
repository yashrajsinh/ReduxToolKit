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

//Store
import { ProductStore } from './src/store/ProductStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ProductStore}>
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
