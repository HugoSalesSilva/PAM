import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import {StyleSheet, Text, TextInput, View, Image, Button, Alert} from 'react-native';

export default function App() {


  const [operacao, setOperacao] = useState("Soma");




 const[valor1,setValor1] = useState('')
  const [valor2,setValor2] = useState('')
  var [total,setTotal] = useState('')

  const conta=()=>{
    if (operacao=='Soma'){
      const  r = parseFloat(valor1) + parseFloat(valor2)
      setTotal(String(r))
    }
    if (operacao=='Subtração'){
      const  r = parseFloat(valor1) - parseFloat(valor2)
      setTotal(String(r))
    }
    if (operacao=='Multiplicação'){
      const  r = parseFloat(valor1) * parseFloat(valor2)
      setTotal(String(r))
    }
    if (operacao=='Divisão'){
      const  r = parseFloat(valor1) / parseFloat(valor2)
      setTotal(String(r))
    }
  }


  return (
    <View style={styles.container}>

    <View style={styles.bordar}>
        <TextInput
          placeholder={'valor1'}
          style={{height:40, width:'100%', borderWidth:1, borderRadius:10, marginTop:10, paddingLeft:5} }
          value={valor1}
          onChangeText={text=>setValor1(text)}
        />
          <TextInput
          placeholder={'valor2'}
          style={{height:40, width:'100%', borderWidth:1, borderRadius:10, marginTop:10, paddingLeft:5} }
          value={valor2}
          onChangeText={text=>setValor2(text)}
        />
    </View>

    
      <View style={styles.bordar}>
      <Text style={{marginTop:15}}>Operação</Text>
        <select
          value={operacao}
          onChange={text=>setOperacao(text.target.value)}
          style={{height:40, width:'100%', borderWidth:1, borderRadius:10, marginTop:5} }>
          <option value="Soma">Soma</option>
          <option value="Subtração">Subtração</option>
          <option value="Multiplicação">Multiplicação</option>
          <option value="Divisão">Divisão</option>
        </select>
      </View>

    <View style={styles.bordar}>
        <Text>Botão</Text>
        <Button
        title="Press me"
        color="#8d5bd0"
        onPress={conta}
      />

        
    </View>
    <View style={styles.bordar}>
    <Text style={{fontSize:30,}}>{total}</Text>
    </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bordar: {
    borderColor: '#000',
    borderWidth: 2,
    margin:10,
    padding: 5,
    
  },

});