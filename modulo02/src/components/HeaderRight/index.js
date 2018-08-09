import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { PropTypes } from 'prop-types';

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signOut = async () => {
    await AsyncStorage.clear();

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Welcome' })],
    });

    // deixando desta forma, haverá um botão de voltar pra tela Welcome:
    // this.props.navigation.navigate('User');

    this.props.navigation.dispatch(resetAction);
  }


  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
