import React, { useState } from 'react';
import axios from 'axios';

import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
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
    button: {
      backgroundColor: '#63C2D1', // Definindo a cor de fundo do botão
      padding: 10,
      alignItems: 'center',
      borderRadius: 3,
      marginTop: 5,
      width: 200,
      height: 40,
    },
  });

  const navigation = useNavigation();

  const [usuario, setUsuario] = useState({
    email: '',
    senha: '',
  });

  const handleInputChange = (fieldName, value) => {
    setUsuario((user) => ({
      ...user,
      [fieldName]: value,
    }));
  };

  const register = () => {
    axios.post('http://localhost:3000/usuario/register', { usuario })
      .then((response) => {
        console.log(response);
        toast.success('Usuário registrado com sucesso!');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Erro: ');
      });
  };

  const login = () => {
    axios.post('http://localhost:3000/usuario/login', usuario)
      .then((response) => {
        console.log(response);
        navigation.navigate('HomeScreen');
      })
      .catch((error) => console.log(error));
  };

  return (
    <View id="page" style={styles.page}>
      <View id="container" style={styles.container}>
        <Text style={styles.title}>myApp</Text>

        <View style={styles.campoContainer}>
          <TextInput
            style={styles.campo}
            onChangeText={(email) => handleInputChange('email', email)}
            value={usuario.email}
            placeholder="E-mail"
            placeholderTextColor="grey"
          />

          <TextInput
            style={styles.campo}
            onChangeText={(senha) => handleInputChange('senha', senha)}
            value={usuario.senha}
            placeholder="Senha"
            placeholderTextColor="grey"
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={login}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={register}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ToastContainer />
    </View>
  );
}
