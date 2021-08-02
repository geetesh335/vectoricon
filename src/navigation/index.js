import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/homeScreen';
import LoginScreen from '../screens/LoginScreen/loginScreen';
import registerScreen from '../screens/RegisterScreen/registerScreen';
import Logo from '../component/logo';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator  >
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{headerTitle:(props)=><Logo {...props}/>}}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={registerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
};

export default Navigator;
