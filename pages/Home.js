import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ImageBackground } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
        <ImageBackground style={estilo.fundo} source={require("../assets/jojo.gif")}>

        </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


 fundo:{
   
    width:500,
    height:650,


  }
});
