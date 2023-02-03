import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  overlayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 4,
    borderColor: colors.green,
    height: '6%',
    width: '25%',
  },
  text: {
    color: colors.green,
    fontWeight: 'bold',
  },
});

export default styles;
