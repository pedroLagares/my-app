import React, { useState } from 'react';
import axios from 'axios';

import {
  Alert, StyleSheet, Text, View,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function LoginPage() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#63C2D1',
      alignItems: 'center', // vertical
      justifyContent: 'center', // horizontal
    },
    container: {
      backgroundColor: '#dadada',
      width: 400, // muda com a resolução do monitor
      height: 400,
      borderRadius: 20,
      alignItems: 'center', // vertical
      paddingTop: 25,
    },
    title: {
      fontSize: 50,
      fontWeight: 'bold',
      margin: 14,
    },
    campoContainer: {
      marginTop: 60,
      alignItems: 'center',
      flex: 1,
    },
    campo: {
      width: 200,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 3,
      margin: 5,
      padding: 5,
    },
  });

  const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    axios.post('http://seu-servidor:3000/saveText', { text })
      .then((response) => {
        Alert.alert('Sucesso', response.data.message);
      })
      .catch((error) => {
        Alert.alert('Erro', 'Erro ao salvar o texto');
        console.error('Erro ao salvar o texto:', error);
      });
  };

  return (
    <View id="page" style={styles.page}>
      <View id="container" style={styles.container}>
        <Text style={styles.title}>myApp</Text>

        <View style={styles.campoContainer}>
          <TextInput
            style={styles.campo}
            onChangeText={handleInputChange}
            value={text}
            placeholder="E-mail"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.campo}
            onChangeText={handleInputChange}
            value={text}
            placeholder="Senha"
            placeholderTextColor="grey"
          />

          <TouchableOpacity
            style={{
              backgroundColor: '#63C2D1', // Definindo a cor de fundo do botão
              padding: 10,
              alignItems: 'center',
              borderRadius: 3,
              marginTop: 5,
              width: 200,
              height: 40,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: 'white', fontSize: 16 }}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
