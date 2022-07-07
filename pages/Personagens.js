import { StatusBar } from 'expo-status-bar';
import {Text,View,StyleSheet,FlatList,TouchableOpacity,Image} from 'react-native';
import { useState , useEffect} from 'react';
import Api from '../pages/Api';



export default function Personagens() {

  const [dadosPerso,setdadosPerso] = useState([]);
  async function getPerso(){
    try{
      const resultado = await Api.get(`/jojo`);
      return resultado.data

    }catch(error){
      console.log(error)
      return []
    }
  }


useEffect(async() => {
  const resp = await getPerso()
  setdadosPerso(resp);
},[]);




    return(
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Lista de Personagens</Text>

      <FlatList

      data={dadosPerso}
      keyExtractor={dadosPerso => dadosPerso.id}
      renderItem={({item})=>
      <TouchableOpacity>

     
        
      <View style={estilo.grupoPerso}>
 
          <Image style={estilo.imagemPerso1} source={require('../assets/kira.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.kira}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habikira}</Text>

         
         
      </View>

      <View style={estilo.grupoPerso}>

      <Image style={estilo.imagemPerso2} source={require('../assets/jotaro.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.jotaro}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habijotaro}</Text>

      </View>
      <View style={estilo.grupoPerso}>

      
          <Image style={estilo.imagemPerso3} source={require('../assets/dio.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.dio}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habidio}</Text>

      </View>

      <View style={estilo.grupoPerso}>
          <Image style={estilo.imagemPerso4} source={require('../assets/funny.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.funny}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habifunny}</Text>
      </View>

      <View style={estilo.grupoPerso}>
          <Image style={estilo.imagemPerso5} source={require('../assets/pucci.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.pucci}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habipucci}</Text>
      </View>

      <View style={estilo.grupoPerso}>
          <Image style={estilo.imagemPerso6} source={require('../assets/diavolo.jpg')}/>
          <Text style={estilo.textoBotaoPerso}>{item.diavolo}</Text>
          <Text style={estilo.textoBotaoHabi}>{item.habidiavolo}</Text>
      </View>
      
      </TouchableOpacity>
      
    }

      />

      <StatusBar style="auto" />
    </View>
    );
}



const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },

    titulo:{
      fontSize:30,
      color:'red',
      textAlign:'center',
      justifyContent:'center',
      marginVertical:30,
    },
    textoBotaoPerso:{
      fontSize:20,
    },
    textoBotaoHabi:{
      fontSize:20,
    },

    grupoPerso:{
      backgroundColor:'blue',
      margin: 10,
      padding: 5,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',

    },

    botaoPerso:{

    },

    imagemPerso1:{
     
      width: 300,
      height: 300,
   
    },
    imagemPerso2:{
     
      width: 300,
      height: 300,
   
      

    
    },
    imagemPerso3:{
     
      width: 300,
      height: 300,
   
      

    
    },
    imagemPerso4:{
     
      width: 300,
      height: 300,
   
      

    
    },
    imagemPerso5:{
     
      width: 300,
      height: 300,
   
      

    
    },
    imagemPerso6:{
     
      width: 300,
      height: 300,
   
      

    
    }

  })