import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RecoilRoot } from 'recoil'
import Routes from './Routes/Routes'

export default function App() {
  const [loaded] = useFonts({
    'Poppins-regular': require('./assets/Font/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/Font/Poppins-Bold.ttf'),
    'Poppins-medium': require('./assets/Font/Poppins-Medium.ttf')
  })

  if (!loaded) {
    return null
  }
  return (
    <RecoilRoot>
      <View style={styles.root}>
        <Routes />
        <StatusBar barStyle="light-content" />
      </View>
    </RecoilRoot>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})
