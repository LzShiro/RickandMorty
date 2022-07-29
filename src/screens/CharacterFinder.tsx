import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import { Character } from '../types';

const api_URL = 'https://rickandmortyapi.com/api/character';

const CharacterFinder = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch(api_URL)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Escribe aquí el personaje que deseas buscar"
        textAlign="center"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          let result = characters.find((element) => element.name === text);
          if (result === undefined) {
            Alert.alert('Character not found');
            setText('');
          } else {
            navigation.navigate('CharacterDetails', { result: result });
          }
        }}
      >
        <Text style={styles.buttonText}>Find character</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    marginBotton: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  textInput: {
    height: 40,
  },
});

export default CharacterFinder;
