import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Character } from '../types';

const CharacterDetails = (props: {
  route: { params: { result: Character } };
}) => {
  const { route } = props;
  const { name, gender, location, status, species, image } =
    route.params.result;

  return (
    <View>
      <Text style={styles.text}>Name: {name}</Text>
      <Text style={styles.text}>Gender: {gender}</Text>
      <Text style={styles.text}>Location: {location.name}</Text>
      <Text style={styles.text}>Status: {status} </Text>
      <Text style={styles.text}>Species: {species}</Text>
      <Image style={styles.image} source={{ uri: image }} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  text: {
    alignSelf: 'center',
  },
});

export default CharacterDetails;
