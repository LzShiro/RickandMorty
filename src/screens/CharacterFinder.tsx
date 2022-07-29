import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Character } from '../types';

const api_URL = 'https://rickandmortyapi.com/api/character/?name=';

const CharacterFinder = ({ navigation }: { navigation: any }) => {
  const [text, setText] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);

  const onPress = useCallback(() => {
    fetch(`${api_URL}${text}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, [text, fetch, api_URL]);

  return (
    <ImageBackground
      source={require('../../assets/RickAndMortyHistory.jpeg')}
      style={styles.backgroudView}
    >
      <TextInput
        style={styles.textInput}
        placeholder="Write here the character you want to search"
        placeholderTextColor="white"
        textAlign="center"
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Find character</Text>
      </TouchableOpacity>
      <FlatList
        style={{ flex: 1 }}
        data={characters}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.buttonHistory}
            onPress={() => {
              navigation.navigate('CharacterDetails', { result: item });
              setText('');
            }}
          >
            <Text style={styles.textList}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
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
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    opacity: 1,
    letterSpacing: 0.25,
  },
  textInput: {
    height: 40,
    backgroundColor: 'rgba(60,60,60,.5)',
    color: 'white',
    opacity: 1,
  },
  textList: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: 'bold',
    opacity: 1,
  },
  buttonHistory: {
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
  },
  backgroudView: {
    backgroundColor: 'grey',
    flex: 1,
    opacity: 0.8,
  },
});

export default CharacterFinder;
