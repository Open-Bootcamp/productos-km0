import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const NofiticationContainer = () => {

    const showMyNotifications = () => {
        Alert.alert(
            'Hola',
            'Tienes 50 notificaciones',
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
        <TouchableOpacity
            activeOpacity={0.4}
            onPress={showMyNotifications}
        >
            <View style={styles.notificationContainer}>
            <Icon style={{ marginTop: 3, marginRight: 3}} name="md-notifications-outline" size={30} color="#FF8F15" />

            <View style={styles.textNotificationContainer}>
                <Text style={styles.textNotifiation}>+99</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textNotifiation: {
        fontSize: 10,
        fontFamily: 'Inter',
        color: '#f2f3f5',
        fontWeight: '600'
    },
    textNotificationContainer: {
        backgroundColor: 'red',
        position: 'absolute',
        top: -2,
        right: -2,
        borderRadius: 15,
        height: 26,
        width: 26,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationContainer: {
        backgroundColor: '#F2F3F5',
        width: screenWidth * 0.12,
        height: screenHeight * 0.055,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40
    },
});

export default NofiticationContainer;