import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import Color from '../Color/Color'
import Logo from '../Constants/Logo'

import { userAuthState, userState } from '../Store/User/User'

import { ActivityIndicator } from 'react-native-paper'
const OpenScreen = ({ navigation }) => {
  //loading app
  const [loaded, setLoaded] = useState(false)
  //set user global
  const setUser = useSetRecoilState(userState)

  useEffect(() => {
    const getUser = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@account')
        let jsonAccount = JSON.parse(jsonValue)

        if (!jsonAccount) {
          setTimeout(() => {
            navigation.navigate('NotAuth')
            setLoaded(true)
          }, 3000)
        } else {
          setTimeout(() => {
            navigation.navigate('Auth')
            setUser(jsonAccount.payload.user)
            setLoaded(true)
          }, 3000)
        }
      } catch (e) {
        // console.log(e)
      }
    }
    getUser()
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.loginLogo} source={Logo} />
      <Text style={styles.loginTitle}>
        F<Text style={styles.titleO1}>o</Text>
        <Text style={styles.titleO2}>o</Text>dChi
      </Text>
      {!loaded && (
        <ActivityIndicator animating={true} color={Color.$btnGreen} size={30} />
      )}
    </View>
  )
}

export default OpenScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.$backgroundLight,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginLogo: {
    width: 120,
    height: 120,
    overflow: 'visible'
  },
  loginTitle: {
    fontSize: 40,
    fontFamily: 'Poppins-medium',
    color: Color.$textBasicLight
  },
  titleO1: {
    fontFamily: 'Poppins-bold',
    color: Color.$textOrange
  },
  titleO2: {
    fontFamily: 'Poppins-bold',
    color: Color.$textGreen
  }
})
