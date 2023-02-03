import React from 'react';
import {Text, View} from 'react-native';
import overlays from '../../../constants/overlays';
import colors from '../../theme/colors';
import styles from './OverlayLabel.styles';

const YesOverlay = ({type}: {type: overlays}): JSX.Element => {
  return (
    <View style={styles.overlayContainer}>
      <Text style={styles.text}>{type === overlays.YES ? 'YES' : 'NO'}</Text>
    </View>
  );
};

export default YesOverlay;
