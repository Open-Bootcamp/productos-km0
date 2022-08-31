import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useNavigation } from '@react-navigation/native';
import Productors from '../Productors'
import Mapa from '../Mapa'
import Icon from 'react-native-vector-icons/Ionicons'
import Products from '../Products'
import { navigationActions } from '../../../features/navigationSlice';
import { useDispatch, useSelector } from 'react-redux';

const TopNavigator = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const Tab = createMaterialTopTabNavigator()
  const { initialRoute } = useSelector( (state) => state.navigationslice )

  useEffect(() => {
    dispatch(navigationActions.changePageHeader('Mapa'))
  },[])

  return (
      <Tab.Navigator
        
        initialRouteName='Mapa'
        
        screenOptions={{
          tabBarActiveTintColor:  initialRoute === 'Mapa' ? '#2EC691' : '#2EC691',
          tabBarInactiveTintColor: initialRoute === 'Mapa' ? '#373C48': '#f2f3f5',
          tabBarIndicatorContainerStyle: {
            backgroundColor: initialRoute === 'Mapa' ? '#F2F3F5' : '#FF8F15'
          },
          tabBarStyle: {
            height: 50,
          },
          tabBarItemStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#2EC691'
          },
          swipeEnabled: false
        }}
        
      >
        <Tab.Screen
          name="Productors"
          component={Productors}
          options={{
            tabBarLabel: 'Productores',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person-outline" size={18} color={color} />
            ),
          }}
          listeners={ ({navigation, route}) => ({
            tabPress: e => {
              dispatch(navigationActions.changePageHeader(route.name))
            }
          })}
        />
        <Tab.Screen
          name="Products"
          component={Products}
          options={{
            tabBarLabel: 'Productos',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cube-outline" size={18} color={color} />
            ),
          }}
          listeners={ ({navigation, route}) => ({
            tabPress: e => {
              dispatch(navigationActions.changePageHeader(route.name))
            }
          })}
        />
        <Tab.Screen
          name="Mapa"
          component={Mapa}
          options={{
            headerShown: true,
            tabBarLabel: 'Ubicación',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" size={18} color={color} />
            ),
          }}
          listeners={ ({navigation, route}) => ({
            tabPress: e => {
              dispatch(navigationActions.changePageHeader(route.name))
            }
          })}
        />
      </Tab.Navigator>
  )
}

export default TopNavigator
