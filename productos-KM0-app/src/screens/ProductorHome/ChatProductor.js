import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ChatProductor = () => {

    return(
        <View style={styles.mainContainer}>
            <Text>Chat De productor</Text>
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

export default ChatProductor;