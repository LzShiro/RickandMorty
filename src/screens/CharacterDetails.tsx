import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Character } from '../types';

const CharacterDetails = (props: {
  route: { params: { result: Character } };
}) => {
  const { route } = props;
  const { name, gender, location, status, species, image } =
    route.params.result;

  return (
    <ImageBackground
      source={require('../../assets/RickAndMorty.jpeg')}
      style={styles.background}
    >
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Gender: {gender}</Text>
      <Text style={styles.text}>Location: {location.name}</Text>
      <Text style={styles.text}>Status: {status} </Text>
      <Text style={styles.text}>Species: {species}</Text>
      <Image style={styles.image} source={{ uri: image }} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    borderRadius: 10,
    width: 200,
    height: 200,
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  background: {
    flex: 1,
  },
});

export default CharacterDetails;
