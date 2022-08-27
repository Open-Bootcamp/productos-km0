import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import products from '../../constant/products'
import Icon from 'react-native-vector-icons/Ionicons'

const Products = () => {
  const withScreen = Dimensions.get('window').width
  const w = withScreen * 0.30
  const sizeImage = withScreen * 0.15
  const sizeLabel = withScreen * 0.045
  const Item = ({ producto, image, precio, productor_id }) => (
    <>
    <View style = { styles.card }>
      <View>
        <Image source={{ uri: image }} style={{ borderRadius: 100, width: sizeImage, height: sizeImage, marginTop: 10 }} />
      </View>
      <View style={{ flexDirection: 'column', padding: 10, width: w }}>
        <Text style={{ fontSize: sizeLabel }}>{`${producto} `}</Text>
        <Text style={{ fontSize: sizeLabel, fontWeight: 'bold', color: '#2EC691', marginTop: 10 }}>{precio}</Text>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          style={{ backgroundColor: '#F8AA1B', padding: 5, borderRadius: 10, height: 45, justifyContent: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: sizeLabel }}>Ver productores { '>' }</Text>
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
    marginLeft: 0
  },
  card: {
    width: Dimensions.get('window').width * 0.95,
    flexDirection: 'row',
    marginBottom: 0,
    padding: 8
  }
})
