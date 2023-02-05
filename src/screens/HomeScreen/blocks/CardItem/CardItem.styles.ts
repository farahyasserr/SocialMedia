import {StyleSheet} from 'react-native';
import colors from '../../../../ui/theme/colors';
import fonts from '../../../../ui/theme/fonts';

const styles = StyleSheet.create({
  text: {
    textAlign: 'left',
    margin: 20,
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 22,
    shadowColor: colors.grey,
    backgroundColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
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
