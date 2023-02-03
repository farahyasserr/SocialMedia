import React from 'react';
import {Image, View} from 'react-native';
import images from '../../../assets/images';
import styles from './Header.styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
      <Image source={images.menuIcon} resizeMode="contain" />
    </View>
  );
};

export default Header;
