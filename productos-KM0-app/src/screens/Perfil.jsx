import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from '../features/userSlice';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilComprador = () => {
    const distpach = useDispatch();
    const navigation = useNavigation();
    const removeHandler = async () => {
        navigation.navigate('Login')
        await AsyncStorage.removeItem('$firstTimne')
        console.log('session quitada para probar inicio de sesion')
    }

    const logoutHandler = () => {
        navigation.navigate('Login')
        distpach(userAction.logOutHandler());
    }

    return(
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={removeHandler}
            >
                <Text>Resetear Local storage</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.logoutContainer}
                onPress={logoutHandler}
            >
                <Text>Cerrar Sesion</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    logoutContainer: {
        backgroundColor: 'pink',
        height: 30,
        width: 150,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 30,
        marginTop: 30
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PerfilComprador;