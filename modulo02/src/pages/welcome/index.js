import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import api from 'services/api';

import styles from './styles';

// Pode-se declarar a StatusBar também fora do conteúdo JSX:
// StatusBar.setBarStyle("light-content");

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    // shape é para objetos
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    loading: false,
    errorMessage: null,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;

    // Não prosseguir para a próxima tela caso o usuário não digite nenhum caractere:
    if (username.length === 0) return;

    this.setState({ loading: true });

    try {
      await this.checkUserExists(username);

      await this.saveUser(username);

      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'User' })],
      });

      // deixando desta forma, haverá um botão de voltar pra tela Welcome:
      // this.props.navigation.navigate('User');

      this.props.navigation.dispatch(resetAction);
    } catch (err) {
      this.setState({ loading: false, errorMessage: 'Usuário não encontrado!' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image style={styles.image} source={require('../../../resources/logo_github.png')} />
        <Text style={styles.title}>Bem-vindo(a)!</Text>
        <Text style={styles.text}>Para continuar, informe o nome do usuário no Github:</Text>
        {!!this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite o nome do usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {this.state.loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
