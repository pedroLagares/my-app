import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '150,00',
    date: '10/02/2024',
    type: 'despesa',
  },
  {
    id: 2,
    label: 'Pix do Shimizu',
    value: '999,00',
    date: '14/01/2024',
    type: 'receita',
  },
  {
    id: 3,
    label: 'Salário',
    value: '10.050,00',
    date: '06/02/2024',
    type: 'receita',
  },
];

export default function HomePage() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dadada',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      margin: 14,
    },
    list: {
      marginStart: 14,
      marginEnd: 14,
      backgroundColor: '#fafafa',
      borderRadius: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Header nome="Pedro Lagares" />

      <Balance saldo="15.534,54" despesas="-390,43" />

      <Actions />

      <Text style={styles.title}>
        Ultimos gastos
      </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)} // chave do flatlist tem que ser string
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements movimentacao={item} />}
      />

    </View>
  );
}
