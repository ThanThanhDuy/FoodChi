import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TabRoutes from './Routes/Tab/TabRoutes'
import Home from './Screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Favorite from './Screens/Favorite'
import Login from './Screens/Login'

import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    'Poppins-regular': require('./assets/Font/Poppins-Regular.ttf'),
    'Poppins-bold': require('./assets/Font/Poppins-Bold.ttf'),
    'Poppins-medium': require('./assets/Font/Poppins-Medium.ttf')
  })
  if (!loaded) {
    return null
  }
  return <Login />
}

const styles = StyleSheet.create({})
