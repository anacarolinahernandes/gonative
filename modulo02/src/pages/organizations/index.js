import React, { Component } from 'react';
import api from 'services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, AsyncStorage, ActivityIndicator, FlatList } from 'react-native';

import styles from './styles';

export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`users/${username}/orgs`);

    this.setState({ data: response.data, loading: false });
  };

  renderListItem = ({ item }) => <Text>{item.login}</Text>;

  renderList = () => (
    <FlatList data={this.state.data} keyExtractor={item => item.id.toString()} renderItem={this.renderListItem} />
  );

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
