import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import productors from '../../constant/productors'
const Productors = () => {
  const Item = ({ granja, image, distancia, totalProductos, calificacion }) => (
    <View style = { styles.card }>
      <View style={{ borderWidth: 2 }}>
        <Image source={{ uri: image }} style={{ borderRadius: 100, width: 80, height: 80, marginLeft: 10 }} />
      </View>
      <View style={{ borderWidth: 2, flexDirection: 'column' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{`${granja} - ${calificacion}`}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray' }}>{distancia}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'gray' }}>{totalProductos}</Text>
      </View>
      <View style={{ borderWidth: 2 }}><Text>Boton</Text></View>
    </View>
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
    <View style={styles.container}>
      <FlatList
        data={productors}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Productors

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundCoor: 'gray',
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    borderWidth: 2,
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 14
  }
})
