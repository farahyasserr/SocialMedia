import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../../assets/images';
import styles from './Header.styles';

const Header = (): JSX.Element => {
  const x = 1;
  return (
    <View style={styles.headerContainer}>
      <Image source={images.logo} style={styles.logo} resizeMode="contain" />
      <TouchableOpacity>
        <Image source={images.menuIcon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
