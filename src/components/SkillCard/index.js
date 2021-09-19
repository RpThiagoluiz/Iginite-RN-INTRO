import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export const SkillCard = ({skill}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    alignItems: 'center',
  },
  textSkill: {
    color: ' #fff',
    fontSize: 22,
    fontWeight: 'bold',
    borderRadius: 15,
  },
});
