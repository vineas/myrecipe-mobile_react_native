import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from '../navigation/MainContainer'
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import BottomNav from '../components/bottomnav';


const Main = () => {
  return (
    <NavigationContainer independent={true}>
      <MainContainer />
    </NavigationContainer>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})