import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// components imported
import Header from './src/components/Header'
import WeekContainer from './src/components/WeekContainer'
import BtnContainer from './src/components/BtnContainer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <WeekContainer />
        <BtnContainer />
      </View>
    );
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
