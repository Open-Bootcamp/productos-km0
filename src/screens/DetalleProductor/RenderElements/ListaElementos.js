import React from 'react';
import { FlatList, View, StyleSheet, Dimensions, Image, Text } from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');

const ListaElementos = ({data,  h = 0.35 }) => {

    // Mostrar Resumen
    const renderCartShop = ({item,}) => {

        return(
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.descContainer}>
                        <Image 
                            source={item.img}
                            resizeMode="cover"
                            style={styles.imageStyles}
                        />
                        <View>
                            <Text style={styles.textItem}>{`${item.subTotalItems} ${item.weigth} de ${item.producto}`}</Text>
                            <Text style={styles.unitiQuantity}>{`$ ${item.price} C/U`}</Text>
                        </View>
                    </View>

                    <View style={styles.subtotalContainer}>
                        <Text style={styles.textSubtotal}>Subtotal</Text>
                        <Text style={styles.subTotalPrice}>{item.subTotal.toFixed(2)} $</Text>
                    </View>
                </View>
            </>
        )
    }

    return(
        <>
            <View style={[styles.listContainer, { height: screenHeight * h}]}>
                <FlatList 
                    data={data}
                    renderItem={renderCartShop}
                    keyExtractor={ (item) => item.id }
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 10
    },
    modalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 15,
        borderBottomColor: '#00A887',
        borderBottomWidth: 1
    },
    descContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageStyles: {
        height: 70,
        width: 70,
        borderRadius: 40,
        marginHorizontal: 5
    },
    textItem: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '500',
        color: '#373C48'
    },
    unitiQuantity: {
        color: '#00A887',
        fontFamily: 'Inter',
        fontWeight: '100',
        fontSize: 13
    },
    subtotalContainer: {
        alignItems: 'center'
    },
    textSubtotal: {
        color: '#FF8F15',
        fontFamily: 'Inter',
        fontSize: 15
    },
    subTotalPrice: {
        fontFamily: 'Inter',
        fontSize: 13,
        fontWeight: '500',
        color: '#00A887'
    },
});

export default ListaElementos;