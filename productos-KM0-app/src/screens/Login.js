import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginPage = () => {

    const clearSession = async () => {
        // TODO remover ## funcion de prueba para eliminar del storage
        await AsyncStorage.removeItem('$firstTime');
    }

    return(
        <View>
            <Text>Login page</Text>

            <Button 
                title="Limpiar Async"
                onPress={clearSession}
            
            />
        </View>
    )
}

export default LoginPage;