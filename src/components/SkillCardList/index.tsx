import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {SkillCard} from '../../components/SkillCard';

interface Skill {
  id: string;
  name: string;
  date?: Date;
}

interface SkillsData {
  mySkills: Skill[];
  onPress: (event: GestureResponderEvent) => void;
}

export const SkillCardList = ({mySkills, onPress}: SkillsData) => {
  return mySkills.map(skill => <SkillCard skill={skill} onPress={onPress} />);
};
