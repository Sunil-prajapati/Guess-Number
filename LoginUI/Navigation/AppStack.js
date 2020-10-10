import React from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}