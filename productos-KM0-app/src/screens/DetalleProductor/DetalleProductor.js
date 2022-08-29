import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity, } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather  } from '@expo/vector-icons';
import { productActions } from '../../features/productsSlice';
import ModalProductor from './ModalProductor';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const opciones = [
    { id: 1, label: 'Todos'},
    { id: 2, label: 'Frutas'},
    { id: 3, label: 'Verduras'},
    { id: 4, label: 'Tuberculos'},
    { id: 5, label: 'Abarrotes'},
    { id: 6, label: 'Legumbres'},
    { id: 7, label: 'Hortalizas'},
]

const products = [
    { id: 1, product: 'Tomate', isSelected: false, price: 0.5, quality: 'Alta', weigth: 'KL', belongsTo: 'Todos', img: require('../../../assets/aguacate.jpg') },
    { id: 2, product: 'Banano', isSelected: false, price: 0.3, quality: 'Media', weigth: 'LB', belongsTo: 'Fruta', img: require('../../../assets/papa.jpg') },
    { id: 3, product: 'Lechuga', isSelected: false, price: 0.2, quality: 'Alta', weigth: 'KL', belongsTo: 'Verduras', img: require('../../../assets/banano.jpg') },
    { id: 4, product: 'Aguacate', isSelected: false, price: 0.9, quality: 'Media', weigth: 'LB', belongsTo: 'Todos', img: require('../../../assets/aguacate.jpg')  },
    { id: 5, product: 'Papas', isSelected: false, price: 0.7, quality: 'Media', weigth: 'KL', belongsTo: 'Tuberculos', img: require('../../../assets/lechuga.jpg')  },
    { id: 6, product: 'Banano', isSelected: false, price: 0.3, quality: 'Media', weigth: 'KL', belongsTo: 'Abarrotes', img: require('../../../assets/aguacate.jpg')  },
    { id: 7, product: 'Pepino', isSelected: false, price: 0.1, quality: 'Alta', weigth: 'LB', belongsTo: 'Legumbres', img: require('../../../assets/papa.jpg')  },
    { id: 8, product: 'Tomate', isSelected: false, price: 0.5, quality: 'Alta', weigth: 'KL', belongsTo: 'Hortalizas', img: require('../../../assets/lechuga.jpg')  },
    { id: 9, product: 'Banano', isSelected: false, price: 0.3, quality: 'Media', weigth: 'LB', belongsTo: 'Verduras',img: require('../../../assets/aguacate.jpg')  },
    { id: 10, product: 'Lechuga', isSelected: false, price: 0.2, quality: 'Alta', weigth: 'KL', belongsTo: 'Todos', img: require('../../../assets/lechuga.jpg') },
    { id: 11, product: 'Aguacate', isSelected: false, price: 0.9, quality: 'Media', weigth: 'LB', belongsTo: 'Frutas',  img: require('../../../assets/banano.jpg') },
]

const DetallesProductor = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // Estados
    const { myCartShop, totalCartItems } = useSelector( (state) => state.products )
    const [ favorite, isFavorite ] = useState(false);
    const [ filter, setFilter ] = useState(opciones[0].label);
    const [ showModal, setShowModal ] = useState(false);

    // Aplicar Filtro
    let filteredData = products.filter( (ele) => {
        if(filter === 'Todos') {
            return ele
        }else {
            return ele.belongsTo.toLowerCase() === filter.toLowerCase();
        }
    })
    //console.log(myCartShop, 'desde redux')
    const handleFavorite = () => {
        isFavorite(!favorite)
    }

    const backHandler = () => {
        navigation.goBack();
    }

    const addProductShop = (item) => {
        dispatch(productActions.addProductCart({
            id: item.id,
            img: item.img,
            belongsTo: item.belongsTo,
            price: item.price,
            producto: item.product,
            quality: item.quality,
            weigth: item.weigth,
            subTotal: item.price,
            subTotalItems: 1,
        }))
    };

    const removeProductShop = (item) => {
        dispatch(productActions.removeProductCart({
            id: item.id,
            img: item.img,
            belongsTo: item.belongsTo,
            price: item.price,
            producto: item.product,
            quality: item.quality,
            weigth: item.weigth,
            subTotal: item.price,
            subTotalItems: 1
        }))
    }

    const getTotalAmountProducts = () => {
        let total = 0;
        myCartShop.forEach( (item) => {
            total = total + item.subTotal
        });
        return total.toFixed(2)
    }

    const getTotalItemsProduct = (item) => {
        const index = myCartShop.findIndex( (ele) => ele.id === item.id);
        const getItemAmount = myCartShop[index];
        let amountFounded;
        if( getItemAmount) {
            amountFounded = getItemAmount.subTotalItems
        }else {
            amountFounded = 0
        }
        return amountFounded;
    }

    const showModalContent = () => {
        setShowModal(true);
    }

    const hideModalContent = () => {
        setShowModal(false)
    }

    const renderDato = ({item}) => {
        return(
            <View style={styles.itemContainer}>
                <Text onPress={() => setFilter(item.label)} style={[styles.textFilter, {color: filter.toLowerCase() === item.label.toLowerCase() ? '#373C48' : '#A6B1C2' }]}>{item.label}</Text>
            </View>
        )
    }

    const renderProduct = ({item, index}) => {
        const result = getTotalItemsProduct(item);
        return(
            <View style={styles.contentItemContainer}>
                <View style={styles.checkBoxContainer}>
                    <View>
                        <Image
                            source={item.img}
                            style={styles.imageStyles}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.productInfor}>
                        <Text style={styles.textItem}>{item.product}</Text>
                        <View style={styles.contentData}>
                            <Text style={styles.priceItem}>{item.price} $ {'/'} </Text>
                            <Text style={styles.priceItem}>{item.weigth}</Text>
                        </View>
                        <View style={styles.contentData}>
                            <Text style={styles.textQuality}>Calidad: </Text>
                            <Text style={styles.textQuality}>{item.quality}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.amountContainer}>
                        {
                            result > 0 && (
                                <>
                                    <AntDesign onPress={() => removeProductShop(item)} name="minussquareo" size={30} color="#FF8F15" />
                                    <View style={styles.amountContainerAmount}>
                                        <Text style={[styles.itemAmount, {paddingHorizontal: 10}]}>{result}</Text>
                                        <Text style={styles.itemAmount}>{item.weigth}</Text>
                                    </View>
                                </>
                            )
                        }
                        <AntDesign onPress={() => addProductShop(item) } name="plussquareo" size={30} color="#FF8F15" />
                    </View>
                </View>
            </View>
        )
    }

    return(
        <>
            <View 
                style={styles.mainContainer}
            >
                <View>
                    <LinearGradient
                        colors={[ '#FF8F15','#F2BE1F']}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={styles.headerContainer}
                    >
                        <AntDesign onPress={backHandler} name='left' size={30} color="#F2F3F5" />
                            <View style={styles.imgContainer}>
                                <Image 
                                    source={require('../../../assets/productorImg.png')}  
                                    resizeMode="cover"
                                    style={styles.imgStyle}                              
                                />
                            </View>
                        <AntDesign onPress={handleFavorite} name={ favorite ? 'heart' : 'hearto'} size={24} color='#F2F3F5' />
                    </LinearGradient>
                </View>

                <View style={styles.contentContainer}>
                    <View >
                        <View style={styles.contentSubHeader}>
                            <Text style={styles.farmName}>Granja la esperanza</Text>
                            <View style={styles.ratingContent}>
                                <AntDesign name="staro" size={23} color="#F2BE1F" /> 
                                <Text style={styles.textRating}> 4.5</Text>
                            </View>
                        </View>
                        {/* Contenedor iconos */}
                        <View style={styles.iconsContainer}>
                            <View style={styles.contentIcon}>
                                <Feather name="map-pin" size={20} color="black" />
                                <Text style={styles.textIcons}>1.3 Kilometros</Text>
                            </View>
                            <View style={styles.contentIcon}>
                                <Feather name="truck" size={20} color="black" />
                                <Text style={styles.textIcons}>Domicilio</Text>
                            </View>
                            <View style={styles.contentIcon}>
                                <Feather name="home" size={20} color="black" />
                                <Text style={styles.textIcons}>Punto de entrega</Text>
                            </View>
                        </View>
                        {/* Contenedor opciones */}
                        <View style={styles.filterContainer}>
                            <FlatList 
                                horizontal={true}
                                data={opciones}
                                renderItem={renderDato}
                                keyExtractor={ (item) => item.id }
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        {/* Render de contenido y opcion de agregar */}
                        <View style={styles.productsMainContainer}>
                            <FlatList 
                                showsVerticalScrollIndicator={true}
                                data={filteredData}
                                renderItem={renderProduct}
                                keyExtractor={ (item) => item.id }
                            />
                        </View>

                        {/* Render de cart shop y boton */}
                        <View style={styles.totalCartContainer}>
                            <View style={styles.containerImage}>
                                <Text style={styles.textTotal}>{getTotalAmountProducts()} $Total</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={[styles.detailsContainer, { backgroundColor: myCartShop.length <= 0 ? '#ffc180': '#FF8F15'}]}
                                    onPress={showModalContent}
                                    disabled={myCartShop.length === 0}
                                >

                                    <View style={styles.shopContainer}>
                                        <AntDesign name="shoppingcart" size={40} color="#f2f3f5" />
                                        {
                                            totalCartItems > 0 && (
                                                <>
                                                    <View style={styles.badgeContainer}>
                                                        <Text style={styles.textBadge}>{totalCartItems}</Text>
                                                    </View>
                                                </>
                                            )
                                        }
                                    </View>
                                    
                                    <Text style={styles.textDetails}>Ver Detalles</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            {
                showModal && (
                    <View style={styles.modalContainer}>
                        <ModalProductor 
                            onCancelModal={hideModalContent}
                        />
                    </View>
                )
            }
        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        zIndex: 10
    },
    textDetails: {
        marginHorizontal: 8,
        fontFamily: 'Inter',
        fontSize: 17,
        color: '#f2f3f5',
        fontWeight: '500'
    },
    textBadge: {
        color: '#FF8F15',
        fontFamily: 'Inter',
        fontWeight: '500'
    },
    badgeContainer: {
        backgroundColor: '#F2F3F5',
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25
    },
    shopContainer: {
        //backgroundColor: 'pink',
        position: 'relative',
        width: 60,
        height: 50,
        flexDirection: 'row',
        alignItems:'flex-end'
    },
    detailsContainer: {
        width: screenWidth * 0.5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15
    },
    textTotal: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '700',
        color: '#00A887'
    },
    containerImage: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageTotal: {
        height: 70,
        width: 60,
        marginHorizontal: 5
    },
    totalCartContainer: {
        backgroundColor: '#D4DDEA',
        height: screenHeight * 0.13,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemAmount: {
        paddingHorizontal: 3,
        paddingVertical: 2,
        borderWidth: 1,
        borderColor: '#D4DDEA',
        borderRadius: 5
    },
    buttonsContainer: {
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    amountContainerAmount: {
        flexDirection: 'row'
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textQuality: {
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: '500',
        color: '#373C48'
    },
    priceItem: {
        fontFamily: 'Inter',
        fontSize: 15,
        fontWeight: '500',
        color: '#00A887'
    },
    textItem: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
        color: '#373C48'
    },
    productInfor: {
        //backgroundColor: 'yellow',
        marginRight: 10
    },
    contentData: {
        flexDirection: 'row'
    },
    imageStyles: {
        height: 70,
        width: 70,
        borderRadius: 40,
        marginHorizontal: 5
    },
    checkStyle: {
        marginHorizontal: 2
    },
    checkBoxContainer: {
        //backgroundColor: 'yellow',
        flexDirection: 'row',
        width: screenWidth * 0.5,
        paddingVertical: 10,
        height: screenHeight * 0.15,
        alignItems: 'center'
    },
    contentItemContainer: {
        //backgroundColor: 'pink',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 3,
        marginVertical: 3
    },
    productsMainContainer: {
        //backgroundColor: 'red',
        //maxHeight: screenHeight * 0.65,
        height: screenHeight * 0.65,
        paddingHorizontal: 15
    },
    textFilter: {
        fontSize: 13,
        fontFamily: 'Inter',
        fontWeight: '500'
    },
    itemContainer: {
        paddingHorizontal: 8
    },
    filterContainer: {
        //backgroundColor: 'orange',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    textIcons: {
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: '500',
        marginLeft: 3
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    contentIcon: {
        flexDirection: 'row'
    },
    textRating: {
        color: '#F2BE1F',
        fontFamily: 'Inter',
        fontSize: 15
    },
    ratingContent: {
        position: 'absolute',
        right: 10,
        top: 0,
        flexDirection: 'row',
    },
    farmName: {
        fontFamily: 'Inter',
        fontSize: 20,
        color: '#282d36',
        fontWeight: '600'
    },
    contentSubHeader: {
        //backgroundColor: 'pink',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
        position: 'relative',
        paddingVertical: 5,
    },
    imgContainer: {
        paddingHorizontal: 5,
        position: 'absolute',
        left: screenWidth * 0.5 - 35,
        top: screenHeight * 0.07,
        zIndex: 10,
        borderRadius: 50
    },
    imgStyle: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    headerContainer: {
        height: screenHeight * 0.12,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 10,
        paddingHorizontal: 10,
        position: 'relative'
    },
    contentContainer: {
        //backgroundColor: 'yellow'
    },
    mainContainer: {
        flex: 1,
        //backgroundColor: 'green',
    }
})

export default DetallesProductor;