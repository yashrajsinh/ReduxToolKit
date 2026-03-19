/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//navigation
const Stack = createNativeStackNavigator();

//Screens
import ProductScreen from './src/screens/ProductsScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductScreen}
          options={{ title: 'Snekers Heaven 👟' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
