import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
} from 'react-native';

import {Button} from 'components/Button';
import {SkillCardList} from 'components/SkillCardList';
import {SkillCard} from 'components/SkillCard';

export const Home = () => {
  const [newSkill, setNewSkill] = useState(''); //null
  const [mySkills, setMySkills] = useState([]);
  const [grettings, setGrettings] = useState('');

  const handleAddNewSkill = () => {
    // para nao ficar um, array dentro de um array, vc espalha o estado anterio, uma vez q o estado anterior ja era um array.
    // Tbm pode setMySkills([...mySkills,newSkill]);
    setMySkills(oldState => [...oldState, newSkill]);
  };

  useEffect(() => {
    // Pegar A hora.
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGrettings('Good morning');
    } else if (currentHour <= 12 && currentHour < 18) {
      setGrettings('Good afternoon');
    } else {
      setGrettings('Good night');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Thiago</Text>
      <Text style={styles.grettings}>{grettings}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#999"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} title="Add" />

      <Text style={[styles.title, {marginVertical: 15}]}>My Skills</Text>

      {/* <ScrollView>
        <SkillCardList mySkills={mySkills} />
      </ScrollView> */}

      <FlatList
        // data recebe q colecao de dados.
        data={mySkills}
        // vector simples, sem obj, posso falar isso
        keyExtractor={item => item}
        // O que eu quero renderizar.
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,

    borderRadius: 7,
  },
  grettings: {
    color: '#fff',
  },
});
