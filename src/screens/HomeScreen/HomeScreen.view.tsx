import React from 'react';
import {Text, View} from 'react-native';
import CardsStack from './blocks/CardsStack/CardsStack.view';
import styles from './HomeScreen.styles';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <CardsStack />
    </View>
  );
};

export default HomeScreen;
