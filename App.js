import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Calculator1 from './components/calculator';


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>welcome</Text>
        <Calculator1 />
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
