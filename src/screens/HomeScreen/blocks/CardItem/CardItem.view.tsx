import React from 'react';
import {ImageBackground, ImageSourcePropType, Text} from 'react-native';
import styles from './CardItem.styles';

type item = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

const CardItem = ({item}: {item: item}): JSX.Element => {
  //width / height
  return (
    <ImageBackground
      source={{uri: 'https://picsum.photos/400/700'}}
      style={styles.backgroundImage}
      resizeMode="cover">
      <Text style={styles.text}>{item.name}</Text>
    </ImageBackground>
  );
};

export default CardItem;
