import React from 'react'
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Chat from './Chat'
import { IndexBuyer } from '../modules/buyer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calendar from '../screens/Calendar'
import Perfil from '../screens/Perfil'
import HeaderWelcome from '../modules/buyer/components/HeaderWelcome'
const Buyer = () => {
  const Tab = createBottomTabNavigator()
  const withScreen = Dimensions.get('window').width
  const w = withScreen * 0.09
  return (
    <SafeAreaView style={ styles.container }>
      <Tab.Navigator
        initialRouteName='IndexBuyer'
        screenOptions={{
          tabBarActiveTintColor: '#2EC691',
          tabBarStyle: { height: '10%' }
        }}
      >
        <Tab.Screen
          name="IndexBuyer"
          component={IndexBuyer}
          options={{
            headerTitle: (props) => <HeaderWelcome {...props} />,
            // title: 'My home',
            headerStyle: {
              // backgroundColor: '#f4511e',
              backgroundColor: (props) => <HeaderWelcome {...props} />,
              height: '20%'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home-outline" size={w} color={color} />
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
              <Icon name="calendar-outline" size={w} color={color} />
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
              <Icon name="chatbox-ellipses-outline" size={w} color={color} />
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
              <Icon name="person-outline" size={w} color={color} />
            ),
            tabBarLabelStyle: { marginBottom: 10, fontSize: 18, marginTop: -15 }
          }}
        />
      </Tab.Navigator>

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
