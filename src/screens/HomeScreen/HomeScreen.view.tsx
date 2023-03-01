import React from 'react';
import {View} from 'react-native';
import CardsStack from './blocks/CardsStack/CardsStack.view';
import styles from './HomeScreen.styles';

const HomeScreen = (): JSX.Element => {
  let y = 1;
  return (
    <View style={styles.mainContainer}>
      <CardsStack />
    </View>
  );
};

export default HomeScreen;
