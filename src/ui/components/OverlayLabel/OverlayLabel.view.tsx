import React from 'react';
import {Text, View} from 'react-native';
import overlays from '../../../constants/overlays';
import colors from '../../theme/colors';
import styles from './OverlayLabel.styles';

const overlayLabel = ({type}: {type: overlays}): JSX.Element => {
  const yes = type === overlays.YES;

  const customStyle = {
    ...styles.overlayContainer,
    borderColor: yes ? colors.green : colors.red,
  };

  const textStyle = {
    ...styles.text,
    color: yes ? colors.green : colors.red,
  };

  return (
    <View style={customStyle}>
      <Text style={textStyle}>{yes ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default overlayLabel;
