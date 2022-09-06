import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../../../themes";

const heightScreen = Dimensions.get("screen").height;

const ButtonToAdd = (porps) => {
  return (
    <>
      
      <TouchableOpacity 
        activeOpacity={0.4}
        style={styles.buttonContainer}
      >
        <AntDesign
          name="plus"
          size={50}
          color={'white'}
        />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#FF8F15',
    height: 80,
    width: 80,
    zIndex: 5,
    position: 'absolute',
    bottom: 40,
    right: 15,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ButtonToAdd;
