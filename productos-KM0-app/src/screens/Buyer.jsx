import React from 'react'
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Chat from './Chat'
import { IndexBuyer } from '../modules/buyer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calendar from '../screens/Calendar'
import PerfilComprador from '../screens/Perfil'

const Buyer = () => {
  const Tab = createBottomTabNavigator()
  const withScreen = Dimensions.get('window').width
  const w = withScreen * 0.09
  return (
    <SafeAreaView style={ styles.container }>
      <Tab.Navigator
        initialRouteName='IndexBuyer'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#00A887',
          tabBarInactiveTintColor: '#FF8F15',
          tabBarLabelPosition: 'below-icon',
          tabBarStyle: {
            height: 90
          },
          tabBarLabelStyle: {
            fontSize: 18,
            marginBottom: 10,
            fontWeight: '500',
            fontFamily: 'Inter'
          }
        }}
      >
        <Tab.Screen
          name="IndexBuyer"
          component={IndexBuyer}
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarLabel: 'Calendario',
            tabBarIcon: ({ color, size }) => (
              <Icon name="calendar-outline" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Icon name="chatbox-ellipses-outline" size={35} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilComprador}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={35} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default Buyer

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
