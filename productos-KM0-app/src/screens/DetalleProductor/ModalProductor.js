import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import ListaElementos from './RenderElements/ListaElementos';

const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

const ModalProductor = ({ onCancelModal }) => {
    const navigation = useNavigation();
    const { myCartShop } = useSelector( (state) => state.products )

    const getTotalAmountProducts = () => {
        let total = 0;
        myCartShop.forEach( (item) => {
            total = total + item.subTotal
        });
        return total.toFixed(2)
    }

    const reservarPedido = () => {
        onCancelModal(false)
        navigation.navigate('ResumenPedido');
    }

    
    return(
        <>
            <View style={styles.mainContainer}>
                <View style={styles.recapContainer}>
                    <Text style={styles.textRecap}>El resumen de tu pedido</Text>

                    <ListaElementos data={myCartShop} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[styles.totalText, {color: '#00A887'}]}>Total</Text>
                        <Text style={[styles.totalText, {color: '#FF8F15', fontSize: 19}]}>{getTotalAmountProducts()} $</Text>
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={onCancelModal}
                            style={[styles.actionsStyle, { backgroundColor: '#00A887'}]}
                        >
                            <Text style={styles.textActions}>Seguir Ordenando</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={reservarPedido}
                            style={[styles.actionsStyle, { backgroundColor: '#FF8F15'}]}
                        >
                            <Text style={styles.textActions}>Reservar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textActions: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '600',
        color: '#f2f3f5'
    },
    actionsStyle: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: screenWidth * 0.4,
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 8
    },
    buttonsContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 8
    },
    
    totalText: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: '700',
    },
    textRecap: {
        fontFamily: 'Inter',
        fontWeight: '600',
        fontSize: 17,
        color: '#00A887'
    },
    
    
    recapContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        height: screenHeight * 0.5,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 20
    },
    mainContainer: {
        backgroundColor: 'rgba(76,75,75,0.5)',
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center'
    }
})

export default ModalProductor;