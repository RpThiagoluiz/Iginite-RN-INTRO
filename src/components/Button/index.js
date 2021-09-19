import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const Button = ({onPress, title}) => (
  <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
