import React from 'react';
import {ImageBackground, ImageSourcePropType, Text} from 'react-native';
import styles from './CardItem.styles';

type item = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

const CardItem = ({item}: {item: item}): JSX.Element => {
  return (
    <ImageBackground
      source={item.image}
      style={styles.backgroundImage}
      resizeMode="cover">
      <Text style={styles.text}>{item.name}</Text>
    </ImageBackground>
  );
};

export default CardItem;
