import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Registration from '../screens/registration';
import Login from '../screens/login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false,}} name="splash" component={Splash} />
                <Stack.Screen options={{ headerShown: false,}} name='login' component={Login}/>
                <Stack.Screen options={{ headerShown: false,}} name='register' component={Registration}/>
                <Stack.Screen options={{ headerShown: false,}} name='home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;