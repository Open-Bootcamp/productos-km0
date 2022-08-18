import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const Buyer = () => {
  const { width } = Dimensions.get('window')
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
      <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 18 }}>
        <TouchableOpacity>
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
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: 'gray', flex: 1, padding: 18, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Mapa</Text>
      </View>
      <View style={{ backgroundColor: 'white', padding: 18, height: '15%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icon name="home-outline" size={50} color="#2EC691" />
          <Text style={{ color: '#2EC691', fontSize: 15, fontWeight: 'bold', marginLeft: 0 }}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icon name="calendar-outline" size={50} color="#F8AA1B" />
          <Text style={{ color: '#F8AA1B', fontSize: 15, fontWeight: 'bold', marginLeft: 0 }}>Calendario</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="chatbox-ellipses-outline" size={50} color="#F8AA1B" />
          <Text style={{ color: '#F8AA1B', fontSize: 15, fontWeight: 'bold', marginLeft: 8 }}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person-outline" size={50} color="#F8AA1B" />
          <Text style={{ color: '#F8AA1B', fontSize: 15, fontWeight: 'bold', marginLeft: 8 }}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Buyer

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
