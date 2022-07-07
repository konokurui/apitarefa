
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native';

export default function Pesquisar(){
function pesquisarPerso(){
  Alert.alert('Atenção', 'Estamos fora do ar.')
}
    return(
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Qual personagem se quer ver</Text>
      <TextInput
      placeholder='Digite um nome'
      style={estilo.textInput}
      />
      <TouchableOpacity style={estilo.botao} onPress={()=>pesquisarPerso()}>

        <Text style={estilo.textBotao}>Pesquisar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4816CE',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo:{
      fontSize: 25,
      color: '#FFC500',
      marginBottom:45 ,
      
    },

    textInput:{

      fontSize:15,
      height:'10%',
      borderRadius: 15,
      borderWidth:3,
      paddingHorizontal:36,

    },

    botao:{
      backgroundColor: '#FC085D',
      marginTop: 25,
      padding:10,
      borderRadius:15,
      width: '40%',

    },

    textBotao:{
     
      textAlign:'center',

    },
  });