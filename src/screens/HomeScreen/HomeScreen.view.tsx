import React from 'react';
import {Text, View} from 'react-native';
import styles from './HomeScreen.styles';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
