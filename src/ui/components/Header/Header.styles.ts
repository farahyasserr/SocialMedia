import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import metrics from '../../theme/metrics';

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    width: metrics.screenWidth,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 24,
  },
  logo: {
    height: '70%',
    width: '40%',
  },
});

export default styles;
