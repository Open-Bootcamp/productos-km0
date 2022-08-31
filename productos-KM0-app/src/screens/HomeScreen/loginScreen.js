import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Image, KeyboardAvoidingView, Text, Dimensions, TextInput, Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { userAction } from '../../features/userSlice';
import { colors } from "../../themes/colors";
import { font } from "../../themes/fonts";
import { Octicons } from "@expo/vector-icons";
import imgGoogle from '../../../assets/ic_google.png';
import { loginUser } from '../../services/userService';
import Spinner from '../Spinner/Spinner';
import validator from "../../validations/validator";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const LoginScreen = () => {
    const dispatch = useDispatch();
    const { spinner, isAuth, user } = useSelector( (state) => state.user );
    const navigation = useNavigation();
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    // estados de formulario
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secure, setSecure] = useState(true);
    const [ isOpen, setIsOpen ] = useState(false);
    const [erroMessage, setErrorMessage] = useState(false);
    const [ emailError, setEmailError ] = useState(false);
    const [ passwordError, setPasswordError ] = useState(false);

    useEffect(() => {
        const keyboardOpened = Keyboard.addListener('keyboardDidShow', () => {
            setIsOpen(true);
        });
        const keyboardClosed = Keyboard.addListener('keyboardDidHide', () => {
            setIsOpen(false);
        })
        return () => {
            keyboardOpened.remove();
            keyboardClosed.remove();
        }
    },[])

    // Revisar que tipo de usuario es
    useEffect(() => {
        if(isAuth) {
            if(user.typeUser === 'productor') {
                navigation.navigate('ProductorHome');
            }else if( user.typeUser === 'comprador') {
                navigation.navigate('CompradorHome');
            }
        }

        setEmail('')
        setPassword('')
    },[isAuth]);
    //Funciones
    const validateForm = () => {

        setTimeout(() => {
            setErrorMessage(false)
            setEmailError(false);
            setPasswordError(false);
        }, 2500)
        if(!email && !password) {
            setErrorMessage(true);
            return;
        }
        if(email !== '' && !regex.test(email)){
            setEmailError(true)
            return;
        }
        if( password.length < 7){
            setPasswordError(true);
            return;
        }
        //330076118
        setPassword("");

        if(!emailError && !passwordError ) {
            Keyboard.dismiss();
            // Validar que haya iniciado sesion, redirigir a respectivo home
            //dispatch(loginUser()) //TODO enviar objeto de validacion

            // Prueba para tipo de usuario
            if(password === '1234567'){
                dispatch(loginUser(1)) // productor
            }else if (password === '12345678'){
                dispatch(loginUser(2)) // comprador
            }
            // Fin prueba tipo de usuario
            // Funcion de prueba
            dispatch(userAction.actionSpinner(true));
        }
    }

    const loginWithGoogle = () => {
        Alert.alert(
            'Ventana para google',
            'Cool iniciaras sesion con google',
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

    const handlerRegister = () => {
        navigation.navigate('RegistroHome');
    }

    const resetPassword = () => {
        Alert.alert(
            'cambiar password',
            'Te ayudaremos a cambiar tu contraseña',
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
            <KeyboardAvoidingView 
                behavior="padding"
                style={[styles.mainContainer]}
            >
                    <View style={[styles.headerContainer, { paddingBottom: isOpen ? 0 : screenHeight * 0.10 }]}>
                        <Text style={styles.titlePrimary}>Ingresar</Text>
                        <Text style={styles.titleSecondary}>KM-0</Text>
                    </View>

                    <View style={[styles.contentContainer,]}>
                        {
                            erroMessage && ( <Text style={styles.errorMsg}>Los campos son obligatorios</Text>)
                        }
                        <View style={styles.dataContainer}>
                            <View>
                                { emailError && (<Text style={styles.errorMsg}>Formato de correo no valido</Text>)}
                                <TextInput
                                    placeholder='Correo Electronico'
                                    keyboardType="email-address"
                                    onChangeText={(text) => {
                                        setEmail(text);
                                    }}
                                    value={email}
                                    style={[styles.emailInput, {backgroundColor: "#D4DDEA", borderColor: emailError ? 'red': 'gray', borderWidth: emailError ? 1 : 0}]}
                                />
                            </View>
                            <View>
                                { passwordError  && (<Text style={[styles.errorMsg, { alignSelf:'flex-end'}]}>* Contraseña incorrecta</Text>) }
                                <View style={[styles.passwordInputContainer]}>
                                    <Octicons name="key" size={18} color="#131212"/>
                                    <TextInput
                                        placeholder='Contraseña'
                                        keyboardType="default"
                                        secureTextEntry={secure}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                        }}
                                        value={password}
                                        style={styles.passwordInput}
                                    />

                                    <Octicons
                                        name={secure ? "eye" : "eye-closed"}
                                        size={18}
                                        color="black"
                                        
                                        onPress={() => {
                                            setSecure(!secure);
                                        }}
                                    />
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={validateForm}
                                    activeOpacity={0.5} 
                                    style={styles.buttonSubmit}>
                                    <Text style={styles.textButtonSubmit}>{spinner ? <Spinner color='#fff' /> : 'Ingresar'}</Text>
                                </TouchableOpacity>
                            </View>

                            <Text 
                                onPress={resetPassword}
                                style={styles.textToRestorePassword}
                            >¿Olvidaste tu contraseña?</Text>
                        </View>
                        <View style={styles.styleContainer}>
                            <View style={styles.lineContent} />
                            <Text>O</Text>
                            <View style={styles.lineContent} />
                        </View>

                        <View style={styles.footerContainer}>
                            <TouchableOpacity 
                                activeOpacity={0.5}
                                style={[styles.footerContent, { backgroundColor: '#D4DDEA'}]}
                                onPress={loginWithGoogle}
                            >
                                <View style={styles.googleButton}>
                                    <Image
                                        source={imgGoogle}
                                        style={styles.imgGoogleStyle}
                                        resizeMode="cover"
                                    />
                                    <Text style={styles.textGoogle}>Ingresa con Google</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                activeOpacity={0.5}
                                onPress={handlerRegister}
                                style={[styles.footerContent, {backgroundColor: colors.gradientOrange.primary}]}
                            >
                                <Text style={styles.textButtonRegister}>Registrate</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </KeyboardAvoidingView>
    )   
}

const styles = StyleSheet.create({
    mainContainer: {
        //backgroundColor: 'green',
        backgroundColor: '#F2F3F5',
        display: 'flex',
        flex: 1,
        paddingHorizontal: 18
    },
    headerContainer: {
        //backgroundColor: 'pink',
        marginTop: screenHeight * 0.10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titlePrimary: {
        fontSize: font.h1.size,
        fontWeight: font.h1.weight,
        fontFamily: font.inter.family,
    },
    titleSecondary: {
        fontSize: 30,
        fontWeight: font.h1.weight,
        color: colors.gradientGreen.secondary,
        fontFamily: font.poppins.family,
    },
    contentContainer: {
        //backgroundColor: 'gray',
        display: 'flex',
        height: screenHeight * 0.73
    },
    dataContainer: {
        height: screenHeight * 0.45,
        justifyContent: 'space-evenly'
    },
    emailInput: {
        paddingVertical: 22,
        borderRadius: 25,
        paddingHorizontal: 20
    },
    passwordInputContainer: {
        //backgroundColor:'yellow',
        backgroundColor: '#D4DDEA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 3
    },
    passwordInput: {
        width: '90%',
        //backgroundColor: 'pink',
        height: 60,
        paddingHorizontal: 5
    },
    buttonSubmit: {
        backgroundColor: colors.gradientGreen.primary,
        borderRadius: 25,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonSubmit: {
        fontStyle: "normal",
        fontWeight: font.b1.weight,
        fontSize: 16,
        lineHeight: 19,
        color: colors.screenBackground,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textToRestorePassword: {
        color: colors.gradientOrange.primary,
        fontFamily: font.s1.family,
        fontStyle: font.s1.style,
        fontWeight: font.s1.weight,
        fontSize: font.s1.size,
        alignSelf: 'center'
    },
    styleContainer: {
        //backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    lineContent: {
        borderColor: "#A6B1C2",
        borderWidth: 1,
        width: '45%'
    },
    footerContainer: {
        //backgroundColor: 'purple',
        paddingVertical: 20,
        height: screenHeight * 0.25,
        justifyContent: 'space-evenly'
    },
    footerContent: {
        height: screenHeight * 0.07,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleButton: {
        flexDirection: 'row'
    },
    imgGoogleStyle: {
        height: 30,
        width: 30
    },
    textGoogle: {
        fontSize: 16,
        lineHeight: 19,
        color: colors.textSecondary,
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: font.h2.weight,
        fontSize: 14,
        marginLeft: 15
    }, 
    textButtonRegister: {
        fontStyle: "normal",
        fontWeight: font.b1.weight,
        fontSize: 16,
        lineHeight: 19,
        color: colors.screenBackground,
    },
    errorMsg: {
        fontFamily: font.inter.family,
        fontSize: font.b2.size,
        fontWeight: font.b2.weight,
        color: colors.textError,
    }
})

export default LoginScreen;