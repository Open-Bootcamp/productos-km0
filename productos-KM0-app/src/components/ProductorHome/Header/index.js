import { Text , View, Dimensions} from "react-native"
import {  Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HeaderProductorHomeStyle from "./style";
import { colors } from "../../../themes";
const heightScreen = Dimensions.get("screen").height;
const widthScreen = Dimensions.get("screen").width;

const HeaderProductorHome = props =>{
const {notification} =props

const Style = HeaderProductorHomeStyle

    return(<>
   
     <LinearGradient
        colors={[
          colors.gradientOrange.primary,
          colors.gradientOrange.secondary,
        ]}
        start={[0, 0]}
        end={[1, 1]}
        style={Style.header}
      >
       
       
        <Text style={Style.textHeader}>Hola!</Text>
        <View style={Style.notificationContain}>
        {notification.type?(<Ionicons
            name="ellipse"
            size={heightScreen * 0.023}
            color={colors.textError}
            style={Style.iconNotification}
           
          />):(<></>)}<Ionicons
          name="notifications-outline"
          size={heightScreen * 0.027}
          color={colors.gradientOrange.primary}
          style={Style.iconHeader}
        /> 
        </View>
      </LinearGradient>
      
    </>)
}
export default HeaderProductorHome