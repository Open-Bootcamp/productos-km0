import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from './Chat'
import { Mapa, Productors } from '../modules/buyer'
import Navigation from '../navigation/navigation'

const Buyer = () => {
  const { width } = Dimensions.get('window')
  const Tab = createMaterialTopTabNavigator()

  return (
    <SafeAreaView style={ styles.container }>
      <View style={{ backgroundColor: '#F8AA1B', width, height: '15%', padding: 18, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Hola!</Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{ position: 'absolute', right: 10 }}
        >
          <View style={{ backgroundColor: 'white', width: 60, height: 60, borderRadius: 100, justifyContent: 'center' }}>
            <Text style={{ color: 'gray', fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
            <Icon name="md-notifications-outline" size={30} color="gray" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Navigation />
      {/* <Tab.Navigator
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
          name="Chat"
          component={Chat}
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
            tabBarLabel: 'Ubicación',
            tabBarIcon: ({ color, size }) => (
              <Icon name="map-outline" size={25} color={color} />
            ),
            tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: 0 }
          }}
        />
      </Tab.Navigator> */}

      {/* <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 18 }}> */}
        {/* <TouchableOpacity>
          <Icon name="person-outline" size={25} color="#2EC691" >
            <Text>Productores</Text>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cube-outline" size={25} color="gray">
            <Text>Productos</Text>
          </Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="map-outline" size={25} color="gray">
            <Icon name="list-outline" size={25} color="gray" />
          </Icon>
        </TouchableOpacity> */}
      {/* </View> */}

    </SafeAreaView>
  )
}

export default Buyer

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
