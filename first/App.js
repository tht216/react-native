/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.purple, styles.box]}>
        <Text>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.blue, styles.box]}>
        <Text>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.green, styles.box]}>
        <Text>Green: #96CC96</Text>
      </View>
      <View style={[styles.yellow, styles.box]}>
        <Text>Yellow: #F4B940</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 10,
    borderRadius: 10,
  },
  purple: {
    backgroundColor: '#C9C9FF',
  },
  blue: {
    backgroundColor: '#3D85C6',
  },
  green: {
    backgroundColor: '#96CC96',
  },
  yellow: {
    backgroundColor: '#F4B940',
  },
});

export default App;
