import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 3,
  // Verificar se a tela está em landscape ou portrait:
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
