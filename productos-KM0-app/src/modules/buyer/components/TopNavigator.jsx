import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Productors from '../Productors'
import Mapa from '../Mapa'
import Icon from 'react-native-vector-icons/Ionicons'
import Products from '../Products'

const TopNavigator = () => {
  const Tab = createMaterialTopTabNavigator()

  return (
      <Tab.Navigator
        initialRouteName='Mapa'
        screenOptions={{
          tabBarActiveTintColor: '#2EC691',
          tabBarStyle: { height: '10%' }
        }}
      >
        <Tab.Screen
          name="Productors"
          component={Productors}
          options={{
            tabBarLabel: 'Productores',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={25} color={color} />
            ),
            tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: 0 }
          }}
        />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Productos',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cube-outline" size={25} color={color} />
            ),
            tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: 0 }
          }}
        />
        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            headerShown: true,
            tabBarLabel: 'Ubicación',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" size={25} color={color} />
            ),
            tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: 0 }
          }}
        />
      </Tab.Navigator>
  )
}

export default TopNavigator
