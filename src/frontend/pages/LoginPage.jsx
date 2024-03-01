import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#6A5ACD',
      alignItems: 'center', // vertical
      justifyContent: 'center', // horizontal
    },
    container: {
      backgroundColor: '#dadada',
      width: 700,
      height: 700,
      borderRadius: 20,
      alignItems: 'center', // vertical
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
    <View id="page" style={styles.page}>
      <View id="container" style={styles.container}>
        <Text style={styles}>Login</Text>
      </View>
    </View>
  );
}
