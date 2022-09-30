import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SliderContext = createContext();

export const SliderProvider = ({children}) => {

    const [ loading, setLoading ] = useState(true);
    const [ isFirstTime, setIsFirstTime ] = useState(false);

    const checkUnboarding = async () => {
        try {
            const result = await AsyncStorage.getItem('$firstTimne')
            if(!result) {
                setIsFirstTime(true)
            }

        } catch (error) {
            console.log(error, 'unable to get item from Async')
        }finally {
            setLoading(false)
        }
    }

    const setFirstTimeLogin = async () => {
        try {
            await AsyncStorage.setItem('$firstTimne', 'true')
            setIsFirstTime(false)
        } catch (error) {
            console.log(error, 'unable to set item')
        }
    }

    return(
        <SliderContext.Provider
            value={{
                isFirstTime: isFirstTime,
                isLoading: loading,
                // Funciones
                checkUnboarding: checkUnboarding,
                setFirstTimeLogin: setFirstTimeLogin
            }}
        >
            {children}
        </SliderContext.Provider>
    )
}