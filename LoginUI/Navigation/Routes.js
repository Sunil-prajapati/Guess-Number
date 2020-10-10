import React,{useContext,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../Navigation/AuthStack';

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
}

export default Routes;