import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import './config/ReactotronConfig';
import './config/DevToolsConfig';

import Header from 'components/Header';
import Post from 'components/Post';

export default class App extends Component {
  state = {
    posts: [
      { id: 0, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
      { id: 1, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
      { id: 2, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
      { id: 3, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
      { id: 4, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
      { id: 5, title: 'Aprendendo React Native', author: 'Ana Carolina Hernandes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sagittis lectus vitae condimentum. Mauris semper vestibulum dui. Etiam sapien risus, commodo eget nibh eu, aliquet congue erat. ' },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>{this.state.posts.map(post => <Post key={post.id} post={post} />)}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});
