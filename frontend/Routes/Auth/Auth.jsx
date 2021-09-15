import React from 'react'
import { StyleSheet } from 'react-native'
//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//icons
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
//component
import Home from '../../Screens/Home'
import Favorite from '../../Screens/Favorite'
//init Tab
const Tab = createBottomTabNavigator()
//color
import Color from '../../Color/Color'
const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Home') {
            return (
              <Feather
                name="home"
                size={24}
                color={focused ? Color.$textGreen : Color.$textBasicLight}
              />
            )
          } else if (route.name === 'Favorite') {
            return (
              <Feather
                name="heart"
                size={24}
                color={focused ? Color.$textGreen : Color.$textBasicLight}
              />
            )
          } else if (route.name === 'Menu') {
            return (
              <Feather
                name="grid"
                size={24}
                color={focused ? Color.$textGreen : Color.$textBasicLight}
              />
            )
          } else if (route.name === 'Ads') {
            return (
              <Feather
                name="gift"
                size={24}
                color={focused ? Color.$textGreen : Color.$textBasicLight}
              />
            )
          } else if (route.name === 'Cart') {
            return (
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? Color.$textGreen : Color.$textBasicLight}
              />
            )
          }
        },
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        tabBarLabel: () => {
          return null
        },
        tabBarStyle: styles.tab
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Menu" component={Favorite} />
      <Tab.Screen name="Ads" component={Favorite} />
      <Tab.Screen name="Cart" component={Favorite} />
    </Tab.Navigator>
  )
}

export default TabRoutes

const styles = StyleSheet.create({
  tab: {
    height: 70,
    backgroundColor: Color.$backgroundLight,
    paddingBottom: 10,
    borderTopWidth: 0
  }
})
