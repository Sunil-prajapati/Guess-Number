import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from '../Screens/OnBoardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';

import { AsyncStorage } from 'react-native';
import { Value } from 'react-native-reanimated';

const AppStack = createStackNavigator();

const AuthStack = () =>{
  const [isFirstLaunch,setIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(Value => {
      if(Value == null){
        AsyncStorage.setItem('alreadyLaunched','true');
        setIsFirstLaunch(true);
      }else{
        setIsFirstLaunch(false);
      }
    })
  },[]);

  if(isFirstLaunch === null){
    return null;
  }else if(isFirstLaunch === true){
        routeName = 'Onboarding';
  }else{
    routeName = 'Login';
  }

  return (
    
      <AppStack.Navigator initialRouteName={routeName}>
        <AppStack.Screen 
        name="Onboardig" 
        component={OnboardingScreen}
        options={{header:() => null}} 
        />
        <AppStack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{header:() => null}}
        />
        <AppStack.Screen 
        name="Signup" 
        component={SignupScreen}
        options={({navigation}) => ({
          title:'',
          headerStyle:{
            backgroundColor:'#f9fafd',
            shadowColor:'#f9fafd',
            elevation:0
          }
        })}
        />
      </AppStack.Navigator>
    
  );
  
}

export default AuthStack;
