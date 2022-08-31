import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import productors from '../../constant/productors'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Productors = () => {
  const navigation = useNavigation();

  const detalleProductorHandler = () => {
    navigation.navigate('DetalleProductor')
  }

  const withScreen = Dimensions.get('window').width
  const w = withScreen * 0.55
  const sizeImage = withScreen * 0.15
  const sizeLabel = withScreen * 0.045
  const sizeDescription = withScreen * 0.040
  const Item = ({ granja, image, distancia, totalProductos, calificacion }) => (
    <>
    <View style = { styles.card }>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image source={{ uri: image }} style={{ borderRadius: 100, width: sizeImage, height: sizeImage, marginTop: 10 }} />
      </View>
      <View style={{ flexDirection: 'column', width: w, padding: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: sizeLabel, fontWeight: 'bold' }}>{`${granja} `}</Text>
          <Icon name='star-outline' style={{ marginTop: 8, fontSize: withScreen * 0.030, color: '#F8AA1B' }} />
          <Text style={{ fontSize: withScreen * 0.030, color: '#F8AA1B', marginTop: 6 }}>{ `${calificacion}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='location-outline' style={{ fontSize: sizeDescription, marginTop: 3 }} />
          <Text style={{ fontSize: sizeDescription, fontWeight: 'bold', color: 'gray' }}>{distancia}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='cube-outline' style={{ fontSize: sizeDescription, marginTop: 3 }} />
          <Text style={{ fontSize: sizeDescription, fontWeight: 'bold', color: 'gray' }}>{totalProductos}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={detalleProductorHandler}
          style={{ backgroundColor: '#2EC691', padding: 10, borderRadius: 5, height: 50, justifyContent: 'center' }}
        >
          <Text style={{ color: 'white', fontSize: sizeLabel }}>Ver { '>' }</Text>
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
    alignItems: 'center',
    marginLeft: -1
  },
  card: {
    width: Dimensions.get('window').width * 0.95,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    padding: 8
  }
})
