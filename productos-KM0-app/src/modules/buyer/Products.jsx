import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import products from '../../constant/products'
import Icon from 'react-native-vector-icons/Ionicons'

const Products = () => {
  const Item = ({ producto, image, precio, productor_id }) => (
    <>
    <View style = { styles.card }>
      <View>
        <Image source={{ uri: image }} style={{ borderRadius: 100, width: 100, height: 100, margin: 8 }} />
      </View>
      <View style={{ flexDirection: 'column', padding: 10, width: 200 }}>
        <Text style={{ fontSize: 30 }}>{`${producto} `}</Text>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2EC691', marginTop: 15 }}>{precio}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#F8AA1B', padding: 5, borderRadius: 10, height: 35, justifyContent: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Ver productores { '>' }</Text>
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
        producto={item.producto}
        image={item.image}
        precio={item.precio}
        productor_id={item.productor_id}
        calificacion={item.calificacion}
      />
    )
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          />
      </View>
    </>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundCoor: 'gray',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  card: {
    width: 500,
    flexDirection: 'row',
    marginBottom: 0,
    padding: 8
  }
})
