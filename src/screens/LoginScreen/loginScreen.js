import React from 'react';
import {View,StyleSheet, Text, SafeAreaView, StatusBar, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container,{backgroundColor:'#ecf0f1'}]}>
      <StatusBar  backgroundColor="#ecf0f1" />
      <Text>this is loginScreen</Text>
      <Button
        title="go to Register screen"
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container:{
       flex:1,justifyContent:'center',alignItems:'center'
    }
})
export default LoginScreen;
