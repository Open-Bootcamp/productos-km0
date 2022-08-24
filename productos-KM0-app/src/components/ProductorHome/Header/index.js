import { Text , View} from "react-native"
import {  Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import HeaderProductorHomeStyle from "./style";
import { colors } from "../../../themes";

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
        {notification.type?(<Ionicons
            name="ellipse"
            size={18}
            color={colors.textError}
            style={Style.iconNotification}
           
          />):(<></>)}
       
        <Text style={Style.textHeader}>Hola!</Text>
        <View style={Style.notificationContain}>
        <Ionicons
          name="notifications-outline"
          size={20}
          color={colors.gradientOrange.primary}
          style={Style.iconHeader}
        />
        </View>
      </LinearGradient>
      
    </>)
}
export default HeaderProductorHome