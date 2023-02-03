import {StyleSheet} from 'react-native';
import colors from '../../../../ui/theme/colors';

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    margin: 20,
    color: colors.white,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
});

export default styles;
