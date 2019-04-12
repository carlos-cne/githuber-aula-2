import { StyleSheet } from 'react-native';
import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },
  container: {
    backgroundColor: colors.lighter,
    flex: 1,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
