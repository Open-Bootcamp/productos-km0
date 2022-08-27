import React, { useState } from 'react';
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { setFirstTimeLoginR } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { data } from '../../constant/SlidersContent';
import { useSlider } from '../../components/hooks/useSlider';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Sliders = () => {
    const disptach = useDispatch();
    const { setFirstTimeLogin } = useSlider();
    const [ activeIndex, setActiveIndex ] = useState(0);
    const [ itemActive, setItemActive ] = useState(0);

    const changeItem = async () => {
        itemActive.snapToNext();

        if(activeIndex === 2) {
            //setFirstTimeLogin()
            disptach(setFirstTimeLoginR())
        }
    }

    const renderItem = (item) => {
        return(
            <View style={styles.contenedorSlider}>
                <Image 
                    source={item.img}
                    resizeMode="cover"
                    style={styles.imageStyle}
                />
                <View style={styles.contentData}>
                    <Text style={styles.textData}>{item.desc}</Text>

                    <TouchableOpacity 
                        onPress={ changeItem }
                        activeOpacity={0.5}
                        style={styles.buttonNext}
                    >
                        <Text style={styles.textButton}>{activeIndex === 2 ? 'Continuar': 'Siguiente'}</Text>
                    </TouchableOpacity>

                    <Pagination 
                        dotsLength={data.length}
                        activeDotIndex={activeIndex}
                        dotStyle={styles.paginationStyle}
                        animatedDuration={0.5}
                    />
                </View>
            </View>
        )
    }

    return(
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'gray'}}>
                <Carousel 
                    data={data}
                    ref={ (e) => setItemActive(e)}
                    renderItem={ ({item}) => renderItem(item)}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth}
                    layout="default"
                    onSnapToItem={ (index) => setActiveIndex(index)}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    contenedorSlider: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: screenWidth,
        height: screenHeight + 40,
        opacity: 0.8,
        zIndex: -10,
        position: 'absolute',
    },
    contentData: {
        backgroundColor: '#292D36',
        zIndex: 10,
        position: 'absolute',
        height: screenHeight * 0.35,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 30,
        opacity: 0.9,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textData: {
        fontSize: 18,
        textAlign: 'center',
        color: '#f2f3f6',
        fontWeight: '700',
        lineHeight: 25
    },
    buttonNext: {
        justifyContent: 'center',
        backgroundColor: '#00A887',
        width: screenWidth * 0.6,
        alignItems: 'center',
        marginTop: 40,
        height: 53,
        borderRadius: 50
    },
    textButton: {
        color: '#f2f3f5',
        fontWeight: '500',
        fontSize: 16
    },
    paginationStyle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#00A887' 
    }
})

export default Sliders;