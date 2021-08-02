import React from 'react';
import {View, Text, Button, SafeAreaView,StyleSheet, StatusBar} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View >
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text> light screeen</Text>
      <Button
        title="go to LoginScreen"
        onPress={() => navigation.navigate('Login')}
      />
     
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
       flex:1,justifyContent:'center',alignItems:'center'
    }
})
export default HomeScreen;
