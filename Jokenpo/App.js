import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './estilos/styles.js';
import { useFonts } from 'expo-font';

  

  
  

var pMaq=0, pJog=0
var resultado;
var reset;

export default function App() {
  const [img, setImg] = useState(0)
  const [jogador, setJogador] = useState(0)
  const [maquina, setMaquina] = useState(0)
  const [loaded] = useFonts({
    PokemonSolid: require('./assets/fonts/pokemon-solid.ttf'),
  });

  if (!loaded) {
    return null;
  }


   if (jogador == 1 && maquina == 2 || jogador == 2 && maquina == 3 || jogador == 3 && maquina == 1) {
    pMaq=pMaq+1
    resultado=<Image source={require('./assets/Perdeu.png')} style={styles.img4} />
  } else if (jogador == 2 && maquina == 1 || jogador == 3 && maquina == 2 || jogador == 1 && maquina == 3) {
    pJog=pJog+1
    resultado=<Image source={require('./assets/Ganhou.png')} style={styles.img4} />
  } else if (reset && jogador==maquina) {
    resultado=<Image source={require('./assets/Empate.png')} style={styles.img4} />
  }
  

  function exibirimagem(numero) {
    if (numero == 1) {
      return (<Image source={require('./assets/R.png')} style={styles.buttonImageIconStyle2} />)
    } else if (numero == 2) {
      return (<Image source={require('./assets/S.png')} style={styles.buttonImageIconStyle2} />)
    }
    else if (numero == 3) {
      return (<Image source={require('./assets/B.png')} style={styles.buttonImageIconStyle2} />)

    } else if (numero == 0) {
      return (<Image source={require('./assets/po.png')} style={styles.buttonImageIconStyle} />)
    }

  }

  function novoJogo(){
    setImg(0);
    setJogador(0);
    setMaquina(0);
    reset=false
    resultado=''
  }


  function jogar(jogada) {
    if(!reset){
     setJogador(jogada)
      setMaquina(Math.floor(Math.random() * 3 + 1))
    }
    reset=true
  }

  function exibirimagemComp(numero) {
    if (numero == 1) {
      return (<Image source={require('./assets/R.png')} style={styles.buttonImageIconStyle} />)
    } else if (numero == 2) {
      return (<Image source={require('./assets/S.png')} style={styles.buttonImageIconStyle} />)
    }
    else if (numero == 3) {
      return (<Image source={require('./assets/B.png')} style={styles.buttonImageIconStyle} />)

    } else if (numero == 0) {
      return (<Image source={require('./assets/po.png')} style={styles.buttonImageIconStyle} />)
    }

  }




  return (
    <View style={{ flex: 1 }}>
    <ImageBackground source={require('./assets/fundo.png')} style={styles.buttonImageIconStyle3}>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Image source={require('./assets/pokepopng.png')} style={styles.img} />
        
      </View>

      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./assets/placar.png')} style={styles.img2} />
    </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
        <Text style={{ fontFamily:'PokemonSolid',fontSize:20,fontWeight:'bold' }}>{pJog}</Text>
        <Text style={{ fontFamily:'PokemonSolid',fontSize:20,fontWeight:'bold' }}>{pMaq}</Text>
      </View>

      

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

        {exibirimagem(jogador)}
        <Image
          source={require('./assets/VSP.png')}
          style={styles.buttonImageIconStyle}
        />
        {exibirimagemComp(maquina)}

      </View>

      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
        <Text style={{ fontFamily:'PokemonSolid', color:'#yellow',fontSize:18 }}>{resultado}</Text>

      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
        <TouchableOpacity  onPress={() => novoJogo()}> 
          <View style={styles.btnArea}>
          <Image source={require('./assets/nova partida.png')} style={styles.img3} />
          </View>
        </TouchableOpacity>

      </View>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5} onPress={() => jogar(1)}>
          <Image
            source={require('./assets/R.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity >
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5} onPress={() => jogar(3)}>
          <Image
            source={require('./assets/B.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5} onPress={() => jogar(2)}>
          <Image
            source={require('./assets/S.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>



  );
}

