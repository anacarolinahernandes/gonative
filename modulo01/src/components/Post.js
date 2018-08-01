import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Post = props => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{props.post.title}</Text>
    <Text style={styles.postAuthor}>{props.post.author}</Text>
    <Text style={styles.postContent}>{props.post.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  post: {
    padding: 20,
    backgroundColor: '#FFF',
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },

  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },

  postAuthor: {
    color: '#999999',
    paddingBottom: 15,
  },

  postContent: {
    color: '#666666',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,

  },
});

export default Post;
