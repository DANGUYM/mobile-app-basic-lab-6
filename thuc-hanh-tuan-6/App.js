import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductScreen from './src/screens/ProductScreen';
import ChatScreen from './src/screens/ChatScreen';



// Tạo Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1BA9FF',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 24,
          },

        }}
      >
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ title: 'ProductScreen' }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'ChatScreen' }} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
