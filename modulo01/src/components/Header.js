import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>GoNative App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 70 : 50,
    paddingTop: Platform.OS === 'ios' ? 30 : 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
});
