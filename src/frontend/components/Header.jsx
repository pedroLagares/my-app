import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold', // negrito

  },
  buttonUser: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function Header({ nome }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{nome}</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.propTypes = {
  nome: PropTypes.string.isRequired,
};
