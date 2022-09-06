import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chat from '../../screens/Chat'
import ChatDetail from '../../screens/ChatDetail'
const stack = createNativeStackNavigator()
const config = {
  animation: 'fade',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
}

const ChatCompradorNavigator = () => {
  return (
    <stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal'
      }}
      headerMode='float'
      animation='fade'
    >
      <stack.Screen
        name="Chat"
        component={ Chat }
        options={{
          transitionSpec: {
            open: config,
            close: config
          },
          headerShown: false
        }}
      />
      <stack.Screen
        name='ChatDetail'
        component={ ChatDetail }
      />
    </stack.Navigator>
  )
}

export default ChatCompradorNavigator
