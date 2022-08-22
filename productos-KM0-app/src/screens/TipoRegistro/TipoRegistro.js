import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign  } from '@expo/vector-icons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const TipoRegistro = () => {
    const navigation = useNavigation();
    const backHandler = () => {
        // retroceder a pagina de inicio de sesion
        navigation.goBack();
    }

    const compradorHandler = () => {
        Alert.alert(
            'Redirigir',
            'Redirigir pantallas comprador',
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

    const productorHandler = () => {
        Alert.alert(
            'Redirigir',
            'Redirigir pantallas productor',
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

    return(
        <>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <AntDesign onPress={backHandler} name='left' size={30} color="#373C48" />
                        <Text style={styles.title}>Regístrate como...</Text>
                    </View>

                    <View style={styles.cardsContainer}>
                        <TouchableOpacity 
                            activeOpacity={0.8} 
                            onPress={compradorHandler} 
                            style={styles.compradorContainer}
                        >
                            <View style={styles.imgContainer}>
                                <View style={styles.bgImg}>
                                    <Image 
                                        source={require('../../../assets/consumidor.png')}
                                        resizeMode="cover"
                                        style={styles.imgStyle}
                                    />
                                </View>
                            </View>

                            <View style={styles.contentContainer}>
                                <Text style={styles.titleContent}>Comprador</Text>
                                <Text style={styles.textContent}>Apoye a los agricultores locales y disfrute de los ingredientes más frescos</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            activeOpacity={0.8}
                            onPress={productorHandler}
                            style={styles.productorContainer}
                        >
                            <View style={styles.imgContainer}>
                                <View style={styles.bgImg}>
                                    <Image 
                                        source={require('../../../assets/agricultor.png')}
                                        resizeMode="cover"
                                        style={styles.imgStyle}
                                    />
                                </View>
                            </View>

                            <View style={styles.contentContainer}>
                                <Text style={styles.titleContent}>Productor</Text>
                                <Text style={styles.textContent}>Publica tus productos sin coste adicional y haz que los vean cientos de compradores</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F2F3F5'
    },
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        paddingVertical: 5
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Inter',
        marginLeft: 15,
        lineHeight: 29
    },
    cardsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingBottom: 35
    },
    compradorContainer: {
        backgroundColor: '#00A887',
        height: screenHeight * 0.25,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: screenHeight * 0.025,
        paddingHorizontal: screenHeight * 0.025,
    },
    bgImg: {
        backgroundColor: '#fff2c8',
        height: '100%',
        width: '100%',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgStyle: {
        height: 150,
        width: 100,
        borderRadius: 25
    },
    contentContainer: {
        width: '55%',
        paddingHorizontal: 5
    },
    productorContainer: {
        backgroundColor: '#FF8F15',
        height: screenHeight * 0.25,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContent: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Inter',
        fontWeight: '700'
    },
    textContent: {
        fontFamily: 'Inter',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 18,
        color: '#f2f3f5',
        marginTop: 10,
    }
})

export default TipoRegistro;