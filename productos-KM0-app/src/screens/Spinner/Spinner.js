import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Spinner = ({ color = "#ff8f15", size="large"}) => {

    return(
        <>
            <View style={styles.container}>
                <ActivityIndicator color={color} size={size} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Spinner;