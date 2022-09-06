import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import ProductorHomeStyles from "./style";
import ContainerProducts from "../../components/ProductorHome/Body/ContainerProducts";
import ListPressables from "../../components/ProductorHome/Body/ListPressables";
import mockUpProducts from "../../utils/mockUpProducts";
import ButtonToAdd from "../../components/ProductorHome/ButtonToAdd";
import HeaderProductorHome from "../../components/ProductorHome/Header";
import { dataTurorial } from "../../constant/TutorialFirstTime";
import { AntDesign  } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { turotialUnboarding, setFirstTimeTutorial } from '../../services/screenServices';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const ProductorHome = (props) => {
  const dispatch = useDispatch();
  const [ indexItem, setIndexItem ] = useState(1);
  const { isLoadingUn, isFirstimeUm } = useSelector( (state) => state.unboardingSlice )
  const notification = { type: "chat" };

  useEffect(() => {
    dispatch(turotialUnboarding())
  }, [])
  const onNextItem = () => {

    if(indexItem === 9 ) {
      dispatch(setFirstTimeTutorial())
    } else {
      setIndexItem( indexItem + 1)
    }
  }

  const skipTutorial = () => {
    dispatch(setFirstTimeTutorial())
  }

  return (
    <>
      <View style={ProductorHomeStyles.screen}>
        <HeaderProductorHome notification={notification}/>
        <ListPressables />
        <ContainerProducts data={mockUpProducts} />
        <ButtonToAdd/>

        {
          isFirstimeUm && (
            <View style={styles.tuturialContainer}>
                {
                  dataTurorial.map( (ele) => {
                    if(ele.id === indexItem) {
                      return(
                        <View key={ele.id} style={[styles.itemContainer, { top: screenHeight * ele.position.top, left: screenWidth * ele.position.left }]}>
                          <View>
                            <View style={styles.indicatorContainer}>
                              <Text style={styles.textContent}>{ele.label}</Text>
                            </View>

                            <View style={styles.buttonsContainer}>
                              <Text onPress={ skipTutorial } style={[ styles.textOmit]}>{indexItem === 9 ? '' : 'Omitir'}</Text>
                              {
                                indexItem === 9 ? ( <Text style={styles.textOmit} onPress={onNextItem}>Entiendo</Text> ) : ( <AntDesign onPress={onNextItem} name='right' size={20} color="#f2f3f5" />)
                              }
                            </View>
                          </View>

                          {
                            indexItem === 1 ? null : (
                              <View 
                                style={[styles.triangleContainer, { transform: [ { rotate: ele.rotate}], top: screenHeight * ele.top, right: ele.right, left: screenWidth * ele.left}]}
                              />
                            )
                          }
                        </View>
                      )
                    }
                  })
                }
            </View>
          )
        }
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  triangleContainer: {
    width: 0,
    height: 0,
    borderWidth: 15,
    borderColor: 'transparent',
    borderBottomColor: '#FF8F15',
    borderBottomWidth: 18,
    position: 'absolute',
  },
  textOmit: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 13,
    color: 'white'
  },
  buttonsContainer: {
    backgroundColor: '#FF8F15',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10
  },
  textContent: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
    color: '#f2f3f5'
  },
  tuturialContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 10,
    height: screenHeight,
    width: screenWidth,
    position: 'absolute',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemContainer: {
    width: screenWidth * 0.55,
    height: screenHeight * 0.099,
    //backgroundColor: 'gray',
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  indicatorContainer: {
    backgroundColor: '#FF8F15',
    width: screenWidth * 0.48,
    height: screenHeight * 0.055,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 5
  }
})

export default ProductorHome;
