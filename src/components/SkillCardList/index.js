import React from 'react';
import {SkillCard} from 'components/SkillCard';

export const SkillCardList = ({mySkills}) => {
  return mySkills.map(skill => <SkillCard skill={skill} />);
};
