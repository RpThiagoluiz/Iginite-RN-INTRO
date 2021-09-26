import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface Skill {
  id: string;
  name: string;
  date?: Date;
}

interface SkillData {
  skill: Skill;
  onPress: (event: GestureResponderEvent) => void;
}

export const SkillCard = ({skill, onPress}: SkillData) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} onPress={onPress}>
      <Text style={styles.textSkill}>{skill.name}</Text>
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
