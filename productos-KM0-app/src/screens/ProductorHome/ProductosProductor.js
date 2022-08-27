import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProductosProductor = () => {

    return(
        <View style={styles.mainContainer}>
            <Text>Todos los productos De productor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductosProductor;