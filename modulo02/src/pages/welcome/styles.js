import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    // o 'stretch' faz com que os componentes ocupem sempre a largura total!
  },

  image: {
    alignSelf: 'center',
    marginBottom: metrics.basePadding,
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.light,
    lineHeight: 21,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  form: {
    marginTop: metrics.baseMargin,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },

});

export default styles;
