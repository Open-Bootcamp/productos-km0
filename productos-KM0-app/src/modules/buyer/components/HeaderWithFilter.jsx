import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, TextInput, FlatList, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import NotificationContainer from './UI/NotificationContainer';
import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ListaFiltro } from '../../../constant/listaFiltro';
import { useSelector } from 'react-redux';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const HeaderFilter = () => {

  const { initialRoute } = useSelector( (state) => state.navigationslice )

  const openFilterModal = () => {
    Alert.alert(
      'Modal Filter',
      'Abrir modal para mostrar filtros',
      [
          {
              text: 'Cancel',
              onPress: () => console.log('Prueba'),
              style: 'cancel'
          },
          {
              text: 'Ok',
              onPress: () => console.log('prueba ok')
          }
      ]
  )
  }

  const showFilterModal = () => {
    Alert.alert(
      'Modal filtro busqueda',
      'Abrir modal para buscar productos o productores',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Prueba'),
                style: 'cancel'
            },
            {
                text: 'Ok',
                onPress: () => console.log('prueba ok')
            }
        ]
    )
  }

  const renderListadoFiltro = ({item}) => {

    return(
      <TouchableOpacity 
        activeOpacity={0.4}
        style={styles.itemContainer}
      >
        <View style={styles.descContainer}>
          <Text style={styles.textItem}>{item.label}</Text>
          <Feather name={item.icon} size={15} color="#373C48" />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <LinearGradient
      style={[styles.headerContainer, { height: initialRoute === 'Productors' ? screenHeight * 0.15 : screenHeight * 0.10 }]}
      colors={[ '#FF8F15', '#FF8F15']}
      start={[0, 0]}
      end={[1, 1]}
    >
      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <Feather name="search" size={24} color="#00A887" style={{ marginLeft: 15, marginRight: 5}} />
          {/* <TextInput 
            keyboardType="default"
            placeholder='Buscar productores o productos'
            style={styles.searchTextInput}
            placeholderTextColor="#00A887"
          /> */}
          <TouchableOpacity 
            activeOpacity={0.4}
            onPress={showFilterModal}
            style={styles.buttonSearchContainer}
          >
            <Text style={styles.textSearch}>Buscar productores o productos</Text>
          </TouchableOpacity>
        </View>

        <NotificationContainer />
      </View>
      {
        initialRoute === 'Productors' && (
          <>
            <View style={styles.filterContainer}>
              <TouchableOpacity 
                onPress={openFilterModal}
                style={styles.iconSearchContainer}
              >
                <MaterialCommunityIcons name="sort-reverse-variant" size={32} color="#373C48" />
              </TouchableOpacity>
              <View style={styles.filterListContainer}>
                <FlatList 
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={ListaFiltro}
                  renderItem={renderListadoFiltro}
                  keyExtractor={ (item) => item.id }
                />
              </View>
            </View>
          </>
        )
      }
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  textSearch: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    color: '#00A887'
  },
  buttonSearchContainer: {
    //backgroundColor: 'green',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 30
  },
  textItem: {
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: '500',
    marginHorizontal: 3
  },
  descContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemContainer: {
    backgroundColor: '#f2f3f5',
    marginHorizontal: 5,
    paddingHorizontal: 5,
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 4
  },
  filterListContainer: {
    marginLeft: 5,
    //backgroundColor: 'yellow',
    maxWidth: screenWidth * 0.83
  },
  iconSearchContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 3,
    width: 35,
    borderRadius: 5,
    alignItems: 'center'
  },
  filterContainer: {
    //backgroundColor: 'green',
    height: 40,
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchTextInput: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 13,
    height: 40,
    width: screenWidth * 0.6
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: '#f2f3f5',
    width: screenWidth * 0.75,
    borderRadius: 10
  },
  subContainer: {
    //backgroundColor: 'green',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerContainer: {
    //backgroundColor: '#F8AA1B', 
    padding: 18, 
  },
})

export default HeaderFilter
