import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Movements({ movimentacao }) {
  const ehReceita = movimentacao.type === 'receita';
  const [showValue, setShowValue] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 24,
      borderBottomWidth: 0.5,
      borderBottomColor: '#dadada',
      padding: 16,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 8,
    },
    date: {
      color: '#dadada',
      fontWeight: 'bold',
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    balance: {
      fontSize: 16,
      color: '#2ecc71',
      fontWeight: 'bold',
    },
    expenses: {
      fontSize: 16,
      color: '#e74c3c',
      fontWeight: 'bold',
    },
    skeleton: {
      marginTop: 6,
      width: 80,
      height: 10,
      backgroundColor: '#dadada',
      borderRadius: 8,
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{movimentacao.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{movimentacao.label}</Text>
        {
            showValue ? (
              <Text
                style={ehReceita ? styles.balance : styles.expenses}
              >
                {ehReceita ? 'R$' : '-R$'}
                {' '}
                {movimentacao.value}
              </Text>
            ) : (
              <View style={styles.skeleton} />
            )
        }
      </View>
    </TouchableOpacity>
  );
}

Movements.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movimentacao: PropTypes.object.isRequired,
};
