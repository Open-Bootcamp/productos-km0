import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5, MaterialIcons, Feather  } from '@expo/vector-icons';
import ListaElementos from '../DetalleProductor/RenderElements/ListaElementos';
import { useSelector } from 'react-redux';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


const ResumenPedido = () => {
    const navigation = useNavigation();
    const { myCartShop } = useSelector( (state) => state.products );
    const [ isActive, setIsActive ] = useState(true);
    const nombreGranja = 'La esperanza';
    const tipoCambio = '$';
    const getTotalAmountProducts = () => {
        let total = 0;
        myCartShop.forEach( (item) => {
            total = total + item.subTotal
        });
        return total.toFixed(2)
    }

    const backHandler = () => {
        navigation.goBack();
    }

    const changeScreen = () => {
        setIsActive(!isActive)
    }

    // Funcion flecha derecha
    const funcionIrA = () => {
        Alert.alert(
            'Navegar aaa',
            'Navegar hacia otra pantalla aca',
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

    // Funcion reservar
    const reservOrder = () => {
        Alert.alert(
            'Boton ordenar aca',
            'WOW tu orden se encuenta enproceso',
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

    // Mostrar condicionalmente la direccion o entrega
    const Domicilio = () => {
        return(
            <View style={styles.direccionContainer}>
                <View style={styles.directionContent}>
                    <View style={styles.pinTextContent}>
                        <Feather name="map-pin" size={24} color="#00A887" />
                        <Text style={styles.textPin}>Entregar en</Text>
                    </View>
                        
                        <ScrollView
                            horizontal={true}
                            style={{ marginHorizontal: 5 }}
                        >
                            <Text style={styles.textStreet}>Calle industriales, 50006</Text>
                        </ScrollView>
                        <View style={styles.containerName}>
                            <Text style={styles.textName}>David Cardona</Text>
                            <Text style={styles.textNumber}> + 375 29 123 45 67</Text>
                        </View>
                </View>

                <View>
                    <AntDesign onPress={funcionIrA} name='right' size={30} color="#373C48" />
                </View>
            </View>
        )
    }

    const Recogida = () => {
        return(
            <View style={styles.direccionContainer}>
                <View style={styles.directionContent}>
                    <View style={styles.pinTextContent}>
                        <Feather name="map-pin" size={22} color="#00A887" />
                        <Text style={styles.textPin}>Recibir en</Text>
                    </View>
                        <ScrollView
                            horizontal={true}
                            style={{ marginHorizontal: 5 }}
                        >
                            <Text style={styles.textStreet}>Granja la esperanza / Calle industriales, 50006</Text>
                        </ScrollView>
                        <View style={styles.containerName}>
                            <Text style={styles.textName}>David Cardona</Text>
                            <Text style={styles.textNumber}> + 375 29 123 45 67</Text>
                        </View>
                </View>

                <View>
                    <AntDesign onPress={backHandler} name='right' size={30} color="#373C48" />
                </View>
            </View>
        )
    }

    return(
        <>
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <LinearGradient
                        colors={[ '#FF8F15','#F2BE1F']}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={styles.gradientContainer}
                    >
                        <View style={styles.headerContent}>
                            <AntDesign onPress={backHandler} name='left' size={30} color="#f2f3f5" />
                            <Text style={styles.textHeader}>Enviar Pedido</Text>
                            <Text>{''}</Text>
                        </View>
                    </LinearGradient>
                </View>
                <View >
                    <View style={styles.contentContainer}>
                        <View style={styles.buttonsStyle}>
                            <TouchableOpacity 
                                activeOpacity={0.5}
                                style={[styles.contentButton, {backgroundColor: isActive ?  '#ff8f15' : '#f2f3f5'}]}
                                onPress={changeScreen}
                            >
                                <FontAwesome5 name="truck" size={15} color={ isActive ? '#f2f3f5' : '#ff8f15' } />
                                <Text
                                    style={[styles.buttonText, { color: isActive ? '#f2f3f5' : '#ff8f15'}]}
                                >Domicilio</Text>    
                            </TouchableOpacity>

                            <TouchableOpacity 
                                activeOpacity={0.5}
                                style={[styles.contentButton, {backgroundColor: !isActive ?  '#ff8f15' : '#f2f3f5'}]}
                                onPress={changeScreen}
                            >
                                <MaterialIcons name="house" size={24} color={ !isActive ? '#f2f3f5' : '#ff8f15' } />
                                <Text 
                                    style={[styles.buttonText, { color: !isActive ? '#f2f3f5' : '#ff8f15'}]}
                                >Punto de Recogida</Text>
                            </TouchableOpacity>
                        </View>

                        { isActive ? <Domicilio /> : <Recogida />}

                        <View style={styles.listStyle}>
                            <Text style={styles.textFarm}>Granja {nombreGranja}</Text>
                            <View style={{ paddingBottom: 25, paddingTop: 10}}>
                                <ListaElementos data={myCartShop} h={0.40} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.footerContainer}>
                        <View style={styles.totalContainer}>
                            <View style={styles.imageTotalContainer}>
                                <Image 
                                    source={require('../../../assets/BolsaCompra.png')}
                                    style={styles.imageStyle}
                                    resizeMode="cover"
                                />
                                <Text style={styles.textTotal}>Total</Text>
                            </View>
                            <Text style={styles.totalNumber}>{getTotalAmountProducts()} {tipoCambio}</Text>
                        </View>

                        <LinearGradient
                            colors={[ '#FF8F15','#F2BE1F']}
                            start={[0, 0]}
                            end={[1, 1]}
                            style={styles.gradientReserv}
                        >
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.contentReserv}
                                onPress={reservOrder}
                            >
                                <Text style={styles.textReserv}>Reservar</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#D4DDEA',
        flex: 1,
    },
    gradientContainer: {
        height: screenHeight * 0.13,
        width: screenWidth,
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    headerContainer: {
        height: screenHeight * 0.13,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        width: screenWidth,
        paddingHorizontal: 5
    },
    textHeader: {
        fontSize: 20,
        fontFamily: 'Inter',
        textAlign: 'center',
        color: '#f2f3f5',
        fontWeight: '600'
    },
    buttonsStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 13,
        paddingHorizontal: 5
    },
    contentButton: {
        width: screenWidth * 0.44,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#ff8f15',
        borderWidth: 1
    },
    contentContainer: {
        height: screenHeight * 0.73,
        backgroundColor: '#fff',
        paddingHorizontal: 13,
        paddingVertical: 10
    },
    buttonText: {
        paddingHorizontal: 2,
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: '500'
    },
    direccionContainer: {
        paddingVertical: 5,
        height: screenHeight * 0.12,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#00A887',
        borderBottomWidth: 3,
        marginBottom: 10
    },
    directionContent: {
        width: screenWidth * 0.85,
    },
    pinTextContent: {
        flexDirection: 'row',
    },
    textPin: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 14,
        color: '#373c48',
        marginLeft: 3
    },
    textStreet: {
        fontFamily: 'Inter',
        fontSize: 16,
        fontWeight: '500',
        paddingBottom: 3,
        flexWrap: 'wrap',
        paddingHorizontal: 7
    },
    containerName: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    textName: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 20
    },
    textNumber: {
        color: '#A6B1C2',
        fontSize: 14,
        fontFamily: 'Inter',
        fontWeight: '500',
        marginLeft: 10
    },
    listStyle: {
        backgroundColor: '#D4DDEA',
        maxHeight: screenHeight * 0.52,
        borderRadius: 20,
        paddingHorizontal: 5,        
    },
    textFarm: {
        paddingTop: 5,
        paddingHorizontal: 5
    },
    contentList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
        paddingHorizontal: 3
    },
    priceDetails: {
        paddingHorizontal: 5,
        flexDirection: 'row',
    },
    textDetails: {
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 17
    },  
    textPrice: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 15,
        color: '#00A887'
    },
    footerContainer: {
        height: screenHeight * 0.17,
        paddingHorizontal: 13,
        paddingVertical: 7
    },
    totalContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10
    },
    imageTotalContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    imageStyle: {
        height: 60,
        width: 60
    },
    textTotal: {
        fontFamily: 'Inter',
        fontSize: 24,
        fontWeight: '700',
        color: '#000'
    },
    totalNumber: {
        fontFamily: 'Inter',
        fontWeight: '700',
        fontSize: 24,
        color: '#00A887',
        marginRight: 3
    },
    gradientReserv: {
        height: 65,
        marginTop: 7,
        borderRadius: 10
    },
    contentReserv: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textReserv: {
        fontFamily: 'Inter',
        fontWeight: '500',
        color: '#fff',
        fontSize: 16
    }
})

export default ResumenPedido;