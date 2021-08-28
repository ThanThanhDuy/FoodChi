import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import OpenScreen from '../Screens/OpenScreen'
import NotAuth from './NotAuth/NotAuth'
import Auth from './Auth/Auth'
import { useRecoilValue } from 'recoil'
import { userAuthState } from '../Store/User/User'

const Root = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="OpenScreen"
      >
        <Root.Screen
          name="OpenScreen"
          component={OpenScreen}
          options={{ gestureEnabled: false }}
        />
        <Root.Screen
          name="NotAuth"
          component={NotAuth}
          options={{ gestureEnabled: false }}
        />
        <Root.Screen
          name="Auth"
          component={Auth}
          options={{ gestureEnabled: false }}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Routes
