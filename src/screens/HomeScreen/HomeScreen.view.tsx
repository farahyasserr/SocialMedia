import React from 'react';
import {View} from 'react-native';
import CardsStack from './blocks/CardsStack/CardsStack.view';
import styles from './HomeScreen.styles';

const HomeScreen = (): JSX.Element => {
  let x = 'last test';
  return (
    <View style={styles.mainContainer}>
      <CardsStack />
    </View>
  );
};

export default HomeScreen;
