import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import { NavigationContainer } from '@react-navigation/native'

import Buyer from '../screens/Buyer'
import Calendar from '../screens/Calendar'
import Chat from '../screens/Chat'
import Perfil from '../screens/Perfil'
import Icon from 'react-native-vector-icons/Ionicons'

// const TopTab = createMaterialTopTabNavigator()
const Tab = createBottomTabNavigator()

// function TopTaps () {
//   return (
//     <TopTab.Navigator
//       initialRouteName='HomeProductor'
//     >
//       <TopTab.Screen
//         name="HomeProductor"
//         component={Buyer}
//       />
//       <TopTab.Screen
//         name="Chat"
//         component={Chat}
//       />
//     </TopTab.Navigator>
//   )
// }
function Tabs () {
  return (
    <Tab.Navigator
      initialRouteName='Comprador'
      screenOptions={{
        tabBarActiveTintColor: '#2EC691',
        tabBarStyle: { height: '10%' }
      }}
    >
      <Tab.Screen
        name="Comprador"
        component={Buyer}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={50} color={color} />
          ),
          tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: -15 },
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-outline" size={50} color={color} />
          ),
          tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: -15 }
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbox-ellipses-outline" size={50} color={color} />
          ),
          tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: -15 }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={50} color={color} />
          ),
          tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: -15 }
        }}
      />
    </Tab.Navigator>
  )
}

export default function Navigation () {
  return (
      <Tabs />
  )
}
