import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Color from '../Color/Color'
import { userState } from '../Store/User/User'
const Home = ({ navigation }) => {
  const setUser = useSetRecoilState(userState)

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@account')
    setUser({})
    navigation.navigate('NotAuth')
  }

  return (
    <View
      style={{
        backgroundColor: Color.$backgroundLight,
        flex: 1
      }}
    >
      <Button title="log out" onPress={handleLogout}></Button>
    </View>
  )
}

export default Home
