import { StyleSheet } from 'react-native';

import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'stretch',
    backgroundColor: colors.secondary,
    flex: 1,
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
  },
  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  text: {
    color: colors.light,
    fontSize: 15,
    lineHeight: 21,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
