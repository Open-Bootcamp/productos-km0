import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import productors from '../constant/productors'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const Chat = () => {
  const w = screenWidth * 0.65
  const sizeImage = screenWidth * 0.15
  const sizeLabel = screenWidth * 0.045
  const sizeDescription = screenWidth * 0.040
  const navigation = useNavigation()

  const showChat = () => {
    navigation.navigate('ChatDetail')
  }

  const Item = ({ granja, image, numeroPedido }) => (
    <>
    <View style = { styles.card }>
      <TouchableOpacity
          activeOpacity={0.5}
          onPress={ showChat }
        >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: image }} style={{ borderRadius: 100, width: sizeImage, height: sizeImage, marginTop: 10 }} />
          </View>
          <View style={{ flexDirection: 'column', width: w }}>
            <Text style={{ fontSize: sizeLabel, fontWeight: 'bold', marginTop: 10 }}>{`${granja} `}</Text>
            <View style={{ marginTop: 10, flexDirection: 'row' }}>
              <Icon name='cube-outline' style={{ fontSize: sizeDescription, marginTop: 3 }} />
              <Text style={{ fontSize: sizeDescription, fontWeight: 'bold', color: 'gray' }}>{ numeroPedido }</Text>
            </View>
          </View>
          <View style={{ justifyContent: 'center' }} >
            <Icon name='ios-chevron-forward' style={{ fontSize: sizeLabel }} />
          </View>
      </View>
        </TouchableOpacity>
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
        numeroPedido={item.numero_pedido}
      />
    )
  }
  return (
    <>
      <LinearGradient
        style={styles.headerContainer}
        colors={['#FF8F15', '#FF8F15']}
        start={[0, 0]}
        end={[1, 1]}
        >
          <View style={styles.titleHeader}>
            <Text style={ styles.textHeader }>Chats</Text>
          </View>
      </LinearGradient>
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
const styles = StyleSheet.create({
  headerContainer: {
    flax: 1,
    padding: 18,
    height: screenHeight * 0.10
  },
  titleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  textHeader: {
    color: 'white',
    fontSize: screenWidth * 0.050,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundCoor: 'gray',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: Dimensions.get('window').width * 0.92,
    // flexDirection: 'row',
    padding: 5
  }
})

export default Chat
