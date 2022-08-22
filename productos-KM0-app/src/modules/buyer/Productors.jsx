import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import productors from '../../constant/productors'
import Icon from 'react-native-vector-icons/Ionicons'

const Productors = () => {
  const Item = ({ granja, image, distancia, totalProductos, calificacion }) => (
    <>
    <View style = { styles.card }>
      <View>
        <Image source={{ uri: image }} style={{ borderRadius: 100, width: 80, height: 80, marginLeft: 10 }} />
      </View>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{`${granja} `}</Text>
          <Icon name='star-outline' style={{ marginTop: 8, fontSize: 18, color: '#F8AA1B' }} />
          <Text style={{ fontSize: 18, color: '#F8AA1B', marginTop: 6 }}>{ `${calificacion}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='location-outline' style={{ marginTop: 0, fontSize: 22 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray' }}>{distancia}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='cube-outline' style={{ marginTop: 0, fontSize: 22 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray' }}>{totalProductos}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#2EC691', padding: 10, borderRadius: 5, height: 60, justifyContent: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 25 }}>Ver { '>' }</Text>
        </TouchableOpacity>
      </View>
    </View>
      <View
        style={{
          height: 1,
          // backgroundColor: 'rgba(255, 255, 255 ,0.3)',
          backgroundColor: 'gray',
          alignSelf: 'stretch'
        }}
      />
    </>
  )

  const renderItem = ({ item }) => {
    return (

      <Item
        granja={item.granja}
        image={item.image}
        distancia={item.distancia}
        totalProductos={item.totalProductos}
        calificacion={item.calificacion}
      />
    )
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={productors}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
      </View>
    </>
  )
}

export default Productors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundCoor: 'gray',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
    padding: 10
  }
})
