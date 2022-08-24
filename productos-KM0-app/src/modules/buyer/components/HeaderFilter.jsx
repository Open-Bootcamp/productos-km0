import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderFilter = () => {
  const { width } = Dimensions.get('window')

  return (
    <View style={{ backgroundColor: '#F8AA1B', width, height: '15%', padding: 18, justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>Hola2!</Text>
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
  )
}

export default HeaderFilter
