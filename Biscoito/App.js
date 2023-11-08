import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
const [impressao, setImpressao] = useState("")
const [img, setImg] = useState(0)

const frases = [
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso é a menor distância entre duas pessoas.',
];

function quebrar(){
  if(img == 0){
    let numAleatorio = Math.floor(Math.random() * frases.length) ;
    setImpressao(frases[numAleatorio])
    setImg(1)
  }
}

function novo () {
  setImpressao(frases[''])
  setImg(0)
}

function exibirimagem(numero){
  if(numero==0){
    return(<Image source={require('./assets/biscoito.png')} style={styles.img}/>)
  }else{
    return(<Image source={require('./assets/biscoitoAberto.png')} style={styles.img}/>)
  }
}

    

      return (
        <View style={{backgroundColor: 'brown', flex:1}}>
          <View style={{flex:1, backgroundColor: '#dea137'}}>
            <Text style={styles.menu}>Biscoito da Sorte</Text>
          </View>

          <View style={{flex:5, backgroundColor: 'brown', alignItems: 'center', justifyContent: 'center', marginTop: '160px'}}>
            {exibirimagem(img)}
          </View>

          <View style={{height: '10%', backgroundColor: 'brown', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.textoFrase}>{impressao}</Text>
          </View>

          <View style={{flex:5, backgroundColor: 'brown', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar BIscoito</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
              <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Novo Biscoito</Text>
              </View>
            </TouchableOpacity>
            </View>
        </View>
        

      );
    }
 


const styles = StyleSheet.create({
  menu:{
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    textAlign:'center',
    fontStyle:'italic',
    marginTop:6,
    marginBottom:2
  },
  img:{
    height:230,
    width:230,
    shadowColor: '#171717',
    shadowOffset: {width: -4, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  textoFrase:{
    fontSize:20,
    color:'#dea137',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dea137',
    borderRadius:25,
    margin:10
  },
  btnArea:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto:{
    color:'#ffb940',
    fontSize:18,
    fontWeight:'bold'
  }


});
