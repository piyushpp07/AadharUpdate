import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import { Button } from 'react-native';
import Home from './components/Home';
import ChangeAddr from './components/ChangeAddr';
const Stack = createNativeStackNavigator();

function Navigation() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="ChangeAddress" component={ChangeAddr} options={{
               title: ""
               ,

            }} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default Navigation;